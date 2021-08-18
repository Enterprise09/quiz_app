import React, { useState } from "react";
import AppRouter from "./components/Router";

function App() {
  const [isLogin, setIsLogin] = useState(false);
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
      <AppRouter isLogin={isLogin} />
    </div>
  );
}

export default App;
