// utility
function count(userInput){
  let numberArray = []
  for (let index = 0; index <= userInput; index ++){
    if (index.toString().includes(3)){
      numberArray.push("Won't you be my neighbor?");
    } else if (index.toString().includes(2)) {
      numberArray.push("boop");
    } else if (index.toString().includes(1)){
      numberArray.push("beep");
    } else {
      numberArray.push(index);
    }
  };
  return numberArray;
}

// UI 
window.addEventListener("load", function(){
  let form = document.querySelector("form")
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const userInput = document.querySelector("input").value;
    const input = parseInt(userInput);
    const output = document.getElementById("output")
    output.append(count(userInput));
  });
});