let worldTitle = "Peanuts Yard";

// array of characters (simple list)
let peanutsGang = ["Snoopy", "Woodstock", "Charlie", "Linus"];

// detailed objects (Snoopy & Woodstock only)
let snoopy = {
    name: "Snoopy",
    size: "medium",
    color: "white + black spots",
    personality: "imaginative, aloof, dramatic"
};

let woodstock = {
    name: "Woodstock",
    size: "tiny",
    color: "bright yellow",
    personality: "loyal, jittery, expressive despite few words"
};


$(document).ready(function(){

    // title
    $("#title").append(`<h1>${worldTitle}</h1>`);

    // peanuts gang list
    $("#characters").append(`<h2>Peanuts Gang:</h2>`);
    $("#characters").append(`<ul id="gang-list"></ul>`);
    peanutsGang.forEach(name => {
        $("#gang-list").append(`<li>${name}</li>`);
    });

    // detail cards for Snoopy and Woodstock
    $("#detail").append(`<h2>Details:</h2>`);

    $("#detail").append(`
        <div class="char-card">
            <strong>${snoopy.name}</strong><br/>
            Size: ${snoopy.size}<br/>
            Color: ${snoopy.color}<br/>
            Personality: ${snoopy.personality}
        </div>
    `);

    $("#detail").append(`
        <div class="char-card">
            <strong>${woodstock.name}</strong><br/>
            Size: ${woodstock.size}<br/>
            Color: ${woodstock.color}<br/>
            Personality: ${woodstock.personality}
        </div>
    `);

});

const images = [
  "halloween.jpg",
  "scaryhouse.jpeg",
  "haunted-house.png"
];

let index = 0;

document.getElementById("cycleBtn").addEventListener("click", () => {
  index = (index + 1) % images.length;
  document.body.style.backgroundImage = `url("${images[index]}")`;
});

    $("#snoopy").hover(
        function () {
            $(this).animate({ width: "350px", opacity: 0.8 }, 400)
                   .animate({ width: "300px", opacity: 1 }, 400);
        }
    );

    $("#woodstock1").hover(function () {
        $(this).animate({ left: "+=50px" }, 300)
               .animate({ left: "-=50px" }, 300);
    });

    let colors = ["#ffa07a", "#f5deb3", "#98fb98", "#87cefa", "#dda0dd"];
    let i = 0;
    $("#cycleBtn").click(function () {
        $("body").css("background-color", colors[i]);
        i = (i + 1) % colors.length;
        $("#woodstock1").fadeToggle(600);
    });

    $("#gang-list li").hover(function () {
        $(this).css("background", "orange");
    }, function () {
        $(this).css("background", "");
    });

    $(document).ready(function () {
    let mouseX = 0, mouseY = 0;
    let ghostX = 0, ghostY = 0;
    const speed = 0.1; 

    $(document).mousemove(function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
    });

    function animateGhost() {
        ghostX += (mouseX - ghostX) * speed;
        ghostY += (mouseY - ghostY) * speed;

        $("#ghost").css({
            left: ghostX + "px",
            top: ghostY + "px"
        });

        requestAnimationFrame(animateGhost);
    }

    animateGhost();
});

$("#woodstock1").hover(function () {
    $({deg: 0}).animate({deg: 360}, {
        duration: 700,
        step: function (now) {
            $("#woodstock1").css({
                transform: "rotate(" + now + "deg)"
            });
        }
    });
});
