import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

const IS_AUTHENTICATED = "IS_AUTHENTICATED";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem(IS_AUTHENTICATED);
    setIsLoggedIn(isAuthenticated === "1");
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem(IS_AUTHENTICATED, "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(IS_AUTHENTICATED);
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
