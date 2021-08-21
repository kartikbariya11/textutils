import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // const toggleGreenMode = ()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor='#378900';
  //     showAlert("Green mode has been enabled","success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode has been enabled","success");
  //   }
  // }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    {/* <Router> */}
      <NavBar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
        // toggleGreenMode={toggleGreenMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact  path="/"> */}
            <TextForm showAlert={showAlert} heading="Enter text" mode={mode} />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router>  */}
    </>
  );
}

export default App;
