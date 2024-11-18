import { Router } from "express";

import { findAllPaymentTypesFactory } from "../FindAllPaymentTypes/FindAllPaymentTypesFactory";
import { findByIdPaymentTypeFactory } from "../FindByIdPaymentType/FindByIdPaymentTypeFactory";
import { updatePaymentTypeFactory } from "../UpdatePaymentType/UpdatePaymentTypeFactory";
import { deletePaymentTypeFactory } from "../DeletePaymentType/DeletePaymentTypeFactory";
import { createPaymentTypeFactory } from '../CreatePaymentType/CreatePaymentTypeFactory';

export const paymentTypeRoutes = Router();

paymentTypeRoutes.route('/')
  .post((request, response) => { return createPaymentTypeFactory().handle(request, response) } )
  .get((request, response) => { return findAllPaymentTypesFactory().handle(request, response) } )

paymentTypeRoutes.route('/:id')
  .get((request, response) => { return findByIdPaymentTypeFactory().handle(request, response) } )
  .put((request, response) => { return updatePaymentTypeFactory().handle(request, response) } )
  
paymentTypeRoutes.route('/:id/deletedBy/:user')
  .delete((request, response) => { return deletePaymentTypeFactory().handle(request, response) } )
  