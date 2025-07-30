import { StoreModel } from './Store.models';
import {ContactModel} from "./Contac.models";
import { ModelsFirebase } from "./Firebase";
import { ModelsAuth} from "./auth.models";

export namespace HomeModel {
    export import Store = StoreModel;
    export import Contact = ContactModel;
    export import FireBase = ModelsFirebase;
    export import Auth = ModelsAuth;
}
