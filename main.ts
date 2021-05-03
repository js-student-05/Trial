basic.showString("Alexis and Emily ")
music.playMelody("C5 B E C G E D A ", 500)
basic.showLeds(`
    . # . # .
    # # # # #
    . # # # .
    . . # . .
    . . . . .
    `)
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Skull)
}
let 益力多多 = 1
music.playMelody("C5 B A C E G A E ", 120)
basic.showIcon(IconNames.Butterfly)
basic.showString("The End")
basic.forever(function () {
	
})
