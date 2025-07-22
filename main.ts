// When button A is pressed, the message "SMILE! :smileyface BE HAPPY! :heart" will scroll across the LEDs.
input.onButtonPressed(Button.A, function () {
    basic.showString("SMILE!")
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    basic.pause(200)
    basic.showString("BE HAPPY!")
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.clearScreen()
})
// When button B is pressed, a series of LED displays will show an animated stick figure doing a jumping jack.
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})
