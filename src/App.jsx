import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./constants/Footer";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="flex flex-col items-center justify-center px-6 sm:px-16">
        <div className="w-full max-w-[1280px]">
          <Navbar />
        </div>

        <div className="flex w-full items-center justify-center bg-primary px-6 sm:px-16">
          <div className="w-full max-w-[1280px]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
