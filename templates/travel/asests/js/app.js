

 const menuItems = [
    { name: 'Home', link: '/templates/travel/travel.html' },
    { name: 'About Us', link: '/templates/travel/pages/AboutUs.html' }
   
  ];

  const desktopMenu = document.getElementById('desktop-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  // Render Menu Items
  menuItems.forEach(item => {
    const menuItem = `<a href="${item.link}" class="text-gray-700 hover:text-blue-500 font-medium ${
      item.isNepali ? 'text-red-600' : ''
    }">${item.name}</a>`;
    desktopMenu.innerHTML += menuItem;
    mobileMenu.innerHTML += `<div class="block px-4 py-2">${menuItem}</div>`;
  });

  // Mobile Menu Toggle
  const menuBtn = document.getElementById('menu-btn');
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });