/*
 * Check for browser support
 */
var supportMsg = document.getElementById('speechBox');

if ('speechSynthesis' in window) {} 
else 

{

	supportMsg.innerHTML = ':-( Oops<br>Speech synthesis is <strong>not supported</strong> by this device';

}


// Get the 'speak' button
var button = document.getElementById('speak');

// Get the text input element.
var speechMsgInput = document.getElementById('hidden');


// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
  // Create a new instance of SpeechSynthesisUtterance.
	var msg = new SpeechSynthesisUtterance();
  
  // Set the text.
	msg.text = text;
  
  // Set the attributes.
	msg.volume = 1;
	msg.rate = 1;
	msg.pitch = 1;
  
  // If a voice has been selected, find the voice and set the
  // utterance instance's voice attribute.
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == "native"; })[0];
  
  // Queue this utterance.
	window.speechSynthesis.speak(msg);
}


// Set up an event listener for when the 'speak' button is clicked.
button.addEventListener('click', function(e) {
	if (speechMsgInput.value.length > 0) {
		speak(speechMsgInput.value);
	}
});