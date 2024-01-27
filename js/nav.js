const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav class="navbar">
    <!-- LOGO -->
    <div class="logo">
        <img src="img/about12.png" class="brand-logo" alt="dei">
        <div class="logo-name">
            <p>Faculty of Engingeering,<br>DEI (Deemed University)</p>
        </div>
    </div>

    <!-- NAVIGATION MENU -->
    <ul class="nav-links">

      <!-- USING CHECKBOX HACK -->
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      <!-- NAVIGATION MENUS -->
      <div class="menu">
      <li class="link-item"><a href="index.html" class="link">Home</a></li>
      <li class="link-item"><a href="https://www.dei.ac.in/dei/" class="link" target="_blank">DEI Home</a></li>
      <li class="link-item"><a href="https://www.dei.ac.in/dei/engineering/" class="link" target="_blank">FoE Main</a></li>
      <li class="link-item"><a href="https://www.sysi.org/" class="link" target="_blank">Systems Society of India</a></li>
      <li class="link-item"><a href="https://www.dei.ac.in/dei/edei/" class="link" target="_blank">e-DEI-WWW</a></li>
      <li class="link-item"><a href="https://vidyaprasar.dei.ac.in/" class="link" target="_blank">Vidya Prasar</a></li>
      <li class="link-item"><a href="https://www.dei.ac.in/dei/index.php?option=com_content&view=article&id=868&Itemid=410" class="link" target="_blank">D.O.S.A.</a></li>
      <li class="link-item"><a href="http://admission.dei.ac.in:8085/cms_new/login" class="link" target="_blank">DEI CMS</a></li>
      <li class="link-item"><a href="img/vision 2031.pdf" target="_blank">Vision 2031</a></li>
      <li class="link-item"><a href="contact.html" class="link">Contact</a></li>
      <li class="link-item"><a href="login.html" class="link">My Dashboard</a></li>
      </div>
    </ul>
  </nav>
    `;
}

createNav();