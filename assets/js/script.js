  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  const openIcon = document.getElementById("menuOpenIcon");
  const closeIcon = document.getElementById("menuCloseIcon");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Mobile dropdown toggle for "Pages"
  const mobileFeaturesToggle = document.getElementById("mobileFeaturesToggle");
  const mobileDropdownMenu = document.getElementById("mobileDropdownMenu");
  const mobileDropdownIcon = document.getElementById("mobileDropdownIcon");

  mobileFeaturesToggle.addEventListener("click", () => {
    mobileDropdownMenu.classList.toggle("hidden");
    mobileDropdownIcon.classList.toggle("rotate-180");
  });

