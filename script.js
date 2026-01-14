document.addEventListener("DOMContentLoaded", () => {

//menu
  const menuOpenButton = document.getElementById("menu-open-button");
  const menuCloseButton = document.getElementById("menu-close-button");
  const navLinks = document.querySelectorAll(".nav-link");

  menuOpenButton.addEventListener("click", () => {
    document.body.classList.add("show-mobile-menu");
  });

  menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });

  
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("show-mobile-menu");
    });
  });

//product filter
  const categoryButtons = document.querySelectorAll(".categories button");
  const products = document.querySelectorAll(".product");
  const searchInput = document.getElementById("searchInput");

  let currentCategory = "all";

  function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();

    products.forEach(product => {
      const productName = product.querySelector("h3").textContent.toLowerCase();
      const matchesCategory =
        currentCategory === "all" || product.classList.contains(currentCategory);
      const matchesSearch = productName.includes(searchValue);

      product.style.display =
        matchesCategory && matchesSearch ? "block" : "none";
    });
  }

  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.category;

      categoryButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      filterProducts();
      // to close after click
      document.body.classList.remove("show-mobile-menu");
    });
  });

  // Search 
  searchInput.addEventListener("input", filterProducts);

});

/* RATING SYSTEM  */
const stars = document.querySelectorAll(".stars i");
const ratingText = document.getElementById("rating-text");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const rating = index + 1;

    stars.forEach((s, i) => {
      if (i < rating) {
        s.classList.remove("fa-regular");
        s.classList.add("fa-solid");
      } else {
        s.classList.remove("fa-solid");
        s.classList.add("fa-regular");
      }
    });

    ratingText.textContent = `You rated us ${rating} out of 5 ⭐`;
  });
});
