const readBtn = document.getElementById("readPage");
const stopBtn = document.getElementById("stopReading");

let utterance;

readBtn.addEventListener("click", (e) => {
  e.preventDefault();

  window.speechSynthesis.cancel();

  const text = document.body.innerText;

  utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "bg-BG";

  window.speechSynthesis.speak(utterance);
});

stopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.speechSynthesis.cancel();
});
