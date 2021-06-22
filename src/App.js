import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Main } from "./Components/Main";
import { useState } from "react";
function App() {
  const [activeSidebar, setActiveSidebar] = useState("Access");
  const [activeBody, setActiveBody] = useState("Permissions");
  const [activeAccess, setActiveAccess] = useState("Control");
  const [screen, setScreen] = useState();
  const handleSidebar = (currentSidebar) => {
    setActiveSidebar(currentSidebar);
  };
  const handleBody = (currentBody) => {
    setActiveBody(currentBody);
  };
  const handleChangeScreen = (currentScreen) => {
    setScreen(currentScreen);
  };
  const handleAccess = (currentAccess) => {
    setActiveAccess(currentAccess);
  };
  const handleBack = () => {
    setScreen("");
  };
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <Sidebar activeSidebar={activeSidebar} changeSidebar={handleSidebar} />
        <Main
          activeBody={activeBody}
          changeBody={handleBody}
          changeScreen={handleChangeScreen}
          screen={screen}
          activeAccess={activeAccess}
          changeAccess={handleAccess}
          goBack={handleBack}
        />
      </div>
    </div>
  );
}

export default App;
