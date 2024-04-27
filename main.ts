namespace SpriteKind {
    export const Knife = SpriteKind.create()
    export const InventoryItem = SpriteKind.create()
    export const Portal = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player_knife >= 1) {
        if (controller.player1.isPressed(ControllerButton.Left)) {
            laser_sword = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . f f . . . 
                . . . . . . . . . . f c d f . . 
                . . . . . . . . . f c d f . . . 
                . . . . f . . . f c d f . . . . 
                . . . f 7 f . f c d f . . . . . 
                . . . . f 7 f c d f . . . . . . 
                . . . . . f 7 f f . . . . . . . 
                . . . . f e f 7 f . . . . . . . 
                . . . f e f . f 7 f . . . . . . 
                . . f e f . . . f . . . . . . . 
                . f e f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, chimuelo, -200, 0)
        } else if (controller.player1.isPressed(ControllerButton.Up)) {
            laser_sword = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . f f . . . 
                . . . . . . . . . . f c d f . . 
                . . . . . . . . . f c d f . . . 
                . . . . f . . . f c d f . . . . 
                . . . f 7 f . f c d f . . . . . 
                . . . . f 7 f c d f . . . . . . 
                . . . . . f 7 f f . . . . . . . 
                . . . . f e f 7 f . . . . . . . 
                . . . f e f . f 7 f . . . . . . 
                . . f e f . . . f . . . . . . . 
                . f e f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, chimuelo, 0, -200)
        } else if (controller.player1.isPressed(ControllerButton.Down)) {
            laser_sword = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . f f . . . 
                . . . . . . . . . . f c d f . . 
                . . . . . . . . . f c d f . . . 
                . . . . f . . . f c d f . . . . 
                . . . f 7 f . f c d f . . . . . 
                . . . . f 7 f c d f . . . . . . 
                . . . . . f 7 f f . . . . . . . 
                . . . . f e f 7 f . . . . . . . 
                . . . f e f . f 7 f . . . . . . 
                . . f e f . . . f . . . . . . . 
                . f e f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, chimuelo, 0, 200)
        } else {
            laser_sword = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . f f . . . 
                . . . . . . . . . . f c d f . . 
                . . . . . . . . . f c d f . . . 
                . . . . f . . . f c d f . . . . 
                . . . f 7 f . f c d f . . . . . 
                . . . . f 7 f c d f . . . . . . 
                . . . . . f 7 f f . . . . . . . 
                . . . . f e f 7 f . . . . . . . 
                . . . f e f . f 7 f . . . . . . 
                . . f e f . . . f . . . . . . . 
                . f e f . . . . . . . . . . . . 
                . . f . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, chimuelo, 200, 0)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (controller.player1.isPressed(ControllerButton.Up)) {
        if (player_knife) {
            game.gameOver(true)
            game.setGameOverEffect(true, effects.confetti)
            game.setGameOverMessage(true, "YOU WIN!")
        } else {
            game.showLongText("YOU DO NOT HAVE THE KNIFE, GO AND GET IT", DialogLayout.Bottom)
        }
    }
})
let laser_sword: Sprite = null
let player_knife = 0
let chimuelo: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
chimuelo = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f 3 f 4 4 f 3 f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let collectable_knife = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ...............cc.......
    ..............cdc.......
    .............cdc........
    ............cdc.........
    ...........cdc..........
    ..........ffc...........
    .........fff............
    ........fff.............
    ........ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Knife)
collectable_knife.setPosition(30, 120)
player_knife = 0
let player_sword = 0
controller.moveSprite(chimuelo)
info.setLife(20)
chimuelo.setPosition(10, 10)
scene.cameraFollowSprite(chimuelo)
let Enemy1 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
Enemy1.setPosition(108, 105)
forever(function () {
    if (chimuelo.overlapsWith(collectable_knife)) {
        player_knife = 1
        sprites.destroy(collectable_knife)
        game.showLongText("You learned the throw knife ability", DialogLayout.Bottom)
        game.showLongText("Press \"B\" to throw the knife to your enemies", DialogLayout.Bottom)
    }
})
forever(function () {
    music.play(music.createSong(hex`0078000408010400001c00010a006400f40164000004000000000000000000000000000500000413000000040002272a04000800012408000c00012004001c00100500640000041e000004000000000000000000000000000a04000409000c001000042425272905001c000f0a006400f4010a000004000000000000000000000000000000000213000c001000012a1400180002242518001c00012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000e001800190002080a1c001d00020204`), music.PlaybackMode.UntilDone)
})
