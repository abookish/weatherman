//imports
import type { Request, Response } from "express";
import { User } from "../models/User.js";

//creator function
async function createUser(req:Request, res: Response): Promise <Response> {
    try {
       const user = await User.create(req)
       return res.status(201).json(user)
    } catch(error) {
        console.log(`Internal error creating user: ${error}`)
        return res.status(500).json(`Internal user creation error`)
    }
}

//getter todo

