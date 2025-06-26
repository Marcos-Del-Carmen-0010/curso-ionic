import { StoreModel } from './Store.models';
import {ContactModel} from "./Contac.models";

export namespace HomeModel {
    export import Store = StoreModel;
    export import Contact = ContactModel;
}
