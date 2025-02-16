const TextToSpeech = (text) => {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
};

export default TextToSpeech;

