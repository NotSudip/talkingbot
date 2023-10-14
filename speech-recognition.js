
let recognition;
let synth;
let recognitionActive = false

function getUtterance (textToSpeak) {
  return new SpeechSynthesisUtterance(textToSpeak)
}

if (('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) && 'speechSynthesis' in window) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    recognition.lang = 'en-US'
    synth = window.speechSynthesis 

  recognition.onstart = () => ''
    
} else {
    alert('Speech recognition is not supported in this browser.')
    window.stop()
}
       