// business logic
function count(userInput){
  let numberArray = []
  for (let index = 0; index <= userInput; index +=1){
    if (userInput.includes(3)){
      numberArray.push("Won't you be my neighbor?")
    } else if (userInput.includes(2)) {
      numberArray.push("beep")
    } else if (userInput.includes(1)){
      numberArray.push("beep")
    } else {
      numberArray.push(userInput[index])
    }
  }
  return numberArray
}
let form = document.querySelector("form")
form.addEventListener("submit" function(event){
  event.preventDefault
  const userInput = document.querySelector
  count(userInput)
})

// UI logic