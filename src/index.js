const $logo = document.querySelector('[data-logo]');

const scroller = () => {
  const progress = window.scrollY / window.innerHeight;
  const progressMax = Math.min(progress, 1);
  $logo.style.transform = `translate(-50%, calc(-50% - ${progressMax * 40}rem)) scale(${1 + (progressMax * 1.2)}) rotate(${-35 * progress}deg)`;
}

window.addEventListener('scroll', (e) => {
  requestAnimationFrame(scroller);
});