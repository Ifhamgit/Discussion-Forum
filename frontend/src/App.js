// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Forum from './Components/Forum';
import { login, selectUser } from './Feature/userSlice';
import Login from './Components/auth/Login';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { onAuthStateChanged } from 'firebase/auth';



function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    onAuthStateChanged(auth, (authUser)=>{
      if(authUser){
        dispatch(login({
          userName:authUser.displayName,
          photo:authUser.photoURL,
          email:authUser.email,
          uid: authUser.uid,
        }))
        console.log("AuthUser",authUser)
      }
    })

  },[dispatch])
  return (
    <div className='App'>

      {
         user ? <Forum/> : <Login/>
      }
    
   </div>
  );
}

export default App;
