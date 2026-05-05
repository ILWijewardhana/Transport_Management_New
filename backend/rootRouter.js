// rootRouter.js
const express = require("express");
const userRoutes = require("./modules/user/route");
const incomeRoutes = require("./modules/income/route");
const expenseRoutes = require("./modules/expense/route");
const driverIncome = require("./modules/driver.income/route");
const inventoryRoutes = require("./modules/inventory/route");
const maintenanceRoutes = require("./modules/maintaince/route");
const vehicleProfileRoutes = require("./modules/vehicel.profile/route");
const vehicleRoutes = require("./modules/vehicle.document/route");
const tripRouter = require("./modules/trip.booking/route");
const clientRouer = require("./modules/client/route");
const inqiueryRouter = require("./modules/inquiry/route");

const inventoryRouter = require("./modules/OrderInventory/Inventoryroutes.js");
const orderRouter = require("./modules/OrderInventory/Orderroutes.js");

const maintenanceRouter=require("./modules/maintain/MaintenanceRoute");
const repairRouter=require("./modules/maintain/RepairRoute");
const breakdownRoute=require("./modules/maintain/BreakdownRoute");
const notificationRoute = require("./modules/maintain/NotificationRoute");

const busRoutes = require("./modules/bus.route/route");


const router = express.Router();

router.use("/users", userRoutes);
router.use("/incomes", incomeRoutes);
router.use("/expenses", expenseRoutes);
router.use("/driver-income", driverIncome);
router.use("/inventory", inventoryRoutes);
router.use("/maintenance", maintenanceRoutes);
router.use("/vprofiles", vehicleProfileRoutes);
router.use("/vehicles", vehicleRoutes);
router.use("/trips", tripRouter);
router.use("/booking-users", clientRouer);
router.use("/inquiries", inqiueryRouter);

router.use("/inventories", inventoryRouter);
router.use("/orders", orderRouter);

router.use("/maintenance",maintenanceRouter);
router.use("/repair",repairRouter);
router.use("/breakdown",breakdownRoute);
router.use("/notification", notificationRoute);
router.use("/bus-routes", busRoutes);

const EmployeeRoute = require('./modules/attendence/routes/EmployeeRoute.js');
const DutyRoute = require('./modules/attendence/routes/DutyRoute');
const AttendanceRoute = require('./modules/attendence/routes/AttendanceRoute');

router.use('/employee', EmployeeRoute);
router.use('/duty', DutyRoute);
router.use('/attendance', AttendanceRoute);

module.exports = router;
