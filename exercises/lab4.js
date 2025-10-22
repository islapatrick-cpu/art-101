// declaring an array with name myCommutes
let myCommutes=["metro bus", "loop bus", "my car", "jessy's car", "walking"]
let myFavoriteCommute = {
    type: "jessy's car",
    passengersnumber: 3,
    music: "vs self",
    hasOtherPassenger: true,
    passengers: ["Gioia", "Riley", "Nadia"],
};
let megaSentence;
megaSentence = "<p>My two top commutes from the array are: " + myCommutes[2] + ", " + myCommutes[3] + " </p>";
megaSentence = megaSentence + "<p>My favorite commute possesses such characteristics: type - " + myFavoriteCommute.type + ", passengers number " + myFavoriteCommute.passengersnumber + ", the best fellow passenger: " + myFavoriteCommute.passengers[1] + "</p>";
$("#output").html(megaSentence);