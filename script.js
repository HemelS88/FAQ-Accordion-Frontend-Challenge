var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    var plusIcon = this.querySelector(".plus__icon");
    var minusIcon = this.querySelector(".minus__icon");

    if (content.style.display === "block") {
      content.style.display = "none";
      plusIcon.style.display = "inline";
      minusIcon.style.display = "none";
    } else {
      content.style.display = "block";
      plusIcon.style.display = "none";
      minusIcon.style.display = "inline";
    }
  });
}