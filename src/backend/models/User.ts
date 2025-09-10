import {model, Schema, Types} from "mongoose"

export type UserLocation = {
        cityName:string;
        state:string;
        latitude?:number;
        longitude?:number;
}
const LocationSchema = new Schema<UserLocation>({
        cityName:String,
        state:String,
        latitude:Number,
        longitude:Number,
    
})

export interface IUser extends Document {
    //todo types
    username?:string; 
    email?:string;
    userLocation: UserLocation;
    pastLocations: UserLocation[];
    createdAt: Date;
    updatedAt: Date;

}
//todo lat and long will be calculated later, so optonal for now
const UserSchema = new Schema<IUser>({
    username:Types.ObjectId,
    email:String,
    userLocation: LocationSchema,
    pastLocations: [LocationSchema]

}, {timestamps:true}
)

export const User = model<IUser>("User", UserSchema)