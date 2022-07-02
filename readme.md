
# _Mr. Roboger's Neighborhood_

#### By _**Selinda C**_

#### _A counting machine._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_This form shows you how counting is done in Mr. Roboger's Neighborhood. If a number includes a 1, it is replaced with "beep". If a number includes 2, it is replaced with "boop". If a number includes 3, it is replaced with "won't you be my neighbor?"._

## Setup/Installation Requirements

* _Clone the GitHub repository via command "Git clone" in your terminal: https://github.com/selinda-c/independent3.git
* _Navigate to the cloned directory in your downloads_
* _Open the index.html page in your web browser_
* _This is best viewed in Safari and Chrome_

## Known Bugs

* _None that I am aware of at this time_

## License

_MIT License

Copyright (c) [2022] [Selinda Chapman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE._

#### TDD: 
describe count()
test: "it should return an array of numbers  based on the user inputted number"
code: 
const input = 5
count(input);
expected output: [1, 2, 3, 4, 5]

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
