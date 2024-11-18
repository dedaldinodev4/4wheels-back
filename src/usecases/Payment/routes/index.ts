import { Router } from "express";


import { findAllPaymentsFactory } from "../FindAllPayments/FindAllPaymentsFactory";
import { findByIdPaymentFactory } from "../FindByIdPayment/FindByIdPaymentFactory";
import { findByStatusPaymentFactory } from "../FindByStatus/FindByStatusPaymentFactory";
import { updatePaymentFactory } from "../UpdatePayment/UpdatePaymentFactory";
import { deletePaymentFactory } from "../DeletePayment/DeletePaymentFactory";
import { createPaymentFactory } from '../CreatePayment/CreatePaymentFactory';
import { payPaymentFactory } from "../PayPayment/PayPaymentFactory";

export const paymentRoutes = Router();

paymentRoutes.route('/')
  .post((request, response) => { return createPaymentFactory().handle(request, response) } )
  .get((request, response) => { return findAllPaymentsFactory().handle(request, response) } )

paymentRoutes.route('/:id')
  .get((request, response) => { return findByIdPaymentFactory().handle(request, response) } )
  .put((request, response) => { return updatePaymentFactory().handle(request, response) } )
  .delete((request, response) => { return deletePaymentFactory().handle(request, response) } )
  

paymentRoutes.route('/byStatus')
  .get((request, response) => { return findByStatusPaymentFactory().handle(request, response) } )

paymentRoutes.route('/pay/:id')
  .get((request, response) => { return payPaymentFactory().handle(request, response) } )
  