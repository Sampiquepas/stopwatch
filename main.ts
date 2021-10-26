let Start = 0
let valeur = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    valeur = input.runningTime() - Start
    basic.showNumber(valeur / 1000)
})
basic.forever(function () {
	
})
