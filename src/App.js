import "./styles.css";
import { useState } from "react";

const Songs = {
  Pop: [
    { songName: "Get Into it", Singer: "Doja Cat", rate: "4.5/5" },
    { songName: "Cradles", Singer: "Sub Urban", rate: "3.5/5" },
    { songName: "Galaxies", Singer: "Danny Olsen", rate: "4/5" }
  ],

  Rock: [
    { songName: "Sky is the limit", Singer: "Supreme Devices", rate: "4.8/5" },
    { songName: "Run free", Singer: "Deep chills", rate: "3.5/5" },
    { songName: "It's My Life", Singer: "Bon Jovi", rate: "4/5" }
  ],

  Vocal: [
    { songName: "Don't know why", Singer: "We are fury", rate: "4.5/5" },
    { songName: "Let me down slowly", Singer: "Alec Benjamin", rate: "5/5" },
    { songName: "Moral of the Story", Singer: "Ashe", rate: "4/5" }
  ]
};

var Pop2 = [
  { songName: "Get into it", Singer: "Singer1" },
  { songName: "Cradles", Singer: "Singer2" }
];

export default function App() {
  const [songGenre, setSongGenre] = useState([]);

  function clickHandler(event) {
    setSongGenre(Songs[event.target.name]);
    //console.log(songGenre);
  }

  return (
    <div className="App">
      <h1>🎵Song Recommendation🎵</h1>
      <hr></hr>

      <p>Select songs by genre for my recommendations </p>
      <div id="buttons">
        <button onClick={clickHandler} name="Pop">
          Pop
        </button>
        <button onClick={clickHandler} name="Rock">
          Rock
        </button>
        <button onClick={clickHandler} name="Vocal">
          Vocal
        </button>
      </div>
      <div className="list">
        <hr></hr>
        {songGenre.map((item) => (
          <ul>
            <li key={item} className="li">
              {item.songName}
            </li>
            <i>
              <small>
                <li key={item}>-{item.Singer}</li>
                <br />
              </small>
            </i>
            <small>
              <li key={item}>{item.rate}</li>
            </small>
          </ul>
        ))}
      </div>
    </div>
  );
}
