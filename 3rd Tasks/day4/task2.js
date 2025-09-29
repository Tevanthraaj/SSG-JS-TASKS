prompt("Welcome to the Tech quiz! \n\nPress OK to start.");
let score = 0;
let a=true;
while(a===true){
    let q1 = prompt("Q1. What are GPUs primarily made of?\n1=3D-stacked transistor arrays on silicon wafers\n2=Nano-scale quantum tunneling devices\n3=Fully optical photonic processors\n4=Carbon-nanotube molecular circuits");
    if (q1 === "1") {
        score++;
        alert("Correct! Your score is: " + score);
    } else {
        alert("Wrong! The correct answer is 1. Your score is: " + score);
    }
    let q2 = prompt("Q2. What is the primary function of a GPU in modern computing?\n1=Managing system memory allocation\n2=Handling high-speed parallel processing of graphics and data\n3=Executing sequential CPU instructions\n4=Controlling network data flow");
    if (q2 === "2") {
        score++;
        alert("Correct! Your score is: " + score);
    } else {
        alert("Wrong! The correct answer is 2. Your score is: " + score);
    }
    let q3 = prompt("Q3. How do GPUs achieve massive parallel processing?\n1=By using a small number of ultra-fast cores\n2=By stacking multiple CPUs together\n3=By integrating thousands of smaller, specialized cores working simultaneously\n4=By utilizing cloud-based processing power");
    if (q3 === "3") {
        score++;
        alert("Correct! Your score is: " + score);
    } else {
        alert("Wrong! The correct answer is 1. Your score is: " + score);
    }
    let q4 = prompt("Q4. How does a GPU convert data into images on a screen\n1=By running all instructions in a single core at high frequency\n2=By breaking tasks into vertices, shaders, and pixels processed in parallel pipelines\n3=By storing pre-rendered images in VRAM and replaying them\n4=By converting binary code directly into light signals");    
    if (q4 === "2") {   
         score++;
        alert("Correct! Your score is: " + score);
    } else {
        alert("Wrong! The correct answer is 1. Your score is: " + score);
    }
    a=confirm("Do you want to play again?");
    if(a===false){
        alert("Thank you for playing! Your final score is: " + score);
        break;
    }
}