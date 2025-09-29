let distance = Number(prompt("Enter distance"));
let transport = prompt("Enter your transport type");
let fare;
switch (transport) {
    case "bus":
        fare = 5;
        break;
    case "train":
        fare = 10;
        break;
    case "flight":
        fare = 100;
        break;
    default:
        alert("Invalid transport type");
}
alert("Total fare: " + (fare * distance));