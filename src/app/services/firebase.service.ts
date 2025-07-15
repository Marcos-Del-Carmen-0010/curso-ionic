import {inject, Injectable} from '@angular/core';
import { collection, addDoc, doc, serverTimestamp, deleteDoc, getDocs, and, limit } from "firebase/firestore";
import {
  collectionData,
  collectionGroup,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
  where,
  query,
  orderBy, or
} from "@angular/fire/firestore";

import {DocumentSnapshot} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {startAfter} from "@angular/fire/database";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);
  // auth: Auth = inject(Auth);


  constructor() {

  }

  async crearDocumento() {
    try {
      console.log('firestore', this.firestore);
      const docRef = await addDoc(
        collection(this.firestore, "users"),
        {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async crearColecion<tipo>(path: string, data: tipo) {
     const refCollection = collection(this.firestore, path);
    const refDoc = doc(refCollection);
    const dataDoc:any = data;
    dataDoc.id = refDoc.id;
    dataDoc.date = serverTimestamp();
    return await setDoc(refDoc, dataDoc);
  }

  async updateDocument(path: string, data: any) {
    const refDoc = doc(this.firestore, path);
    data.updateAt = serverTimestamp();
    return await updateDoc(refDoc, data);
  }

  async deteleDocument(path:string) {
    const refDoc = doc(this.firestore, path);
    await deleteDoc(refDoc);
  }


  async getDocument<tipo>(path: string) {
    const refDocument = doc(this.firestore, path);
    // @ts-ignore
    return await getDoc(refDocument) as DocumentSnapshot<tipo>;
  }

  // async getDocuments<tipo>(path: string, group: boolean = false) {
  //   if(!group) {
  //     const refCollection = collection(this.firestore, path);
  //     // @ts-ignore
  //     return await getDocs(refCollection) as QuerySnapshot<tipo>;
  //   } else {
  //     const refCollection = collectionGroup(this.firestore, path);
  //     // @ts-ignore
  //     return await getDocs(refCollection) as QuerySnapshot<tipo>;
  //   }
  // }

  getDocuments<tipo>(path: string, group: boolean = false) {
    if(!group) {
      const refCollection = collection(this.firestore, path);
      return collectionData(refCollection) as Observable<tipo[]>;
    } else {
      const refCollection = collectionGroup(this.firestore, path);
      return collectionData(refCollection) as Observable<tipo[]>;
    }
  }

  async getDocumentQueryDemo() {
    console.log('getDocumentDemo');
    const refCollection = collection(this.firestore,'Products');
    const q : any = query(refCollection, where("cantidad", ">=", true));
    const querySnapshot  = await getDocs(q);
    querySnapshot.forEach((doc)=>{
      console.log(doc.id,'=>',doc.data());
    })

    collectionData(q).subscribe(res=>{
      console.log('response con query: ',res);
    });
  }

  getDocumentsChanges<tipo>(path: string, group: boolean = false) {
    if (!group) {
      const refCollection = collection(this.firestore, path);
      return collectionData(refCollection) as Observable<tipo[]> ;
    } else  {
      const refCollectionGroup = collectionGroup(this.firestore, path)
      return collectionData(refCollectionGroup) as Observable<tipo[]>;
    }
  }
  getDocumentsQueryChanges<tipo>( path: string, querys: any,  extras?: any ) {

    let q = this.getQuery(path, querys, extras)
    return collectionData(q) as Observable<tipo[]>;
  }

  private getQuery(path: string, querys: any, extras?: any) {

    let ref = extras.group? collectionGroup(this.firestore, path) : collection(this.firestore, path);

    let ors: any = [];
    querys.forEach( (row:any) => {
      let wheres: any = [];
      for (let col = 0; col < row.length; col = col + 3) {
        wheres.push(where(row[col], row[col + 1], row[col + 2]))
      }
      const AND = and(...wheres)
      ors.push( AND )
    });
    let q = query(ref, or(...ors))

    // limit
    if (extras.limit) {
      q = query(q, limit(extras.limit))
    }

    // orderBy
    if (extras.orderParam) {
      q = query(q, orderBy(extras.orderParam, extras.directionSort))
    }

    // startAfter
    if (extras.startAfter) {
      // @ts-ignore
      q = query(q, startAfter(extras.startAfter))
    }

    return q;

  }

}
