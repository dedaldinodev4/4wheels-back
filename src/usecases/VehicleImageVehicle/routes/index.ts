import { Router } from "express";

import { findAllVehicleImageVehiclesFactory } from "../FindAllVehicleImageVehicles/FindAllVehicleImageVehiclesFactory";
import { findByIdVehicleImageVehicleFactory } from "../FindByIdVehicleImageVehicle/FindByIdVehicleImageVehicleFactory";
import { updateVehicleImageVehicleFactory } from "../UpdateVehicleImageVehicle/UpdateVehicleImageVehicleFactory";
import { deleteVehicleImageVehicleFactory } from "../DeleteVehicleImageVehicle/DeleteVehicleImageVehicleFactory";
import { createVehicleImageVehicleFactory } from '../CreateVehicleImageVehicle/CreateVehicleImageVehicleFactory';
import { findByVehicleFactory } from "../FindByVehicle/FindByVehicleFactory";

export const vehicleImageVehicleRoutes = Router();

vehicleImageVehicleRoutes.route('/')
  .post((request, response) => { return createVehicleImageVehicleFactory().handle(request, response) } )
  .get((request, response) => { return findAllVehicleImageVehiclesFactory().handle(request, response) } )

vehicleImageVehicleRoutes.route('/:id')
  .get((request, response) => { return findByIdVehicleImageVehicleFactory().handle(request, response) } )
  .put((request, response) => { return updateVehicleImageVehicleFactory().handle(request, response) } )
  .delete((request, response) => { return deleteVehicleImageVehicleFactory().handle(request, response) } )    

vehicleImageVehicleRoutes.route('/byVehicle/:id_vehicle')
  .get((request, response) => { return findByVehicleFactory().handle(request, response) } )