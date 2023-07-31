/*
Liskov Substituion principle (Principio da substituição de Liskov) -
Se Φ(x) é uma propriedade desmonstrável do objeto x de tipo T. Então Φ(y)
deve ser verdadeiro para objetos y de tipo S onde Sé um subtipo de T.

Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
Mais simples ainda: Se meu programa espera um animal, algo do tipo
Cachorro (que herda de animal) deve servir como qualquer outro animal.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPorcentDiscount } from './classes/discount';

// const fiftyPorcentDiscount = new FiftyPorcentDiscount();
const tenPorcentDiscount = new TenPorcentDiscount();
const shoppingCart = new ShoppingCart(tenPorcentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Mochila', 89.9));
shoppingCart.addItem(new Product('Caderno', 19.9));
shoppingCart.addItem(new Product('Caneta', 2.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
