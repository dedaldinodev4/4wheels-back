import { Router } from "express";


import { findAllRentalsFactory } from "../FindAllRentals/FindAllRentalsFactory";
import { findByIdRentalFactory } from "../FindByIdRental/FindByIdRentalFactory";
import { findByStatusRentalFactory } from "../FindByStatus/FindByStatusRentalFactory";
import { updateRentalFactory } from "../UpdateRental/UpdateRentalFactory";
import { deleteRentalFactory } from "../DeleteRental/DeleteRentalFactory";
import { createRentalFactory } from '../CreateRental/CreateRentalFactory';

export const rentalRoutes = Router();

rentalRoutes.route('/')
  .post((request, response) => { return createRentalFactory().handle(request, response) } )
  .get((request, response) => { return findAllRentalsFactory().handle(request, response) } )

rentalRoutes.route('/:id')
  .get((request, response) => { return findByIdRentalFactory().handle(request, response) } )
  .put((request, response) => { return updateRentalFactory().handle(request, response) } )
  .delete((request, response) => { return deleteRentalFactory().handle(request, response) } )
  

rentalRoutes.route('/byStatus')
  .get((request, response) => { return findByStatusRentalFactory().handle(request, response) } )
  