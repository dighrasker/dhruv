// Disable manual scrolling via mouse wheel or touch
function disableManualScroll(e) {
  e.preventDefault();
}
// Prevent scroll triggered by wheel and touch gestures
window.addEventListener('wheel', disableManualScroll, { passive: false });
window.addEventListener('touchmove', disableManualScroll, { passive: false });
// Prevent scroll triggered by keyboard keys
window.addEventListener('keydown', function (e) {
  const keys = ['Space', 'PageUp', 'PageDown', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
  if (keys.includes(e.code)) {
    e.preventDefault();
  }
}, { passive: false });
