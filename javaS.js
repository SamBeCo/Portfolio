$(document).ready(function () {
    var cursor = $(".cursor");
    $(window).mousemove(function (e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function () {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function () {
            cursor.css({
                opacity: "1"
            });
        });

    $(".link")
        .mouseenter(function () {
            cursor.css({
                transform: "scale(3.2)"
            });
        })
        .mouseleave(function () {
            cursor.css({
                transform: "scale(2)"
            });
        });

    $(window)
        .mousedown(function () {
            cursor.css({
                transform: "scale(.2)"
            });
        })
        .mouseup(function () {
            cursor.css({
                transform: "scale(1)"
            });
        });
});


//MENU
$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.hamburger').toggleClass('is-active');
        $('.menuppal').toggleClass('is_active');
        return false;
    });
});

/*JS*/
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info3 = document.getElementById("info3");
var info4 = document.getElementById("info4");
var info5 = document.getElementById("info5");

document.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.id === "myImg") {
        modal.style.display = "block";
        modalImg.className = elem.className + "prueba";
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function () { window.scrollTo(x, y) };
        window.scrollTo(0, 0);
        if (elem.className == "item item-1") {
            info1.style.display = "block";
            info2.style.display = "none";
            info3.style.display = "none";
            info4.style.display = "none";
            info5.style.display = "none";
        }
        if (elem.className == "item item-2") {
            info2.style.display = "block";
            info1.style.display = "none";
            info3.style.display = "none";
            info4.style.display = "none";
            info5.style.display = "none";
        }
        if (elem.className == "item item-3") {
            info3.style.display = "block";
            info1.style.display = "none";
            info2.style.display = "none";
            info4.style.display = "none";
            info5.style.display = "none";
        }
        if (elem.className == "item item-4") {
            info4.style.display = "block";
            info1.style.display = "none";
            info2.style.display = "none";
            info3.style.display = "none";
            info5.style.display = "none";
        }
        if (elem.className == "item item-5") {
            info5.style.display = "block";
            info1.style.display = "none";
            info2.style.display = "none";
            info3.style.display = "none";
            info4.style.display = "none";
        }
    }
})

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    window.onscroll = null;
    modal.style.display = "none";
}


