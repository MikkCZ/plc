'use strict';

document.addEventListener('DOMContentLoaded', () => {
  [...document.querySelectorAll(`
    a[href^="http://"]:not([href*="proc.linux.cz"]),
    a[href^="https://"]:not([href*="proc.linux.cz"])
  `)]
    .forEach(link => {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    });
});
