export const playKeyboardClick = () => {
  const audio = new Audio('https://www.soundjay.com/mechanical/sounds/keyboard-click-1.mp3');
  audio.volume = 0.7; // Louder volume for more impact
  audio.play().catch(() => {
    // Silently handle any autoplay restrictions
  });
};