export function setupBetaButton(element) {
  const audioElement = new Audio("audio_file.mp3");

  element.addEventListener('click', () => {
    audioElement.currentTime = 0.07;
    audioElement.play();
  })
}