controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        . . . . . b b b b b b . . . . . 
        `, mySprite, 0, -40)
    pause(200)
    projectile.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . b b b b . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
    projectile.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(200)
    projectile.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    projectile.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . 7 6 6 6 7 . . . . . . 
        . . . . 7 7 6 6 6 7 7 . . . . . 
        . . . . . 7 6 6 6 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . . . 7 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    pause(100)
    projectile.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
function tofpx (n: number) {
    return (n * fpx_scale) | 0
}
let projectile: Sprite = null
let mySprite: Sprite = null
let mySprite2 = sprites.create(img`
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999bbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999bbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbb9999999b
    999999bbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9bbbbb
    9999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    99bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999999999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb99999999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb9999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbb777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbb777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777
    bbbbbb77777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777
    bbb7777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777777
    b777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `, SpriteKind.Player)
mySprite2.setPosition(73, 15)
info.setLife(3)
mySprite = sprites.create(img`
    .......cd.......
    .......cd.......
    .......cd.......
    .......cb.......
    .......ff.......
    .......c7.......
    .......ff.......
    .......87.......
    ......8856......
    ......8756......
    .....ccc666.....
    ....88777566....
    ..8fffcc66ff66..
    .88886677775766.
    8888886677757766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886247775766
    8888886247775766
    8888886227775766
    8888886677775766
    8888886677775766
    8888886247775766
    8888886247775766
    8888886227775766
    8888886227775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    8888886677775766
    `, SpriteKind.Enemy)
game.showLongText("welcome too doom abe edition", DialogLayout.Bottom)
mySprite.setPosition(76, 95)
let map = img`
    66666666666666666666666666666666
    6.......66.................666.6
    6.......66................666..6
    6.......66...............666...6
    6.......66..............666....6
    6.......66.............666.....6
    6.......66............666......6
    6.......66...........666.......6
    6...................666........6
    6....................6.........6
    6..............................6
    6..............................6
    6....66.............6..........6
    6....66............666.........6
    6....66.............666........6
    6....66..............666.......6
    6....66...............666......6
    6....66................666.....6
    6....66.................666....6
    6....66......666666......666...6
    6....66666666666666.......666..6
    6....66666666....66........666.6
    6....66..........66.........6666
    6....66..........66..........666
    6....66..........66...........66
    6....66..........66............6
    6................66............6
    6................66............6
    6................66............6
    6....66..........66............6
    6....66..........66............6
    66666666666666666666666666666666
    `
let textures = [
img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `,
null,
img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `,
null,
img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `,
null,
img`
    ....................8a8aa8a8....................
    .................aaa888aa8a8aaa.................
    ..............aaa8aa8a8aa888aa8aaa..............
    ...........8aa8aa8888a8aa8a8888aa8aa8...........
    ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
    .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
    ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
    dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
    bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
    dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
    dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
    dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
    bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
    dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
    bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
    dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
    dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
    dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
    bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
    dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
    dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
    dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
    bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
    dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
    dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
    dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
    ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
    bddddddddddddbcddddddddddddddddddcbddddddddddddb
    bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
    bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
    bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
    bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
    bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
    bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
    bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
    bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
    bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
    cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
    cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
    ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
    .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
    ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
    ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
    ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
    .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
    ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
    `,
null,
img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `,
null,
img`
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c b 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 8 8 5 6 7 7 7 7 7 7 
    7 7 7 7 7 7 8 7 5 6 7 7 7 7 7 7 
    7 7 7 7 7 c c c 6 6 6 7 7 7 7 7 
    7 7 7 7 8 8 7 7 7 5 6 6 7 7 7 7 
    7 7 8 f f f c c 6 6 f f 6 6 7 7 
    7 8 8 8 8 6 6 7 7 7 7 5 7 6 6 7 
    8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
    8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
    `,
img`
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c b 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 8 8 5 6 7 7 7 7 7 7 
    7 7 7 7 7 7 8 7 5 6 7 7 7 7 7 7 
    7 7 7 7 7 c c c 6 6 6 7 7 7 7 7 
    7 7 7 7 8 8 7 7 7 5 6 6 7 7 7 7 
    7 7 8 f f f c c 6 6 f f 6 6 7 7 
    7 8 8 8 8 6 6 7 7 7 7 5 7 6 6 7 
    8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
    8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
    `,
img`
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c b 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 8 8 5 6 7 7 7 7 7 7 
    7 7 7 7 7 7 8 7 5 6 7 7 7 7 7 7 
    7 7 7 7 7 c c c 6 6 6 7 7 7 7 7 
    7 7 7 7 8 8 7 7 7 5 6 6 7 7 7 7 
    7 7 8 f f f c c 6 6 f f 6 6 7 7 
    7 8 8 8 8 6 6 7 7 7 7 5 7 6 6 7 
    8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
    8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
    `,
img`
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c d 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c b 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 c 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 f f 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 8 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 8 8 5 6 7 7 7 7 7 7 
    7 7 7 7 7 7 8 7 5 6 7 7 7 7 7 7 
    7 7 7 7 7 c c c 6 6 6 7 7 7 7 7 
    7 7 7 7 8 8 7 7 7 5 6 6 7 7 7 7 
    7 7 8 f 7 f c c 6 6 f f 6 6 7 7 
    7 8 8 8 8 6 6 7 7 7 7 5 7 6 6 7 
    8 8 8 8 8 8 6 6 7 7 7 5 7 7 6 6 
    8 8 8 8 8 8 6 6 7 7 7 7 5 7 6 6 
    `
]
game.stats = true
let t0 = textures[0]
for (let i = 0; i <= textures.length - 1; i++) {
    if (textures[i]) {
        t0 = textures[i]
    } else {
        textures[i] = t0
    }
}
let fpx = 10
let fpx_scale = 1024
let fov = 0.66
class State {
    x: number
    y: number
    map: Image
    dirX: number
    dirY: number
    planeX: number
    planeY: number
    angle: number

    constructor() {
        this.angle = 0
        this.x = tofpx(18)
        this.y = tofpx(7)

        this.setVectors()
        this.map = map.clone()
    }

    private setVectors() {
        const sin = Math.sin(this.angle)
        const cos = Math.cos(this.angle)
        this.dirX = tofpx(cos)
        this.dirY = tofpx(sin)
        this.planeX = tofpx(sin * fov)
        this.planeY = tofpx(cos * -fov)
    }

    private canGo(x: number, y: number) {
        return this.map.getPixel(x >> fpx, y >> fpx) == 0
    }

    updateControls() {
        const dx = controller.dx(2)
        if (dx) {
            this.angle -= dx
            this.setVectors()
        }
        const dy = controller.dy(5)
        if (dy) {
            const nx = this.x - Math.round(this.dirX * dy)
            const ny = this.y - Math.round(this.dirY * dy)
            if (!this.canGo(nx, ny) && this.canGo(this.x, this.y)) {
                if (this.canGo(this.x, ny))
                    this.y = ny
                else if (this.canGo(nx, this.y))
                    this.x = nx
            } else {
                this.x = nx
                this.y = ny
            }
        }
        //if (dx || dy)
        //    console.log(`${this.x},${this.y},${this.angle}`)
    }

    trace() {
        // based on https://lodev.org/cgtutor/raycasting.html
        const w = screen.width
        const h = screen.height
        const one = 1 << fpx
        const one2 = 1 << (fpx + fpx)
        for (let x = 0; x < w; x++) {
            const cameraX: number = Math.idiv((x << fpx) << 1, w) - one
            let rayDirX = this.dirX + (this.planeX * cameraX >> fpx)
            let rayDirY = this.dirY + (this.planeY * cameraX >> fpx)

            let mapX = this.x >> fpx
            let mapY = this.y >> fpx

            // length of ray from current position to next x or y-side
            let sideDistX = 0, sideDistY = 0

            // avoid division by zero
            if (rayDirX == 0) rayDirX = 1
            if (rayDirY == 0) rayDirY = 1

            // length of ray from one x or y-side to next x or y-side
            const deltaDistX = Math.abs(Math.idiv(one2, rayDirX));
            const deltaDistY = Math.abs(Math.idiv(one2, rayDirY));

            let mapStepX = 0, mapStepY = 0

            let sideWallHit = false;

            //calculate step and initial sideDist
            if (rayDirX < 0) {
                mapStepX = -1;
                sideDistX = ((this.x - (mapX << fpx)) * deltaDistX) >> fpx;
            } else {
                mapStepX = 1;
                sideDistX = (((mapX << fpx) + one - this.x) * deltaDistX) >> fpx;
            }
            if (rayDirY < 0) {
                mapStepY = -1;
                sideDistY = ((this.y - (mapY << fpx)) * deltaDistY) >> fpx;
            } else {
                mapStepY = 1;
                sideDistY = (((mapY << fpx) + one - this.y) * deltaDistY) >> fpx;
            }

            let color = 0

            while (true) {
                //jump to next map square, OR in x-direction, OR in y-direction
                if (sideDistX < sideDistY) {
                    sideDistX += deltaDistX;
                    mapX += mapStepX;
                    sideWallHit = false;
                } else {
                    sideDistY += deltaDistY;
                    mapY += mapStepY;
                    sideWallHit = true;
                }

                color = this.map.getPixel(mapX, mapY)
                if (color)
                    break; // hit!
            }

            let perpWallDist = 0
            let wallX = 0
            if (!sideWallHit) {
                perpWallDist = Math.idiv(((mapX << fpx) - this.x + (1 - mapStepX << fpx - 1)) << fpx, rayDirX)
                wallX = this.y + (perpWallDist * rayDirY >> fpx);
            } else {
                perpWallDist = Math.idiv(((mapY << fpx) - this.y + (1 - mapStepY << fpx - 1)) << fpx, rayDirY)
                wallX = this.x + (perpWallDist * rayDirX >> fpx);
            }
            wallX &= (1 << fpx) - 1

            color = (color - 1) * 2
            if (sideWallHit) color++

            const tex = textures[color]
            if (!tex)
                continue

            // textures look much better when lineHeight is odd
            let lineHeight = Math.idiv(h << fpx, perpWallDist) | 1;
            let drawStart = (-lineHeight + h) >> 1;

            let texX = (wallX * tex.width) >> fpx;
            if ((!sideWallHit && rayDirX > 0) || (sideWallHit && rayDirY < 0))
                texX = tex.width - texX - 1;

            screen.blitRow(x, drawStart, tex, texX, lineHeight)
            /*
                        const texStepY = Math.idiv(tex.height << fpx, lineHeight)
                        let texY = 0
                        let i = 0
                        if (drawStart < 0) {
                            i = -drawStart
                            texY = i * texStepY
                            lineHeight += drawStart + 1
                        }
                        for (; i < lineHeight; ++i) {
                            screen.setPixel(x, drawStart + i, tex.getPixel(texX, texY >> fpx))
                            texY += texStepY
                        }
                        */

        }
    }
}
const st = new State()
game.onPaint(function () {
    st.trace()
})
game.onUpdate(function () {
    st.updateControls()
})
