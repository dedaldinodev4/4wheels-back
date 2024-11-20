import { Router } from "express";

//* Import Routes *//
import { authRoutes } from "./usecases/Auth";
import { userRoutes } from "./usecases/User";
import { phoneRoutes } from "./usecases/Phone";
import { vehicleRoutes } from "./usecases/Vehicle";
import { vehicleDetailRoutes } from "./usecases/VehicleDetail";
import { vehicleImageRoutes } from "./usecases/VehicleImage";
import { vehicleImageVehicleRoutes } from "./usecases/VehicleImageVehicle";
import { driverRoutes } from "./usecases/Driver";
import { saleRoutes } from "./usecases/Sale";
import { rentalRoutes } from "./usecases/Rental";
import { invoiceRoutes } from "./usecases/Invoice";
//import { rolePermissionRoutes } from "./usecases/RolePermission";
//import { userSecurityQuestionRoutes } from "./usecases/UserSecurityQuestion";
//import { positionRoutes } from "./usecases/Position";
//import { roadRoutes } from "./usecases/Road";
//import { trollRoutes } from "./usecases/Troll";
//import { gateRoutes } from "./usecases/Gate";
//import { employeeRoutes } from "./usecases/Employee";
//import { classRoutes } from "./usecases/Class";
//import { trollClassRoutes } from "./usecases/TrollClass";
//import { rupeRoutes } from "./usecases/Rupe";
import { paymentTypeRoutes } from "./usecases/PaymentType";
import { paymentRoutes } from "./usecases/Payment";
import { clientRoutes } from "./usecases/Client";
//import { vehicleRoutes } from "./usecases/Vehicle";
//import { trollClientRoutes } from "./usecases/TrollClient";
//import { invoiceRoutes } from "./usecases/Invoice";
//import { cardRoutes } from "./usecases/Card";
//import { companyRoutes } from "./usecases/Company";
//import { boxControlRoutes } from "./usecases/BoxControl";
//import { reversalRoutes } from "./usecases/Reversal";
//import { creditNoteRoutes } from "./usecases/CreditNote";
//import { configRupeRoutes } from "./usecases/ConfigRupe";
//import { workShiftRoutes } from "./usecases/WorkShift";


const PREFIX_ROUTE = "/api/v1" // Prefix Global route

const routes = Router();

routes.use(`${PREFIX_ROUTE}/auth`, authRoutes);
routes.use(`${PREFIX_ROUTE}/users`, userRoutes);
routes.use(`${PREFIX_ROUTE}/clients`, clientRoutes);
routes.use(`${PREFIX_ROUTE}/phones`, phoneRoutes);
routes.use(`${PREFIX_ROUTE}/vehicles`, vehicleRoutes);
routes.use(`${PREFIX_ROUTE}/vehicle_details`, vehicleDetailRoutes);
routes.use(`${PREFIX_ROUTE}/vehicle_images_vehicles`, vehicleImageVehicleRoutes);
routes.use(`${PREFIX_ROUTE}/vehicle_images`, vehicleImageRoutes);
routes.use(`${PREFIX_ROUTE}/drivers`, driverRoutes);
routes.use(`${PREFIX_ROUTE}/payment_types`, paymentTypeRoutes);
routes.use(`${PREFIX_ROUTE}/payments`, paymentRoutes);
routes.use(`${PREFIX_ROUTE}/sales`, saleRoutes);
routes.use(`${PREFIX_ROUTE}/rentals`, rentalRoutes);
routes.use(`${PREFIX_ROUTE}/invoices`, invoiceRoutes);
 

export { routes } 