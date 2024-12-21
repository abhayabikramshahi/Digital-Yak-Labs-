document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const container = document.querySelector('.main-content');
  
    // Check if preloader has already been shown
    const isPreloaderShown = localStorage.getItem('preloaderShown');
  
    if (!isPreloaderShown) {
      preloader.style.display = 'flex';
      container.style.display = 'none';
  
      // Show preloader for 3 seconds
      setTimeout(() => {
        preloader.style.display = 'none';
        container.style.display = 'block';
  
        // Save to localStorage to ensure it doesn't show again
        localStorage.setItem('preloaderShown', 'true');
      }, 3000); // 3 seconds
    } else {
      // Skip preloader and show content
      preloader.style.display = 'none';
      container.style.display = 'block';
    }
  });
  