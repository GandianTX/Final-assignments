document.addEventListener('DOMContentLoaded', () => {
  const dhAll = document.getElementById('dh-all');

  function handleWheelEvent(event) {
    if (event.deltaY < 0) {
      dhAll.style.top = '-74px';
    } else {
      dhAll.style.top = '0px';
    }
  }

  const observer = new IntersectionObserver(entries => {
    const targetVisible = entries[0].isIntersecting;

    if (!targetVisible) {
      dhAll.style.top = '0px';
      window.addEventListener('wheel', handleWheelEvent);
    } else {
      dhAll.style.top = '-74px';
      window.removeEventListener('wheel', handleWheelEvent);
    }
  }, {
    root: null,
    threshold: 0
  });

  const target = document.getElementById('target');
  observer.observe(target);
});