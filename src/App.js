import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PropertyDetailsPage from "./components/PropertyDetailsPage";

import Heading from "./components/Heading";
import PropertyCard from "./components/PropertyCard";

function App() {
  // const [showPropertyDetails, setShowPropertyDetails] = useState(false);
  const [visibility, setVisibility] = useState(0);
  const increment = () => {
    setVisibility(visibility + 1);
  };

  const [activeButton, setActiveButton] = useState(4);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const activeClass = {
    backgroundColor: "#3739db",
    color:"#fff"
  };
  const imageSets = {
    1: [
      "https://tse2.mm.bing.net/th?id=OIP.Uo_nFXnWkdHKeH-7cRiN1gAAAA&pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th?id=OIP.yNtIscxh4HpvHpGQ9TfLgQHaFm&pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th?id=OIP.wLCR7Np0bN-Psg5aaOIXWAHaEL&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.THsCcpVV381IauDpWIinBAHaEF&pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th?id=OIP.81UKHEAyOexULCB8oBDPUwHaE8&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.I2VL9U1nQfDi4d-RYr3DsAHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.ES5kPj2R6BxJ1F0Eu2LZwwHaFj&pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th?id=OIP.MnaoAzjKmixVrHajHbmrjAHaEc&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.PYfQdUDdhcWpPpLpYBIxmwHaE7&pid=Api&P=0&h=180",
    ],
    2: [
      "https://tse1.mm.bing.net/th?id=OIP.61yQCDFgAC-3CGDQKYYTiAHaGW&pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th?id=OIP.NjjbJja8dG1QKUI0XAQYLgHaEL&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.MI-kQFdoz0Wk_6EYhoCtDQHaE8&pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th?id=OIP.tRlYoqCTCoQJN4ooOeVMyAHaDt&pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th?id=OIP.pFVEgqSajkvB9fUg3jweLgHaFa&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.y69HTYllqpr0Rz1lXNG0KQHaHa&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.o1aZ8Ho7bkmhrRDJCqJyDQHaEK&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP._KzFpRXNKUlzLp8VR-UEcgHaEK&pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th?id=OIP.MB_6C8w9x6bCaFLQdeuoLQHaEW&pid=Api&P=0&h=180",
    ],
    3: [
      "https://tse4.mm.bing.net/th?id=OIP.nA8E0JoDCWCNrAw92XkunAHaFj&pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th?id=OIP.Uk1ccitAOhSaB9ptGvySWAHaE7&pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th?id=OIP.SgZtm5cJdy-cqv_ZxTARjgHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.YK4BdF-QRE5Fq-I9F_tdMgHaFj&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.PtWgOB2-w3FwxDMT4P6lRwHaFj&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.k5j9vZjrKbNOEk_2sG_luQHaFj&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.2XG4NsMeutbZru9YdAwmywHaFj&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.enKr7SUVoEiVD1v7Nv0stgHaE8&pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th?id=OIP.qnGeCh-JJ5rSRPPx_TtFEQHaEE&pid=Api&P=0&h=180",
    ],
    4: [
      "https://tse4.mm.bing.net/th?id=OIP.qvGt_X7B0SlAcKSc1QFQMAHaFK&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Lhie4xakAd4e192Wqha_ZgHaE7&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.Or78tN3mYMir92erAJA6swHaE7&pid=Api&P=0&h=180",
      "https://tse3.mm.bing.net/th?id=OIP.Efld8qJPpqm-Slu4tDw97gHaEu&pid=Api&P=0&h=180",
      "https://tse1.mm.bing.net/th?id=OIP.pMX9yAKq_2VBSX8fYUa8IwHaE5&pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th?id=OIP.FeYh2TnjZW7tLLlX2kOnNwHaFA&pid=Api&P=0&h=180",
      "https://tse2.mm.bing.net/th?id=OIP.WAS7DQ7vDY7C0ayOkHnprgHaFj&pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th?id=OIP.ja5xmHtyBKQQteCR6bNVXQHaDp&pid=Api&P=0&h=180",
      "https://tse4.mm.bing.net/th?id=OIP._I6jUHlTSf3oQYqw904ODQHaET&pid=Api&P=0&h=180",
    ],
  };

  const currentImageSet = imageSets[activeButton];

  const locationValues = [
    "Location 1",
    "Location 2",
    "Location 3",
    "Location 4",
    "Location 5",
    "Location 6",
    "Location 7",
    "Location 8",
    "Location 9",
  ];
  const propertyName = [
    "Name 1",
    "Name 2",
    "Name 3",
    "Name 4",
    "Name 5",
    "Name 6",
    "Name 7",
    "Name 8",
    "Name 9",
  ];

  return (
    <div className=" bg-[#f5f4fc]  mx-16 my-2 rounded-xl">
      <Router>
        <Heading />
        <div className="w-[100%] h-[2rem] pl-[4rem] mb-4">
          <button
            className="border rounded-xl w-[10%] px-2 py-1 mx-2 bg-[#ecebfa]"
            style={activeButton === 1 ? activeClass : {}}
            onClick={() => {
              handleButtonClick(1);
            }}
          >
            New Work
          </button>
          <button
            className="border rounded-xl w-[10%] px-2 py-1 mx-2 bg-[#ecebfa]"
            style={activeButton === 2 ? activeClass : {}}
            onClick={() => {
              handleButtonClick(2);
            }}
          >
            Mumbai
          </button>
          <button
            className="border rounded-xl w-[10%] px-2 py-1 mx-2 bg-[#ecebfa]"
            style={activeButton === 3 ? activeClass : {}}
            onClick={() => {
              handleButtonClick(3);
            }}
          >
            Paris
          </button>
          <button
            className="border rounded-xl w-[10%] px-2 py-1 mx-2 bg-[#ecebfa]"
            style={activeButton === 4 ? activeClass : {}}
            onClick={() => {
              handleButtonClick(4);
            }}
          >
            London
          </button>
          <button className="border rounded-xl w-[15%]  ml-[26rem]  rounded-3xl  px-2 py-2 font-bold border-[#3739db] text-[#3739db] ">
            <div className="flex"><span className="w-[70%] ml-2">View All</span>
            <img src="https://cdn-icons-png.flaticon.com/128/271/271226.png" className="w-[2vw] h-[2vw]"></img></div>
          </button>
        </div>

        <div className="w-full h-[100vh] flex flex-wrap">
          {currentImageSet.map((image, index) => (
            <div
              key={index}
              className="w-1/3"
              style={index > 5 && !visibility ? { display: "none" } : {}}
            >
              <PropertyCard
                image={image}
                rooms={((index + 1) % 3) + 1}
                bed={2 * (((index + 1) % 3) + 1)}
                bath={((index + 1) % 3) + 1}
                area={(index + 1) * 1000}
                rent={400 * (((index + 1) % 3) + 1)}
                location={locationValues[index]}
                propertyId={index + 1}
                name={propertyName[index]}
              />
            </div>
          ))}

          <button
            className="border rounded-3xl w-[10%] px-3 py-2 m-auto bg-[#3739db] text-white "
            onClick={increment}
            style={visibility ? { display: "none" } : {}}
          >
            Show More
          </button>
        </div>

        <Routes>
          <Route
            path="/property/:propertyId"
            element={<PropertyDetailsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
