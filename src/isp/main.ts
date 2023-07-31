/*
  Interface segregation principle (Princípio da segregação de Interface) -
  os clientes não devem ser forçados a depender de types, interfaces ou membros
  abstratos que não utilizam
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
