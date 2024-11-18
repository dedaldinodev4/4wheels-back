import { Router } from "express";

import { findAllVehicleImagesFactory } from "../FindAllVehicleImages/FindAllVehicleImagesFactory";
import { findByIdVehicleImageFactory } from "../FindByIdVehicleImage/FindByIdVehicleImageFactory";
import { updateVehicleImageFactory } from "../UpdateVehicleImage/UpdateVehicleImageFactory";
import { deleteVehicleImageFactory } from "../DeleteVehicleImage/DeleteVehicleImageFactory";
import { createVehicleImageFactory } from '../CreateVehicleImage/CreateVehicleImageFactory';


export const vehicleImageRoutes = Router();

vehicleImageRoutes.route('/')
  .post((request, response) => { return createVehicleImageFactory().handle(request, response) } )
  .get((request, response) => { return findAllVehicleImagesFactory().handle(request, response) } )

vehicleImageRoutes.route('/:id')
  .get((request, response) => { return findByIdVehicleImageFactory().handle(request, response) } )
  .put((request, response) => { return updateVehicleImageFactory().handle(request, response) } )
  .delete((request, response) => { return deleteVehicleImageFactory().handle(request, response) } )    
