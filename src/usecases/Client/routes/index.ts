import { Router } from "express";

import { findAllClientsFactory } from "../FindAllClients/FindAllClientsFactory";
import { findByIdClientFactory } from "../FindByIdClient/FindByIdClientFactory";
import { findByIdentityClientFactory } from "../FindByIdentityClient/FindByIdentityClientFactory";
import { updateClientFactory } from "../UpdateClient/UpdateClientFactory";
import { deleteClientFactory } from "../DeleteClient/DeleteClientFactory";
import { createClientFactory } from '../CreateClient/CreateClientFactory';


export const clientRoutes = Router();

clientRoutes.route('/')
  .post((request, response) => { return createClientFactory().handle(request, response) } )
  .get((request, response) => { return findAllClientsFactory().handle(request, response) } )

clientRoutes.route('/:id')
  .get((request, response) => { return findByIdClientFactory().handle(request, response) } )
  .put((request, response) => { return updateClientFactory().handle(request, response) } )
    
clientRoutes.route('/byIdentity/:identity')
  .get((request, response) => { return findByIdentityClientFactory().handle(request, response) } )
  
clientRoutes.route('/:id/deletedBy/:user')
  .delete((request, response) => { return deleteClientFactory().handle(request, response) } )