const createNav = () => {
  let nav = document.querySelector('.navbar-2');

  nav.innerHTML = `
    <nav class="navbar_2">
    <!-- LOGO -->
    <div class="logo">
        <img src="img/about12.png" class="brand-logo" alt="dei">
        <div class="logo-name">
            <p>Faculty of Engingeering,<br>DEI (Deemed University)</p>
        </div>
    </div>

    <!-- NAVIGATION MENU -->
    <ul class="nav-links-2">
      <!-- NAVIGATION MENUS -->
      <div class="menu-2">
        <li class="link-item-2">
          <a href="index.html" class="link">
          <img src="img/home.png" alt="">
          </a>
        </li>
        <li class="link-item-2">
        <a href="contact.html" class="link">
        <img class="p-logo" src="https://cdn-icons-png.flaticon.com/512/7269/7269995.png" alt="">
        </a>
        </li> 
        <li>
        <img class="p-logo" src="https://cdn-icons-png.flaticon.com/512/4121/4121064.png" alt="">
        </li>
      </div>
    </ul>
  </nav>
    `;
}

createNav();