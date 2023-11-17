// Import the 'sharp' library for image processing
const sharp = require('sharp');

/**
 * Resize an image.
 * @param {string} inPath - The path to the input image file.
 * @param {string} outPath - The path to save the resized image.
 * @param {number} width - The desired width of the resized image.
 * @param {number} height - The desired height of the resized image.
 */
// Function to resize an image
const resizeImage = (inPath, outPath, width, height) => {
      // Return a Promise to handle asynchronous operations
  return new Promise((resolve, reject) => {
    // Use 'sharp' to read the input image, resize, and save to the output path
    sharp(inPath)
      .resize(width, height) // Resize the image to the specified dimensions
      .toFile(outPath, (error, info) => {
        // Callback function executed after resizing is complete
        if (error) {
            // If an error occurs during resizing, reject the Promise with the error
          reject(error);
        } else {
             // If resizing is successful, resolve the Promise with information about the resized image
          resolve(info);
        }
      });
  });
};
// Export the 'resizeImage' function to make it accessible in other files
module.exports = resizeImage;
