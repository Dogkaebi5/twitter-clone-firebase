import { useEffect, useState } from "react";
import AppRouter from "./AppRouter";
import {authService} from "../fbase";

function App() {
  const [init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged ((user) => {
      if(user){
        setIsLoggedIn(true)
      } else {setIsLoggedIn(false)};
      setInit(true)
    });
  }, []);

  return (
    <div>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Cwitter </footer>
    </div>
  );
}

export default App;
