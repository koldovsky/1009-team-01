(function () {
  const iconBurger = document.querySelector(".header__navigation-hamburger");
  const navigationsBody = document.querySelector(".header__navigation-wrapper");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
    const marginNawigationWrapper = document.querySelector(".header__navigation-wrapper");
    marginNawigationWrapper.style.marginTop = '100px'
  });

  const navLinks = document.querySelectorAll(".header__navigation__link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
      if (iconBurger.classList.contains("active")) {
        document.body.classList.remove("lock");
        iconBurger.classList.remove("active");
        navigationsBody.classList.remove("active");
        const marginNawigationWrapper = document.querySelector(".header__navigation-wrapper");
        marginNawigationWrapper.style.marginTop = '0px'
      }
    }
    );
  });
})();