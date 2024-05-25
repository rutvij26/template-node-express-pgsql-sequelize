import { Router } from "express";
import UserRoutes from "./user";

const router = Router()

// Mount the routes here

router.use('/user', UserRoutes)


export default router;