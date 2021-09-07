import './App.css';
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Grinning face",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😝": "Squinting Face with Tongue",
  "✌": "Victory Hand",
  "✋": "Raised Hand"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");
  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      setMeaning("Emoji is not present in our Database");
    } else {
      setMeaning(meaning);
    }
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input onChange={onChangeHandler} />
      <div>{meaning}</div>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}