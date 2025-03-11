document.addEventListener('DOMContentLoaded', function () {
  // If you don’t need the draw-line animation, comment out or remove:
  // const line = document.querySelector('.draw-line');
  // setTimeout(() => {
  //   line.style.width = '100%';
  // }, 1500);

  // Fade in "MY WORK"
  const myWorkText = document.getElementById('my-work');
  setTimeout(() => {
    myWorkText.classList.remove('opacity-0');
  }, 500);

  // After text is visible, reveal the illustration
  setTimeout(() => {
    const peekImg = document.getElementById('peek-illustration');
    peekImg.classList.remove('hidden');  // show image
    peekImg.classList.add('peek-up');    // animate up
  }, 2000);

  // Example portfolio items
  function renderPortfolioItems() {
    const portfolioData = [
      {
        title: 'YouTube Video',
        url: 'https://www.youtube.com/watch?v=example',
        thumbnail: 'images/yt-thumbnail.jpg'
      },
      {
        title: 'SoundCloud Track',
        url: 'https://soundcloud.com/example',
        thumbnail: 'images/sc-thumbnail.jpg'
      }
      // ... more items
    ];

    const portfolioSection = document.getElementById('portfolio-grid');
    portfolioData.forEach(item => {
      const anchor = document.createElement('a');
      anchor.href = item.url;
      anchor.target = '_blank';
      anchor.className = 'portfolio-item group relative overflow-hidden block animate-fade';

      const img = document.createElement('img');
      img.src = item.thumbnail;
      img.alt = item.title;
      img.className = 'w-full h-auto transition-transform duration-500 transform group-hover:scale-110';
      anchor.appendChild(img);

      const overlay = document.createElement('div');
      overlay.className =
        'absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100';
      overlay.innerHTML = `<span class="text-white text-lg">${item.title}</span>`;
      anchor.appendChild(overlay);

      portfolioSection.appendChild(anchor);
    });
  }

  renderPortfolioItems();
});
