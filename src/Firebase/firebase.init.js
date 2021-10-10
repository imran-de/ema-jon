import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;


// steps for authentication 
/**
 * --------------------
 * Initial setup
 * 1. firebase: create project
 * 2. create web app
 * 3. get configaration
 * 4 initialize firebase
 * 5. Enable auth method
 *
 * -----------------------
 * step -2
 * 1. create Login component
 * 2. create registration component
 * 3. create route for Login and Register
 *
 * ---------------------------
 * step -3
 * 1. setup signin method
 * 2. setup signout metchod
 * 3. set userstate
 * 4. set user obserber
 * 5. return necessary methods and states from useFirebase
 *
 * --------
 * srep 4
 * 1. create a auth context
 * 2. create context provider
 * 3. setContexts value and use Auth provider
 * 4. create useAuth hook
 */