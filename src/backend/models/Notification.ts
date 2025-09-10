import {Schema, model, Types} from "mongoose"
//interface for types
export interface INotification extends Document {
    userId: Types.ObjectId; 
    title: string; 
    content: string;
    type:string;
    isRead: Boolean;
    createdAt: Date;
    updatedAt: Date;
}

//mongo schema

const notificationSchema = new Schema<INotification>({
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
    title: String,
    content: String,
    type: String,
    isRead: {type: Boolean, default: false},

},
{timestamps:true}
);

export const Notification = model<INotification>("Notification",notificationSchema)


