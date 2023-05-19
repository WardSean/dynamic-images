let imageFiles = [
    { name: "images/dog.jpg", description: "A cute dog" },
    { name: "images/cat.jpg", description: "A cute cat" },
    { name: "images/bird.jpg", description: "A beautiful bird" },
    { name: "images/flower.jpg", description: "A colorful flower" },
    { name: "images/tree.jpg", description: "A tall tree" }
  ];
  
  window.onload = function() {
    // Populate the dropdown list with image descriptions
    const imageSelect = document.getElementById("imageSelect");
    imageFiles.forEach(function(image) {
      let option = document.createElement("option");
      option.value = image.name;
      option.text = image.description;
      imageSelect.appendChild(option);
    });
  
    // Attach event handlers to buttons
    const addButton = document.getElementById("addButton");
    const clearButton = document.getElementById("clearButton");
  
    addButton.addEventListener("click", addImage);
    clearButton.addEventListener("click", clearImages);
  };
  
  function addImage() {
    const imageSelect = document.getElementById("imageSelect");
    const selectedImage = imageSelect.value;
  
    if (selectedImage) {
      const imagesDiv = document.getElementById("imagesDiv");
      const img = document.createElement("img");
      img.src = selectedImage;
      img.alt = imageFiles.find(image => image.name === selectedImage).description;
      imagesDiv.appendChild(img);
    }
  }
  
  function clearImages() {
    const imagesDiv = document.getElementById("imagesDiv");
    imagesDiv.innerHTML = "";
  }
  