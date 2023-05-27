document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    const targetVisible = entries[0].isIntersecting;
    const dhAll = document.getElementById('dh-all');

    if (!targetVisible) {
      dhAll.style.top = '0px';
      window.addEventListener('wheel', event => {
        const dhAll = document.getElementById('dh-all');
        if (event.deltaY < 0) {
          dhAll.style.top = '-74px';
        } else {
          dhAll.style.top = '0px';
        }
      });
    } else {
      dhAll.style.top = '-74px';
    }
  }, {
    root: null,
    threshold: 0
  });

  const target = document.getElementById('target');
  observer.observe(target);

});