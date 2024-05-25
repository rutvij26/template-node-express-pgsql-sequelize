import { Router } from "express";
import { listUsers } from "./list";

const router = Router()

// Add routes here
router.get('/', listUsers);


export default router;