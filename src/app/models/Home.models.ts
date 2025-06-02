import { ArticuloModel } from './Articulo.models';
import { StoreModel } from './Store.models';

export namespace HomeModel {
    export import Articulo = ArticuloModel;
    export import Store = StoreModel;
}