import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  public articles: any[] = [];


  constructor() { }

  getArticles() {
    // Simulate an API call with a delay
    return of([
      {
        id: 1,
        title: 'Pizza Margherita',
        description: 'Clásica pizza italiana con tomate, mozzarella y albahaca fresca.',
        price: 12,
        cantidad: 1,
        image: '../../assets/img/comida.jpg',
      },
      {
        id: 2,
        title: 'Pizza Pepperoni',
        description: 'Deliciosa pizza con pepperoni y queso derretido.',
        price: 14,
        cantidad: 5,
        image: '../../assets/img/comida.jpg',
      },
      {
        id: 3,
        title: 'Pizza Vegetariana',
        description: 'Pizza con una variedad de verduras frescas y queso.',
        price: 13,
        cantidad: 20,
        image: '../../assets/img/comida.jpg',
      },
      {
        id: 4,
        title: 'Ensalada César',
        description: 'Ensalada fresca con lechuga, pollo a la parrilla, crutones y aderezo César.',
        price: 10,
        cantidad: 0,
        image: '../../assets/img/comida.jpg',
      },
      {
        id: 5,
        title: 'Limonada con agua mineral',
        description: 'Refrescante limonada con agua mineral y un toque de menta.',
        price: 5,
        cantidad: 5,
        image: '../../assets/img/comida.jpg',
      }
    ]);
  }
}
