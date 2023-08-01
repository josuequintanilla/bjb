basic.forever(function () {
    if (input.lightLevel() == 100) {
        basic.showLeds(`
            . . . . .
            . # . # .
            # . # . #
            . # . # .
            . . # . .
            `)
        led.setBrightness(222)
    } else {
        basic.showIcon(IconNames.Butterfly)
        basic.pause(500)
    }
})
