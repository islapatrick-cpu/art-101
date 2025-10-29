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

