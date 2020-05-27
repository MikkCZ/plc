'use strict';

function highlight(element) {
  // https://css-tricks.com/restart-css-animation/#article-header-id-0
  if (element) {
    element.classList.remove('highlight');
    void element.offsetWidth;
    element.classList.add('highlight');
    return true;
  } else {
    return false;
  }
}

function highlightParentOrTarget(element) {
  const parentToHighlight = [ element ]
    .filter(element => element !== null)
    .map(element => {
      let maybeBlockParent = element;
      while (maybeBlockParent !== null) {
        if (maybeBlockParent.nodeName.toLowerCase() === 'summary' || maybeBlockParent.nodeName.toLowerCase() === 'p') {
          break;
        }
        maybeBlockParent = maybeBlockParent.parentNode;
      }
      return maybeBlockParent;
    })
    .find(maybeBlockParent => maybeBlockParent !== null);
  return highlight(parentToHighlight) || highlight(element);
}

function targetHighlightEventListener() {
  const fragment = window.location.hash;
  if (fragment.length > 0) {
    return highlightParentOrTarget(document.querySelector(decodeURIComponent(window.location.hash)));
  } else {
    return false;
  }
}

window.addEventListener('hashchange', () => {
  targetHighlightEventListener();
});

document.addEventListener('DOMContentLoaded', () => {
  targetHighlightEventListener();
});
