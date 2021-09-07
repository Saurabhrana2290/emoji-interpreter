import './App.css';
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Grinning face",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😝": "Squinting Face with Tongue",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "🤩": "Star-Struck",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "🤑": "Money-Mouth Face",
  "🤗" :"Hugging Face",
  "✌": "Victory Hand",
  "✋": "Raised Hand",
  "🤙" :"Call Me Hand",
  "🤟" :"Love-You Gesture",
  "🤘" :"Sign of the Horns",
  "👍" :"Thumbs Up",

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