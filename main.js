
/* ----- POPUP ----- */ 
  const openPopupBtn = document.querySelector('.hover-element');
  const closePopupBtn = document.querySelector('.closePopup');
  const popup = document.querySelector('.popup');
  let isPopupHovered = false;
  
  openPopupBtn.addEventListener('click', () => {
    popup.classList.add('open');
  });
  
  popup.addEventListener('mouseenter', () => {
    isPopupHovered = true;
  });
  
  popup.addEventListener('mouseleave', () => {
    isPopupHovered = false;
  });
  
  document.addEventListener('click', (event) => {
    const isClickedInsidePopup = popup.contains(event.target);
    const isClickedOnOpenButton = openPopupBtn.contains(event.target);
  
    if (!isClickedInsidePopup && !isClickedOnOpenButton && !isPopupHovered) {
      popup.classList.remove('open');
    }
  });

// ----- Dark Mode ----- //

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    // Save the user's preference for dark mode in local storage or a cookie
    localStorage.setItem('darkModeEnabled', 'true');
  } else {
    // Remove the dark mode preference
    localStorage.removeItem('darkModeEnabled');
  }
});

// Check if the user has a preference for dark mode and apply it on page load

const darkModeEnabled = localStorage.getItem('darkModeEnabled');
if (darkModeEnabled) {
  body.classList.add('dark-mode');
}


/* -- API FOR GRAPHS  -- */ 

// function fetchData(url, options) {
//   return fetch(url, options)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }