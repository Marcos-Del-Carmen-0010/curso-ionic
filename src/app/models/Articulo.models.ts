export namespace ArticuloModel {
    export interface IArticulo {
        id?: number;
        title: string;
        description: string;
        price: number;
        image: {
            url: string;
            desc: string
        }
    }
}