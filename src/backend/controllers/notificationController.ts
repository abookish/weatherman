//import Model
import { Notification } from "../models/Notification.js";
import type { Request, Response } from "express";

//create function
//todo move this logic to service layer
export async function createNotification(req:Request, res:Response):Promise<Response>{
    try {
    const notification = await Notification.create(req)
    return res.status(201).json(notification)
    } catch(error) {
        console.error(`Error creating notification: ${error}`)
        return res.status(500).json(`Internal notification error`)
    }

}

//todo getter function
//mostly for retries i think



