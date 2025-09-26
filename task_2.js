let day = "12";
if (day % 2 == 0) {
    console.log("Even day");
}
switch (day) {
    case (1 <= day <= 5):
        console.log("Weekday");
        break;
    case (6 <= day <= 7):
        console.log("Weekend");
        break;
    default:
        console.log("Invaild day");
        break;

}