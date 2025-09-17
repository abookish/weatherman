import { Admin } from "mongodb"
import admin from "../config/firebase.js"

export async function sendPushNotification(deviceToken: string, title:string, body:string, notificationId: Number): Promise<{ success: boolean; error?: any }> {
    try {
        await admin.messaging.send(
              deviceToken, {
                notification: title, body
              }
        )
        //todo update notificationStatus
        return {success: true}
    } catch(error){
        //todo update notificationStatus
        return {success: false, error: error}
    }
}