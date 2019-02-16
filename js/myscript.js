window.onscroll = function() {
  onScrollTop();
};
function onScrollTop() {
  const btnScrolltop = document.getElementById("scroll-top");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnScrolltop.style.display = "inline";
  } else {
    btnScrolltop.style.display = "none";
  }
}
function onClickScroll() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
