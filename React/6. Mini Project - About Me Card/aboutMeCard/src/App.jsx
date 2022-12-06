import React from "react";
import Footer from "./components/Footer.jsx";
import Image from "./components/Image.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="mainWrapper">
          <Image />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
