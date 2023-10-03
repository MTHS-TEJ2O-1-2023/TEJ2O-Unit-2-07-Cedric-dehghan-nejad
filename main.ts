/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: oct 2023
 * This program ...
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let cookie: number
cookie = 0
input.buttonIsPressed(Button.A)
// input
input.onButtonPressed(Button.A, function() {
  cookie = (cookie + 1)

  basic.showNumber(cookie)

  input.onButtonPressed(Button.B, function() {
    cookie = 0
  basic.showNumber(cookie)
})    
})