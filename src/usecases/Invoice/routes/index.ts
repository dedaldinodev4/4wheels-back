import { Router } from "express";


import { findAllInvoicesFactory } from "../FindAllInvoices/FindAllInvoicesFactory";
import { findByIdInvoiceFactory } from "../FindByIdInvoice/FindByIdInvoiceFactory";
import { findByStatusInvoiceFactory } from "../FindByStatus/FindByStatusInvoiceFactory";
import { updateInvoiceFactory } from "../UpdateInvoice/UpdateInvoiceFactory";
import { deleteInvoiceFactory } from "../DeleteInvoice/DeleteInvoiceFactory";
import { createInvoiceFactory } from '../CreateInvoice/CreateInvoiceFactory';

export const invoiceRoutes = Router();

invoiceRoutes.route('/')
  .post((request, response) => { return createInvoiceFactory().handle(request, response) } )
  .get((request, response) => { return findAllInvoicesFactory().handle(request, response) } )

invoiceRoutes.route('/:id')
  .get((request, response) => { return findByIdInvoiceFactory().handle(request, response) } )
  .put((request, response) => { return updateInvoiceFactory().handle(request, response) } )
  .delete((request, response) => { return deleteInvoiceFactory().handle(request, response) } )
  

invoiceRoutes.route('/byStatus')
  .get((request, response) => { return findByStatusInvoiceFactory().handle(request, response) } )
  