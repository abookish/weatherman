//todo import

//todo define interface (type)
//export interface INotification extends Document {

//todo define schema, similar to:
/*Notification
{
    id: int;
    sender: ForeignKey to user;
    receiver: ForeignKey to user;
    type: string; // or preferable ForeignKey to another table, in which you store possible types (see normalization of database)
    content: string;
    is_read: boolean;
    created_at: Date;
} */
//const notificationSchema = new Schema<INotification>({