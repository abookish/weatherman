//import model
import type { Request, Response } from "express";
import { Device } from "../models/Device.js";

//creator function
async function createDevice(req: Request, res:Response): Promise<Response> {
    try {
    const device = await Device.create(req)
    return res.status(201).json(device)
} catch(error){
    console.error(`Error creating Device: ${error}`)
    return res.status(500).json('Internal notification error') //todo: should return the error or not really?

    }
}
//getter function