namespace SpriteKind {
    export const Knife = SpriteKind.create()
    export const InventoryItem = SpriteKind.create()
    export const Portal = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
    if (controller.player1.isPressed(ControllerButton.Right)) {
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
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......ccccccffffffcc...
    ........ccbffffffffffc..
    .....cc..bffffffffffffc.
    .....cccbfffffff71fffffc
    ......cbffffffff77ffdffc
    ......bffffffffffffffffc
    ...cc.bfffddffffbb13bbc.
    ...cccdffdddddfffb333fc.
    .....bddddddddddfff33ff.
    ..cccdddddbffbbdddffffc.
    ..cccdddddbfffbbbbcccc..
    ...ccddddddbffffcbcdc...
    ccccbddddddfcbffcbcc....
    cdddddddddffffccbbc.....
    .cddddddbddfffbbbcc.....
    ..ccdddbbbddffcbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccddfffdcccccc...
    ........cccccccc........
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
music.play(music.stringPlayable("C5 B A G G A B C5 ", 130), music.PlaybackMode.LoopingInBackground)
scene.cameraFollowSprite(chimuelo)
forever(function () {
    if (chimuelo.overlapsWith(collectable_knife)) {
        player_knife = 1
        sprites.destroy(collectable_knife)
        game.showLongText("You learned the \"throw knife\" ability", DialogLayout.Bottom)
        game.showLongText("Press \"A\" to throw the knife to your enemies", DialogLayout.Bottom)
    }
})
