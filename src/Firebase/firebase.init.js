import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;


// steps for authentication 
/**
 * --------------------
 * step 1:Initial setup
 * 1. firebase: create project
 * 2. create web app
 * 3. get configaration
 * 4 initialize firebase
 * 5. Enable auth method
 *
 * -----------------------
 * step -2: setup component
 * 1. create Login component
 * 2. create registration component
 * 3. create route for Login and Register
 *
 * ---------------------------
 * step 3: set auth system
 * 1. setup signin method
 * 2. setup signout metchod
 * 3. set userstate
 * 4. set user obserber
 * 5. return necessary methods and states from useFirebase
 *
 * --------
 * step 4: create auth context hook
 * 1. create a auth context
 * 2. create context provider
 * 3. setContexts value and use Auth provider
 * 4. useAuth provider
 * 4. create useAuth hook
 *
 * ---------------
 * step 5: create private route
 * 1. create private route
 * 2. ser private route
 *
 * --------------------
 * step 6: redirect after login
 * 1. after login redirect user the desire destination
 */