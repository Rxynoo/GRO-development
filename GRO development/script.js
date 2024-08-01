document.addEventListener('DOMContentLoaded', () => {
  // Get the Services button
  const servicesButton = document.querySelector('.Services');

  // Get the popup element and the image inside it
  const popupElement = document.getElementById('popup');
  const popupImage = popupElement.querySelector('img');

  // Add event listeners to the Services button
  servicesButton.addEventListener('mouseover', function () {
    // Show the popup
    popupElement.style.display = 'block';
    // Set the popup image source from the data-image attribute
    popupImage.src = servicesButton.dataset.image;
    // Position the popup near the button
    const rect = servicesButton.getBoundingClientRect();
    popupElement.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;
    popupElement.style.top = `${rect.top + window.scrollY}px`;
  });

  servicesButton.addEventListener('mouseout', function () {
    // Hide the popup
    popupElement.style.display = 'none';
  });
});
