'use strict';

function openThisOrParentDetails(element) {
  const detailsToOpen = [ element ]
    .filter(element => element !== null)
    .map(element => {
      let maybeDetails = element;
      while (maybeDetails !== null && maybeDetails.nodeName.toLowerCase() !== 'details') {
        maybeDetails = maybeDetails.parentNode;
      }
      return maybeDetails;
    })
    .find(maybeDetails => maybeDetails !== null);
  if (detailsToOpen) {
    detailsToOpen.open = true;
    return true;
  } else {
    return false;
  }
}

function openFragmentDetails() {
  const fragment = window.location.hash;
  if (fragment.length > 0) {
    return openThisOrParentDetails(document.querySelector(window.location.hash));
  } else {
    return false;
  }
}

function openFirstDetails() {
  return openThisOrParentDetails(document.querySelector('details:first-of-type'));
}

window.addEventListener('hashchange', () => {
  openFragmentDetails();
});

document.addEventListener('DOMContentLoaded', () => {
  openFragmentDetails() || openFirstDetails();
});
