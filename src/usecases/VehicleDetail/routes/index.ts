import { Router } from "express";

import { findAllVehicleDetailsFactory } from "../FindAllVehicleDetails/FindAllVehicleDetailsFactory";
import { findByIdVehicleDetailFactory } from "../FindByIdVehicleDetail/FindByIdVehicleDetailFactory";
import { updateVehicleDetailFactory } from "../UpdateVehicleDetail/UpdateVehicleDetailFactory";
import { deleteVehicleDetailFactory } from "../DeleteVehicleDetail/DeleteVehicleDetailFactory";
import { createVehicleDetailFactory } from '../CreateVehicleDetail/CreateVehicleDetailFactory';


export const vehicleDetailRoutes = Router();

vehicleDetailRoutes.route('/')
  .post((request, response) => { return createVehicleDetailFactory().handle(request, response) } )
  .get((request, response) => { return findAllVehicleDetailsFactory().handle(request, response) } )

vehicleDetailRoutes.route('/:id')
  .get((request, response) => { return findByIdVehicleDetailFactory().handle(request, response) } )
  .put((request, response) => { return updateVehicleDetailFactory().handle(request, response) } )
  .delete((request, response) => { return deleteVehicleDetailFactory().handle(request, response) } )    
