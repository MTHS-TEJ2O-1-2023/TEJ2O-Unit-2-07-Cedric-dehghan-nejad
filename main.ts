/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: cedric
 * Created on: oct 2023
 * This program adds a cookie everytime you click
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

let cookie: number
cookie = 0

// input

input.onButtonPressed(Button.A, function () {
  cookie = (cookie + 1)

  basic.showNumber(cookie)

  input.onButtonPressed(Button.B, function () {
    cookie = 0
    basic.showNumber(cookie)
  })
})
