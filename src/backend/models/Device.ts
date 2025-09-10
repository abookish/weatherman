import {Schema, model, Types} from "mongoose"

//types interface
export interface IDevice extends Document {
    userId: Types.ObjectId;
    deviceToken: string;
    os?:"ios" | "android";
    createdAt: Date;
    updatedAt: Date;
}
//schema
const DeviceSchema = new Schema <IDevice> ({
        userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
        deviceToken: String,
        os: { type: String, enum: ["ios", "android"]}

},
{timestamps:true})

export const Device = model<IDevice>("Device", DeviceSchema)