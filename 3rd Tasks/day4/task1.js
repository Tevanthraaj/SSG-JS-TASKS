let p = Number(prompt("Enter the pin:"));
if (p === 1234) {
    alert("Welcome to your account");
    let a = true;
    while (a === true) {
            let option = prompt("Choose an option: \n1=Check Balance,\n 2=Withdraw,\n 3=Deposit,\n 4=Exit");
        switch (option) {
            case "1":
                alert("Your balance is $1000");
                break;
            case "2":
                let w = Number(prompt("Enter amount to withdraw:"));
                if (w <= 1000) {
                    alert("Please take your cash. Your new balance is $" + (1000 - w));
                } else {
                    alert("Insufficient balance.");
                }
                break;
            case "3":
                let d = Number(prompt("Enter amount to deposit:"));
                alert("Your new balance is $" + (1000 + d));
                break;
            case "4":
                alert("Thank you for using our service. Goodbye!");
                break;
            default:
                alert("Invalid option selected.");
        }
        a = confirm("Do you want to check again?");
        if (a === false) {
            alert("Goodbye!");
            break;
        }
    }
}