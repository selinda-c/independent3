describe count()
test: "it should return "beep" if a user inputs a number that includes 1"
code: 
const input = 1
count(input);
expected output: "beep"

test: "it should return "boop" if user input includes a 2"
code: 
const input = 2
count(input);
expected output: "boop"

test: "it should return "won't you be my neighbor" if the input includes a 3"
code: 
const input = 3
count(input);
expected output: "won't you be my neighbor?"
