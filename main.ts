input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.acceleration(Dimension.X)))
})
basic.showIcon(IconNames.Happy)
