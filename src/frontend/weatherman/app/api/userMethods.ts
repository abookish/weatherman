import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

 async function getLocalUserId(){
    let userId = await AsyncStorage.getItem('userId');
    return userId
}

export async function createUser() {
    const baseAPIURL = ""
    const userCreationEndpoint = ""

    try {
        const res = await axios.post(`${baseAPIURL}/${userCreationEndpoint}`)
        return res.data
    } catch(error) {
        console.error(`User Creation Error: ${error}`)
        throw error

    }

}
export async function userSetup() {
    let userId = getLocalUserId()

    if (!userId) {
        let newUser = await createUser()
        await AsyncStorage.setItem('userId', newUser._id);
    }
    
}