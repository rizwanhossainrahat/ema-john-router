import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth()
    const googleProvide = new GoogleAuthProvider()


    const singnInUsingGoogle = () => {
        signInWithPopup(auth, googleProvide)
        // for location we return
        // return singnInUsingGoogle;
            .then(result => {
                    console.log(result.user)
            })
    }

    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    // observe user auth state change or not 
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
                // holding for changing state use this onAuthStateChanged hook
            }
        })
    },[])

    return{
        user,
        singnInUsingGoogle,
        logOut
    }
}

export default useFirebase;