const express =require("express");
const router=express.Router();
//Insert Model
const Maintenance=require("./MaintenanceModel");
//Insert maitenance contriller
const MaintenanceControler =require("./MaintenanceControle");

router.get("/",MaintenanceControler.getAllMaintenances);
router.post("/",MaintenanceControler.addMaintenances);
router.get("/:id",MaintenanceControler.getById);
router.put("/:id",MaintenanceControler.updateMaintenance);
router.delete("/:id",MaintenanceControler.deleteMaintenance);



//export
module.exports=router;