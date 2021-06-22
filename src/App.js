import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { Main } from "./Components/Main";
import { useState } from "react";
function App() {
  const [activeSidebar, setActiveSidebar] = useState("Access");
  const [activeBody, setActiveBody] = useState("Permissons");
  const handleSidebar = (currentSidebar) => {
    setActiveSidebar(currentSidebar);
  };
  const handleBody = (currentBody) => {
    setActiveBody(currentBody);
  };
  return (
    <div className="App">
      <Header />
      <div className="d-flex">
        <Sidebar activeSidebar={activeSidebar} changeSidebar={handleSidebar} />
        <Main activeBody={activeBody} changeBody={handleBody} />
      </div>
    </div>
  );
}

export default App;
