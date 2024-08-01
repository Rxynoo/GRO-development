
// Get all elements with the class 'Services'
const servicesButton = document.querySelectorAll('.Services');

// get popup element
const popupElement = document.getElementById('popup');
const popupImage = popupElement.querySelector('img');

servicesButton.addEventListener('mouseover',function(event){//uses event as argument to obtain data
    // changes the css from display none to display block hence showing it 
    popupElement.style.display = 'block';
    popupImage.src = servicesButton.getAttribute('data-image');
    // Position the popup near the button
    const rect = servicesButton.getBoundingClientRect();
    popupElement.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    popupElement.style.top = `${rect.top + window.scrollY}px`;
  });
  servicesButton.addEventListener('mouseout', function () {
    // Hide the popup
    popupElement.style.display = 'none';
  });