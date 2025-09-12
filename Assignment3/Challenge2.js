let secretPin="1234";
let userPin;

do{
    userPin=prompt("Please enter your 4-digit PIN: ");
}
while(userPin!=secretPin)

alert("Correct PIN Number!")