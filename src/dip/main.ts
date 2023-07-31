/*
  Dependency Inversion Principle - Módulos de alto nível não devem depender de
  módulos de baixo nível. Ambos devem depender de abstrações.
  Dependa de abstrações, não de implementações.
  Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.

  Classes de baixo nível são classes que executam tarefas (os detalhes)
  Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPorcentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';

// const fiftyPorcentDiscount = new FiftyPorcentDiscount();
const tenPorcentDiscount = new TenPorcentDiscount();
const shoppingCart = new ShoppingCart(tenPorcentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Andre',
//   'Pereira',
//   '111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer('Desireé', '0000/0001-00');

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Mochila', 89.9));
shoppingCart.addItem(new Product('Caderno', 19.9));
shoppingCart.addItem(new Product('Caneta', 2.9));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
