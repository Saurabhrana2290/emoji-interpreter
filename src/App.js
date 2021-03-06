import './App.css';
import React, { useState } from "react";

var emojiDictionary = {
  "ð": "Grinning face",
  "ðĪĢ": "Rolling on the Floor Laughing",
  "ð": "Face with Tears of Joy",
  "ð": "Slightly Smiling Face",
  "ð": "Smiling Face with Heart-Eyes",
  "ð": "Squinting Face with Tongue",
  "ð": "Winking Face",
  "ð": "Smiling Face with Smiling Eyes",
  "ðĪĐ": "Star-Struck",
  "ð": "Winking Face with Tongue",
  "ðĪŠ": "Zany Face",
  "ðĪ": "Money-Mouth Face",
  "ðĪ" :"Hugging Face",
  "â": "Victory Hand",
  "â": "Raised Hand",
  "ðĪ" :"Call Me Hand",
  "ðĪ" :"Love-You Gesture",
  "ðĪ" :"Sign of the Horns",
  "ð" :"Thumbs Up",

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
      <h1>Emoji Interpreter</h1>
      <input id="emoji-input" placeholder="Enter emoji here!" onChange={onChangeHandler} />
      <div id="emoji-meaning" placeholder="Meaning will be shown here!">{meaning}</div>
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