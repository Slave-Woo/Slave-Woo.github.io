document.documentElement.classList.add('js');
document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');
if (menuButton && navigation) {
  function closeMenu() {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  const here = location.pathname.split('/').pop() || 'index.html';
  navigation.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') === here) link.setAttribute('aria-current', 'page');
  });
}
