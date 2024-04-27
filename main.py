@namespace
class SpriteKind:
    Knife = SpriteKind.create()
    InventoryItem = SpriteKind.create()
    Portal = SpriteKind.create()

def on_a_pressed():
    global laser_sword
    if player_knife >= 1:
        if controller.player1.is_pressed(ControllerButton.LEFT):
            laser_sword = sprites.create_projectile_from_sprite(img("""
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
                """),
                chimuelo,
                -100,
                0)
        elif controller.player1.is_pressed(ControllerButton.UP):
            laser_sword = sprites.create_projectile_from_sprite(img("""
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
                """),
                chimuelo,
                0,
                100)
        elif controller.player1.is_pressed(ControllerButton.DOWN):
            laser_sword = sprites.create_projectile_from_sprite(img("""
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
                """),
                chimuelo,
                0,
                -100)
        else:
            laser_sword = sprites.create_projectile_from_sprite(img("""
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
                """),
                chimuelo,
                100,
                0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_overlap_tile(sprite, location):
    if controller.player1.is_pressed(ControllerButton.RIGHT):
        if player_knife:
            game.game_over(True)
            game.set_game_over_effect(True, effects.confetti)
            game.set_game_over_message(True, "YOU WIN!")
        else:
            game.show_long_text("YOU DO NOT HAVE THE KNIFE, GO AND GET IT",
                DialogLayout.BOTTOM)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_insignia,
    on_overlap_tile)

laser_sword: Sprite = None
player_knife = 0
chimuelo: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level2
"""))
chimuelo = sprites.create(img("""
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
    """),
    SpriteKind.player)
collectable_knife = sprites.create(img("""
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
    """),
    SpriteKind.Knife)
collectable_knife.set_position(30, 120)
player_knife = 0
player_sword = 0
controller.move_sprite(chimuelo)
info.set_life(20)
chimuelo.set_position(10, 10)
music.play(music.string_playable("C5 B A G G A B C5 ", 130),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
scene.camera_follow_sprite(chimuelo)

def on_forever():
    global player_knife
    if chimuelo.overlaps_with(collectable_knife):
        player_knife = 1
        sprites.destroy(collectable_knife)
        game.show_long_text("You learned the throw knife ability", DialogLayout.BOTTOM)
        game.show_long_text("Press \"A\" to throw the knife to your enemies",
            DialogLayout.BOTTOM)
forever(on_forever)
