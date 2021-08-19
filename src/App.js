import React, { useState } from "react";
import { useEffect } from "react";
import Initialize from "./components/Initialize";
import AppRouter from "./components/Router";
import { authService } from "./Firebaseconfig";
import "./css/App.css";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProgile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        backgroundColor: "lightcyan",
        height: "100vh",
      }}
    >
      {init ? <AppRouter isLogin={userObj} /> : <Initialize />}
    </div>
  );
}

export default App;
