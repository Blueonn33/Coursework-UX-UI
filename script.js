const readBtn = document.getElementById("readPage");
const stopBtn = document.getElementById("stopReading");

let utterance = null;
let currentUtterance = null;

function stopReading() {
  window.speechSynthesis.cancel();
  currentUtterance = null;
}

document.querySelectorAll(".read-card").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const card = document.getElementById(targetId);

    if (!card) {
      return;
    }

    stopReading();

    const text = card.innerText;

    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = "bg-BG";

    currentUtterance.onend = () => {
      currentUtterance = null;
    };

    window.speechSynthesis.speak(currentUtterance);
  });
});

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
