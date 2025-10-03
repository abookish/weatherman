/*import { Admin } from "mongodb"
import {firebaseAdmin} from "../config/firebase.js" //todo

export async function sendPushNotification(deviceToken: string, title:string, body:string, notificationId: Number): Promise<{ success: boolean; error?: any }> {
    try {
        await firebaseAdmin.messaging.send( //todo
              deviceToken, {
                notification: title, body
              }
        )
        //todo update notificationStatus in db
        return {success: true}
    } catch(error){
        //todo update notificationStatus
        return {success: false, error: error}
    }
}*/