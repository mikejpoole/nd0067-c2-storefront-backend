import { Order, OrderLine } from '../order';

export const validOrderWithId: Order = {
    id: 1,
    user_id: 1,
    order_complete: null
};

export const validOrder: Order = {
    user_id: 1,
    order_complete: null
};


// Order Lines
export const validOrderLineWithEverything: OrderLine = {
    id: 1,
    order_id: 1,
    product_id: 1,
    name: 'Big Can of Stuff',
    quantity: 5
};

export const validOrderLine: OrderLine = {
    order_id: 1,
    product_id: 1,
    quantity: 5
};
