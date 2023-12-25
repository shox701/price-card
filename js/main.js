function updateCard() {
    var imageUrl = document.querySelector(".image__Input").value;
    var productName = document.querySelector(".name__Input").value;
    var productPrice = document.querySelector(".price__Input").value;

    var imageElement = document.querySelector(".product__image");
    var nameElement = document.querySelector(".product__name");
    var priceElement = document.querySelector(".product__price");

    imageElement.src = imageUrl;
    nameElement.textContent = productName;
    priceElement.textContent = "Narxi: " + productPrice + "$";
}