import { Router } from "express";

import { findAllVehiclesFactory } from "../FindAllVehicles/FindAllVehiclesFactory";
import { findByIdVehicleFactory } from "../FindByIdVehicle/FindByIdVehicleFactory";
import { updateVehicleFactory } from "../UpdateVehicle/UpdateVehicleFactory";
import { deleteVehicleFactory } from "../DeleteVehicle/DeleteVehicleFactory";
import { createVehicleFactory } from '../CreateVehicle/CreateVehicleFactory';


export const vehicleRoutes = Router();

vehicleRoutes.route('/')
  .post((request, response) => { return createVehicleFactory().handle(request, response) } )
  .get((request, response) => { return findAllVehiclesFactory().handle(request, response) } )

vehicleRoutes.route('/:id')
  .get((request, response) => { return findByIdVehicleFactory().handle(request, response) } )
  .put((request, response) => { return updateVehicleFactory().handle(request, response) } )
  .delete((request, response) => { return deleteVehicleFactory().handle(request, response) } )    
