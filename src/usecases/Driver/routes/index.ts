import { Router } from "express";

import { findAllDriversFactory } from "../FindAllDrivers/FindAllDriversFactory";
import { findByIdDriverFactory } from "../FindByIdDriver/FindByIdDriverFactory";
import { findByIdentityDriverFactory } from "../FindByIdentityDriver/FindByIdentityDriverFactory";
import { updateDriverFactory } from "../UpdateDriver/UpdateDriverFactory";
import { deleteDriverFactory } from "../DeleteDriver/DeleteDriverFactory";
import { createDriverFactory } from '../CreateDriver/CreateDriverFactory';


export const driverRoutes = Router();

driverRoutes.route('/')
  .post((request, response) => { return createDriverFactory().handle(request, response) } )
  .get((request, response) => { return findAllDriversFactory().handle(request, response) } )

driverRoutes.route('/:id')
  .get((request, response) => { return findByIdDriverFactory().handle(request, response) } )
  .put((request, response) => { return updateDriverFactory().handle(request, response) } )
    
driverRoutes.route('/byIdentity/:identity')
  .get((request, response) => { return findByIdentityDriverFactory().handle(request, response) } )
  
driverRoutes.route('/:id/deletedBy/:user')
  .delete((request, response) => { return deleteDriverFactory().handle(request, response) } )