'use strict';

document.addEventListener('DOMContentLoaded', () => {
  [...document.querySelectorAll(`
    a[href^="http://"]:not([href*="linux.cz"]),
    a[href^="https://"]:not([href*="linux.cz"])
  `)]
    .forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    });
});
