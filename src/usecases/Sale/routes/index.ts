import { Router } from "express";


import { findAllSalesFactory } from "../FindAllSales/FindAllSalesFactory";
import { findByIdSaleFactory } from "../FindByIdSale/FindByIdSaleFactory";
import { findByStatusSaleFactory } from "../FindByStatus/FindByStatusSaleFactory";
import { updateSaleFactory } from "../UpdateSale/UpdateSaleFactory";
import { deleteSaleFactory } from "../DeleteSale/DeleteSaleFactory";
import { createSaleFactory } from '../CreateSale/CreateSaleFactory';
import { findBySalerFactory } from "../FindBySaler/FindBySalerFactory";

export const saleRoutes = Router();

saleRoutes.route('/')
  .post((request, response) => { return createSaleFactory().handle(request, response) } )
  .get((request, response) => { return findAllSalesFactory().handle(request, response) } )

saleRoutes.route('/:id')
  .get((request, response) => { return findByIdSaleFactory().handle(request, response) } )
  .put((request, response) => { return updateSaleFactory().handle(request, response) } )
  .delete((request, response) => { return deleteSaleFactory().handle(request, response) } )
  

saleRoutes.route('/byStatus')
  .get((request, response) => { return findByStatusSaleFactory().handle(request, response) } )

saleRoutes.route('/bySaler/:saler_id')
  .get((request, response) => { return findBySalerFactory().handle(request, response) } )
  