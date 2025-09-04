import nodemailer from 'nodemailer'
import { env } from './env.js'

const senderEmail = env.SENDER_EMAIL
const emailAppPass = env.EMAIL_APP_PASS
const userTestNumber = env.USER_TEST_NUMBER
const userTestName = env.USER_TEST_NAME

//define types
type UserInfo = {
    name: string,
    number: string
    carrierName: string
    location?: string
};
type EmailConfigDefaults = {
    from: string,
    subject: string,
    text: string
}
type EmailConfigAdditionalFields = {
    to: string,
    html?:string

}
type EmailConfig = EmailConfigDefaults & EmailConfigAdditionalFields
//define carrier suffixes, this method now depracated
const carrierAddresses: Record<string, string> = {
  verizon: 'vtext.com',
  att: 'txt.att.net',
  tmobile: 'tmomail.net',
  sprint: 'messaging.sprintpcs.com'
};

const defaultEmailConfigs: EmailConfigDefaults = {
    from: senderEmail,
    subject: "hey, weather info",
    text: "hello world",
}


//make userData obj 
const userDataArray: UserInfo[]= [
    {
    name: userTestName,
    number: userTestNumber,
    carrierName: "att",
    location: "somewhere"
}
]
//make email carrier
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: senderEmail,
     pass: emailAppPass
  },
      logger: true,
});

const constructMailOptions = ( user: UserInfo): EmailConfig => ({
  ...defaultEmailConfigs,
  to: `${user.number}@${carrierAddresses[user.carrierName]}`,
});

export async function sendEmailToAllUsers(): Promise<void> {
    try {
          for (const user of userDataArray) {
    const mailOptions = constructMailOptions(user);
    console.log(
mailOptions)
    await transport.sendMail(mailOptions);
  }
        
    } catch (error) {
        console.error(`didnt work ${error}`)
        
    }

}