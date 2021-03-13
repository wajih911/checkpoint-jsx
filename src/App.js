import barca from "./barca.jpg";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <img className="barcelone" src="/fcb.png" alt="fcb" />
        {/*img from public */}
        <h1 className="title">Mes que un club</h1>
        <img className="barcelone" src={barca} alt="barca" />
      </div>
      <video width={320} height={240} controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
