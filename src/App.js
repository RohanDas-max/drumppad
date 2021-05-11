import { Howl, Howler } from "howler";
// import { useEffect } from "react";
import "./App.css";
// import VolumeBar from "./VolumeBar";
// import { drumpad } from "./drumsound";
//import "bootstrap/dist/css/bootstrap.min.css"
// import { useState } from "react";

function App() {
  // const [state, setState] = useState("");
  // const [volUp, setvolUp] = useState(25)

  const sound = [
    {
      keyCode: 81,
      keyTrigger: "Q",
      id: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      keyTrigger: "W",
      id: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      keyTrigger: "E",
      id: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      keyTrigger: "A",
      id: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      keyTrigger: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      keyTrigger: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      keyTrigger: "Z",
      id: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      keyTrigger: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      keyTrigger: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const handleSound = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    });

    sound.play();
   
    Howler.volume(0.5);
  };

  // const handler = (event, Sound) => {
  //   setState(event.key);
  //   if(event.key === sound.keyTrigger){
  //     Sound.play();
  //     // Howler.volume(0.5);
  //   };
  //   }
  // document.addEventListener('keydown', function (event)
// const  onKeyDown = (event) => {

// 	if(event.keyTrigger){
// 		sound[event.keyTrigger].sound.play();
// 	}

// }

  // const handleKeyPress = (e) =>{

  //   if (e.keyCode === sound.keyTrigger) {
  //     this.playSound();
  //   }
  // }
  // useEffect(() =>
  // handleSound()
  // , )

  return (
    <div id="drum-machine" className="container">
      <h1>Drum-Pad</h1>
      <div id="display" className="main">
        <div className="main-2">
          <div className="main-4">
            {sound.map((sound) => (
              <button
                className="button"
                id="drum-pad"
                key={sound.keyTrigger}
                onClick={() => handleSound(sound.url)}
                // onKeyPress={(e) => handler(e)}
               onChange={() => onkeydown}
              >
                {sound.keyTrigger}
              </button>
            ))}
          </div>
          <div className="menu">
            <p>Default range slider:</p>
            <input type="range" min="1" max="100" value="50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
