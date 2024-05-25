import { Request, Response } from "express";

export const listUsers = (req: Request, res: Response) => {
    res.send('User List');
}