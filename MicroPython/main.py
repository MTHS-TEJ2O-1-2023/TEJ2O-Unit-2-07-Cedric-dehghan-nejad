"""
Created by: cedric
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

display.clear()
display.show(Image.HAPPY)

cookie = 0

while True:
    if button_a.is_pressed():
        cookie = cookie + 1
        display.show(cookie)

    if button_b.is_pressed():
        cookie = 0
        display.show(cookie)
