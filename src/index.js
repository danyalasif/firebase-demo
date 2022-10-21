import {app} from "./firebaseConfig"

const analytics = getAnalytics(app);

const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("Logged in");
    } else{
        console.log("No user")
    }
})