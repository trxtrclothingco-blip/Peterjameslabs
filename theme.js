const toggle = document.getElementById('themeSwitch');

if (toggle) {
  toggle.addEventListener('change', () => {
    document.body.toggleAttribute(
      'data-theme',
      toggle.checked ? 'light' : null
    );
  });
}
