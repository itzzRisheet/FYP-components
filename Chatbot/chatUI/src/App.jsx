import React from "react";
import ChatBOT from "./components/ChatBOT";
import TextToSpeech from "./helper/tts";

function App() {
  return (
    <div className="container">
      {/* <TextToSpeech text="Hi there! This is from AI assitant. I'm here to help you" /> */}
      <ChatBOT />
      {/* <Dictaphone /> */}
      {/* <Temp /> */}
    </div>
  );
}

export default App;
