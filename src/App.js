import React, { useState, useEffect } from "react";
import "./App.css";
import Board from './components/board'
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { getDefaultNormalizer } from "@testing-library/react";

import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBRinHy_bdUKSMXlmPZMpsqgQw0h3BliU0",
  authDomain: "birthday-remaind.firebaseapp.com",
  projectId: "birthday-remaind",
  storageBucket: "birthday-remaind.appspot.com",
  messagingSenderId: "989299744632",
  appId: "1:989299744632:web:bd3d48cb2636804b01f28d",
  measurementId: "G-WV1W3RRWZ8"
});

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
  const [user] = useAuthState(auth);
  

  return (
    <div className="App">
      <header>
        <SignOut />
      </header>

      <section>{user ? <MainPart /> : <SignIn />}</section>
     
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
    
    
    
  };
  return (
    <>
      <center>
        <button className="sign-in" onClick={signInWithGoogle} style={{height:'25vh',width:'25%',marginTop:'20%',borderRadius:'20px',border:'1px solid blue', backgroundColor:'transparent',color:'azure',fontSize:'30px'}}>
          {" "}
          <i className="fab fa-google"></i> Sign in with Google
        </button>
      </center>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out btn btn-sm" style={{borderRadius:'10px', border:'1px solid blue', backgroundColor:'transparent',color:'azure',marginTop:'25px',height:'8vh',width:'20%'}} onClick={() => auth.signOut()}>
        <i className="fas fa-sign-out-alt"></i> Sign Out
      </button>
    )
  );
}

function MainPart() {
  // const [notes] = useCollectionData(query, { idField: 'id' });
  const [formValue, setFormValue] = useState("");
  const [des, setDes] = useState("");
  const { uid, photoURL, displayName, email } = auth.currentUser;
  const [notes, setNotes] = useState([]);
  const [user] = useAuthState(auth);


  
 

  const handleSubmit = () => {
    firestore.collection("notes").add({
      title: formValue,
      content: des,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
      email,
      
      
    });

    setFormValue("");
    setDes("");
    

  };

  
  useEffect(() => {
    if(user.email == 'farhanibne860@gmail.com' ||  user.email == 'farhanibne760@gmail.com' || 
    user.email == 'saifulalam.nbr@gmail.com')
    firestore.collection("notes").onSnapshot((snapshot) => {
      setNotes(snapshot.docs.map((doc) => doc.data()));
    });
    else{
     console.log("not allowed")
    
    }
 
  }, []);


  
  

  if(user.email === 'farhanibne860@gmail.com' ||  user.email === 'farhanibne760@gmail.com' || 
  user.email === 'saifulalam.nbr@gmail.com'){


    
  return (
    <>
      {/* input fields start */}
      <Board/>
    </>
  );



  }
  else{
    return(
      <>
      <center>
        <h1 style={{color:'azure',marginTop:'30px'}}>Sorry.. You've no entry in this site. thank you...<br/> you can contact us at farhanibnesaif@gmail.com</h1>

      </center>

      </>
    );
  }

}

export default App;