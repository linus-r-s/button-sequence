function storeButton (btn: string) {
    buttonPressed = 1
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    seq = "" + seq + btn
}
function buttonWait () {
    buttonPressed = 0
    while (buttonPressed == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        if (input.buttonIsPressed(Button.A)) {
            storeButton("A")
        } else if (input.buttonIsPressed(Button.B)) {
            storeButton("B")
        }
    }
}
let buttonPressed = 0
let seq = ""
seq = ""
for (let index = 0; index < 4; index++) {
    buttonWait()
}
basic.clearScreen()
basic.showString(seq)
