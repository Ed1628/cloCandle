// // Get the container where the cards will be displayed
// const container = document.getElementById('product-cards-container');

// // Function to create a card for each image
// function createCard(imageSrc) {
//     const card = document.createElement('div');
//     card.className = 'card';

//     const img = document.createElement('img');
//     img.src = imageSrc;
//     img.alt = 'Product Image';

//     card.appendChild(img);
//     return card;
// }

// // Function to load images from the catalogo folder
// function loadImages() {
//     const imageFolder = '/assets/images/catalogo/';
//     const imageFiles = ['candela1.jpg', 'candela2.jpg', 'candela3.jpg']; // Add all your image file names here

//     imageFiles.forEach(imageFile => {
//         const imageSrc = `${imageFolder}${imageFile}`;
//         const card = createCard(imageSrc);
//         container.appendChild(card);
//     });
// }

// // Call the function to load images
// loadImages();


