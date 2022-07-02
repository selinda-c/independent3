// business logic
function count(userInput){
  let numberArray = []
  for (let index = 0; index <= userInput; index ++){
    if (userInput[index].includes(3)){
      numberArray.push("Won't you be my neighbor?")
    } else if (userInput[index].includes(2)) {
      numberArray.push("boop")
    } else if (userInput[index].includes(1)){
      numberArray.push("beep")
    } else {
      numberArray.push(userInput[index])
    }
  }
  return numberArray
}
window.addEventListener("load", function(){
  let form = document.querySelector("form")
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const userInput = document.querySelector("input").value;
    const input = parseInt(userInput);
    console.log(count(input));
  });
});
// UI logic