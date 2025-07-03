import {inject, Injectable} from '@angular/core';
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
import {Firestore, setDoc} from "@angular/fire/firestore";

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
}
