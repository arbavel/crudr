import { firebaseApp } from './firebase'
//import * as firebase from 'firebase'
import  "firebase/firestore";

const db = firebaseApp;


export const getCollection = async(collection) => {
    const result = { statusResponse: false, data: null, error: null, ms:"action-result" }
    try {
        const data = await db.collection(collection).get()
        const arrayData = data.docs.map(doc => ({ id:doc.id, ...doc.data()}))
        //const arrayData = data.docs.map(doc => console.log(doc.data()))
        console.log(arrayData)
    } catch (error) {
        result.error = ('211' + error)
    }

    return result
}


