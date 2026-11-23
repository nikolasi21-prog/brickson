let random_number = 0
input.onGesture(Gesture.Shake, function () {
    random_number = randint(1, 3)
    if (random_number == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (random_number == 2) {
        basic.showIcon(IconNames.Scissors)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
basic.forever(function () {
	
})
