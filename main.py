def on_button_pressed_a():
    basic.show_string("SMILE!")
    basic.show_icon(IconNames.HAPPY)
    basic.clear_screen()
    basic.pause(200)
    basic.show_string("BE HAPPY!")
    basic.show_icon(IconNames.HEART)
    basic.pause(200)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        """)
    basic.show_leds("""
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        """)
    basic.show_leds("""
        # . # . #
        . # # # .
        . . # . .
        . # # # .
        # . . . #
        """)
    basic.show_leds("""
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        . # . # .
        """)
    basic.show_leds("""
        . . # . .
        . # # # .
        # . # . #
        . # . # .
        . # . # .
        """)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)
