try {
    let user = prompt("Enter your name ");
    if (user == "") {
        throw new Error("Name not entered. Exiting....");
    }
    let c = confirm("Hello " + user + "! Do you want to order food?");
    if (c == false) {
        alert("Goodbye ! See you next time!");
        throw new Error("User cancelled the ordering process");
    }
    let menu = {
        1: { n: "Pizza", p: 150 },
        2: { n: "Burger", p: 100 },
        3: { n: "Sandwich", p: 80 }
    }
    let o;
    while (true) {
        o = Number(prompt("Choose an option:\n1=Pizza ($150)\n2=Burger ($100)\n3=Sandwich ($80)"));
        if (!isNaN(o) && o >= 1 && o <= 3) break;
        alert("Invalid choice!");
    }
    let q = prompt("Enter the number of quantity of " + menu[o].n);
    q = Number(q);
    let b = true;
    while (b === true) {
        if (q < 1 || isNaN(q)) {
            alert("Invalid quantity");
            b = confirm("Enter a valid quantity");
        }
        else {
            b = false;
        }

    }
    let item = menu[o];
    let total = item.p * q;
    function processBill(item, q) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (total > 0) {
                    resolve(`You ordered ${q} ${item.n}(s).\n Total = $${total}`);
                } else {
                    reject("Error calculating bill!");
                }
            }, 1000);
        });
    }

    processBill(item, q)
        .then(msg => alert(msg))
        .catch(err => alert(err));

}
catch (error) {
    alert("! Something went wrong: " + error.message);
}