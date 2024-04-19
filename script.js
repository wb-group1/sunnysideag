document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerLinks = document.getElementById('header-links');
  
    hamburgerMenu.addEventListener('click', function () {
      headerLinks.classList.toggle('show');
    });
  });   