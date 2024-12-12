// Array of image links
const imageLinks = [
    "https://images.unsplash.com/photo-1709884735646-897b57461d61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",

    "https://plus.unsplash.com/premium_photo-1682091872078-46c5ed6a006d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",

    "https://images.unsplash.com/photo-1709884732273-c20d3347aa40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",

    "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.webp?a=1&b=1&s=612x612&w=0&k=20&c=_bmMiOFI0Mto3gUdKETEcIujX-kbW-q69DUxMU5jPEw="
  ];
  
  // Display images in the container
  // Ngambil ID dulu
  const imageContainer = document.getElementById('image-container');

  // Buat foreach
  imageLinks.forEach((link, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = link;
    imgElement.alt = `Image ${index + 1}`;
    imgElement.style.width = "200px";
    imgElement.style.margin = "10px";
    imgElement.addEventListener('click', () => openModal(index));
    imageContainer.appendChild(imgElement);
  });
  
  // Modal elements
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const closeModal = document.getElementById('close-modal');
  
  let currentIndex = 0;
  
  // Open modal and start slideshow from clicked image
  function openModal(startIndex) {
    currentIndex = startIndex;
    modal.style.display = 'flex';
    showImage(currentIndex);
    document.addEventListener('keydown', handleKeyPress);
  }
  
  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
  });
  
  // Show the current image in modal
  function showImage(index) {
    modalImage.src = imageLinks[index];
  }
  
  // Handle slideshow navigation using keyboard
  function handleKeyPress(event) {
    if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % imageLinks.length;
      showImage(currentIndex);
    } else if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
      showImage(currentIndex);
    } else if (event.key === 'Escape') {
      modal.style.display = 'none';
      document.removeEventListener('keydown', handleKeyPress);
    }
  }