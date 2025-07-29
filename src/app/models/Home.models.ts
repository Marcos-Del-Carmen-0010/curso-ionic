import { StoreModel } from './Store.models';
import {ContactModel} from "./Contac.models";
import { ModelsFirebase } from "./Firebase";

export namespace HomeModel {
    export import Store = StoreModel;
    export import Contact = ContactModel;
    export import FireBase = ModelsFirebase;
}
