import "./App.css"
import {useState, useEffect} from "react"


function App() {
  let [play, setPlay] = useState(false)
  useEffect(()=>{
    if (play) {
      document.getElementById('yourAudioTag').play();
    } else {
      document.getElementById('yourAudioTag').pause();
    }
  }, [play])
  return (
    <div style={{height: "100vh", alignItems:"center", backgroundColor: "black"}}> 
    <h1 style={{margin: "0", padding:"20px",  color: "white", textAlign: "center"}}>{play? "TURN UP YOUR VOLUME": "HELLO"}</h1>
    <div style={{display: "flex"}}> 
    <audio id="yourAudioTag" type="application/mp3" src={"./" + window.location.hash.substring(1) + ".zzz"} loop> bla</audio>
      <svg viewBox="0 0 1280 450">
        <image href="./op1.jpg" x="0" y="0" width="100%"/>
        <image href="./op1-display-background.svg" x="23.5%" y="4.8%" width="21.5%"/>
        <image href="./roll-1.svg" x="27.1%" y="9.85%" width="4.9%" className={play?"rotate-center": ""}/>
        <image href="./roll-2.svg" x="36.35%" y="9.85%" width="4.9%" className={play?"rotate-center": ""}/>
        <rect  style={{fill:"rgba(0,0,0,0.0)"}} x="7%" y="66%" width="5.5%" height="15%" rx="0" onClick={()=>{setPlay(!play)}} />    
      </svg>
    </div>
    </div>
  );
}

export default App;
