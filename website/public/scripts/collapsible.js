var coll = document.getElementsByClassName("main-coll-button");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            var icon = this.querySelector(".main-coll-icon");
            icon.src = "/src/app/assets/plus.svg";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            var icon = this.querySelector(".main-coll-icon");
            icon.src = "/src/app/assets/minus.svg";
        }
    });
}
