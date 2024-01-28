const createNav = () => {
    let nav = document.querySelector('.nav-bottom');

    nav.innerHTML = `
    <nav class="nav-bottom">
    <form class="example" action="action_page.php">
    <input type="text" placeholder="Search.." name="search">
    <button type="submit"><i class="fa fa-search"></i></button>
  </form>
  </nav>
    `;
}

createNav();