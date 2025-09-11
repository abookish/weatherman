//todo start up db basically
import mongoose from 'mongoose'
import { env } from '../config/env.js'

const connectionURI= `mongodb+srv://${env.MONGODB_USERNAME}:${encodeURIComponent(env.MONGODB_PASSWORD)}@cluster0.ah9qo35.mongodb.net/${env.MONGODB_NAME}?retryWrites=true&w=majority&appName=${env.MONGODB_CLUSTER}`
const CONNECTION_EXIT_CODE = 1
export async function connectToMongoDatabase(){ //TODO test
try {
    await mongoose.connect(connectionURI)
    console.log(`connected to ${env.MONGODB_NAME}`)
} catch(error){
    console.error(`Connection Error: ${error}`)
    process.exit(CONNECTION_EXIT_CODE)
}
}