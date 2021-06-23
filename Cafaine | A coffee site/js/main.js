$(document).ready(() => {
  $(".modal").modal();
  $(".parallax").parallax();
  $(".sidenav").sidenav();
  $(".slider").slider({
    full_width: true,
  });
  $(".parallax").parallax();
  $(".myreviews").carousel({
    numVisible: 7,
    shift: 55,
    padding: 55,
  });
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modal3"));
  instance.open();
}

function toggleTheme() {
  let icon = document.querySelector(".fas");
  if (icon.classList.contains("fa-moon")) {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  } else {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  }

  themeHandler();
}

function themeHandler() {
  let darkThemeItems = document.querySelectorAll(".theme");
  console.log(darkThemeItems);
  darkThemeItems.forEach((item) => {
    if (item.classList.contains("light-theme")) {
      item.classList.remove("light-theme");
      item.classList.add("dark-theme");
    } else {
      item.classList.remove("dark-theme");
      item.classList.add("light-theme");
    }
  });
}
