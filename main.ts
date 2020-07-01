input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.showIcon(IconNames.Skull)
    basic.pause(500)
    basic.showIcon(IconNames.Asleep)
    basic.pause(500)
    basic.showIcon(IconNames.Sword)
    basic.pause(500)
    basic.showIcon(IconNames.TShirt)
    basic.pause(500)
    basic.showIcon(IconNames.Tortoise)
    basic.pause(500)
    basic.showIcon(IconNames.Fabulous)
    basic.pause(500)
    basic.showIcon(IconNames.EigthNote)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Triangle)
    basic.pause(500)
    basic.showLeds(`
        # . # . #
        # # # # #
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.TShirt)
    basic.pause(500)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(500)
    basic.showIcon(IconNames.Sword)
    basic.pause(500)
    basic.showIcon(IconNames.Ghost)
    basic.pause(500)
    basic.showIcon(IconNames.Pitchfork)
    basic.pause(500)
    basic.showIcon(IconNames.Fabulous)
    basic.pause(500)
    basic.showIcon(IconNames.Skull)
})
basic.showIcon(IconNames.StickFigure)
