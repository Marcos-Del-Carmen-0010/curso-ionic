export namespace StoreModel {
    export interface IProducto {
        id?: number;
        title: string;
        description: string;
        price: number;
        cantidad: number;
        image?: string
    }
    export interface IPedido {

    }
    export interface ICarrito {
        total: number;
        cantidadTotal: number;
        productos: {
            items: IProducto,
            cant: number;
        }[];
    }
}