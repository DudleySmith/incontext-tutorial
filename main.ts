basic.showString("Hello!")
basic.showIcon(IconNames.No)
basic.pause(5000)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
