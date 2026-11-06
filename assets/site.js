(function () {
  var button = document.querySelector(".nav-toggle");
  var nav = document.querySelector("#site-nav");
  if (!button || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.textContent = open ? "關閉" : "選單";
  }

  button.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setOpen(false);
  });
})();
