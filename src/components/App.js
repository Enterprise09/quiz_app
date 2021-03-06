import React, { useState } from "react";
import { useEffect } from "react";
import Initialize from "./Initialize";
import AppRouter from "./Router";
import { authService } from "../Firebaseconfig";
import "../css/App.css";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  };
  return (
    <div className="App">
      {init ? (
        <AppRouter
          isLogin={userObj}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        <Initialize />
      )}
    </div>
  );
}

export default App;
