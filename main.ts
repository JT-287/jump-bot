namespace SpriteKind {
    export const spark = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
    export const gem = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    BOT.vy = -180
    animation.runImageAnimation(
    BOT,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . b 8 8 8 . . . . . 
        . . . . . . . b 8 8 b . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . b b b 8 . . . . . 
        . . . . . . . b b 8 . . . . . . 
        . . . . . . . . . 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . b b b b b . . . . . 
        . . . . . b b b b b b b . . . . 
        . . . . . b b b b b b b b . . . 
        . . . . . b b b b 8 8 b b . . . 
        . . . . . . 8 b b 8 8 b b . . . 
        . . . . . 8 . 8 b b b 8 . . . . 
        . . . . . . . . b 8 b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . 8 8 b b b b b b b . . . 
        . . . . . 8 b b b b b b b . . . 
        . . . . . b b b b 8 8 b b . . . 
        . . . . . 8 b b b 8 8 b b . . . 
        . . . . . . c c c b 8 b . . . . 
        . . . . . . . b b b 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 . b b b b . . . . . 
        . . . . . . 8 b b b b b . . . . 
        . . . . . 8 b b b b b b b . . . 
        . . . . . b b b b b b b b . . . 
        . . . . . 8 b b 8 8 b b b . . . 
        . . . . . b c c 8 8 b b b . . . 
        . . . . . . b 8 b b b b . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 8 . . . . . 
        . . . . . . . 8 b 8 8 . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b 8 8 b b b b b . . . 
        . . . . . 8 8 8 b b b b b . . . 
        . . . . . b b b b b b b b . . . 
        . . . . . b b b b b b b b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 b b b . . . . . 
        . . . . . . b b 8 8 b 8 . . . . 
        . . . . . b b b 8 8 b b b . . . 
        . . . . . b b b b b b 8 b 8 . . 
        . . . . . b b b b b b b 8 . . . 
        . . . . . b b b b b b b b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . b b b 8 8 8 . . . . 
        . . . . . b b c b 8 8 b b . . . 
        . . . . . b b c b b b b 8 . . . 
        . . . . . b b b c c c c b . . . 
        . . . . . b b b b b b 8 b . . . 
        . . . . . . b b b b b 8 8 . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . b 8 8 8 . . . . . 
        . . . . . . . b 8 8 b . . . . . 
        . . . . . . . b b b b . . . . . 
        . . . . . . . b b b 8 . . . . . 
        . . . . . . . b b 8 . . . . . . 
        . . . . . . . . . 8 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . . b b 8 8 8 . . . . . . 
        . . . . . b b 8 8 b . . . . . . 
        . . . . . b c b f b . . . . . . 
        . . . . . b c b f b . . . . . . 
        . . . . . b b b 8 . . . . . . . 
        . . . . . b b b b . . . . . . . 
        . . . . . b b b b . . . . . . . 
        . . . . . b b b . . . . . . . . 
        . . . . . . . b b . . . . . . . 
        . . . . . . 8 8 . . . . . . . . 
        . . . . . . 8 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . 8 . . . . . . . . 
        . . . . . . b 8 b b b . . . . . 
        . . . . . . b 8 8 f 2 . . . . . 
        . . . . . . b 8 8 b b . . . . . 
        . . . . . . b b b f f . . . . . 
        . . . . . . b b b b b . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . b . b b b . b . . . . . 
        . . . . b . b b b . b b 8 . . . 
        . . . . 8 . b b b . . . . . . . 
        . . . . . . b b b . . . . . . . 
        . . . . . . b . b . . . . . . . 
        . . . . . . b . . b . . . . . . 
        . . . . . 8 . . . 8 . . . . . . 
        . . . . . 8 8 . . 8 8 . . . . . 
        `],
    100,
    false
    )
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Top)) {
        game.gameOver(false)
    }
})
info.onScore(250, function () {
    sentientSawblade.sayText("you've gone far enough", 2000, false)
    for (let index = 0; index < 5; index++) {
        sentientMissile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 2 
            . . . . . . . . . . . . . 2 2 2 
            . . . . . . . . . . . b b b b b 
            . . . . . b b b b b b b b b b b 
            . . 2 2 2 b b f f f b b b b b b 
            2 2 2 2 2 b b 2 f f b b b 2 2 2 
            . . 2 2 2 b b f f f b b b b b b 
            . . . . . b b b b b b b b b b b 
            . . . . . . . . . . . b b b b b 
            . . . . . . . . . . . . . 2 2 2 
            . . . . . . . . . . . . . . . 2 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, -100, 0)
        sentientMissile.vx += EnemySpeed
        pause(2000)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    BOT.setImage(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . 8 . . . . . . . 
        . . . . . . b 8 b b b . . . . 
        . . . . . . b 8 8 f 2 . . . . 
        . . . . . . b 8 8 b b . . . . 
        . . . . . . b b b f f . . . . 
        . . . . . . b b b b b . . . . 
        . . . . . . . b . . . . . . . 
        . . . . . b b b b b . . . . . 
        . . . . b . b b b . b . . . . 
        . . . . b . b b b . b b 8 . . 
        . . . . 8 . b b b . . . . . . 
        . . . . . . b b b . . . . . . 
        . . . . . . b . b . . . . . . 
        . . . . . . b . . b . . . . . 
        . . . . . 8 . . . 8 . . . . . 
        . . . . . 8 8 . . 8 8 . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.gameOver(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    BOT.setImage(img`
        . b 8 b b b b . . . . . . . . . 
        . b 8 8 b f 2 . . . . . . . . . 
        . b 8 8 b b b . . . . . . . . . 
        . b b b b f f . . . . . . 8 . . 
        . b b b b b b . . b b b 8 8 . . 
        . . . c b b b b b b b . . . . 8 
        . . . c c c c 8 8 b b b b b 8 8 
        `)
    music.play(music.createSoundEffect(WaveShape.Noise, 2266, 1, 139, 0, 139, SoundExpressionEffect.Warble, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    EnemySpeed += -1
    info.changeScoreBy(1)
})
let sentientRobot: Sprite = null
let sentientMissile: Sprite = null
let sentientSawblade: Sprite = null
let EnemySpeed = 0
let BOT: Sprite = null
game.setDialogCursor(img`
    . . . . . 8 8 8 8 8 8 . . . . . 
    . . . . 8 b b b b b b 8 . . . . 
    . . . . 8 f 2 b b 2 f 8 . . . . 
    . . . . 8 b b b b b b 8 . . . . 
    . . . . . b c c c c b . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . . . . b b . . . . . . . 
    . . . . . b b b b b b . . . . . 
    . . . . b . b b b b . b . . . . 
    . . . . b . b b b b . b . . . . 
    . . . . . 8 b b b b 8 . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . . . b . . b . . . . . . 
    . . . . . . b . . b . . . . . . 
    . . . . . . 8 . . 8 . . . . . . 
    . . . . . 8 8 . . 8 8 . . . . . 
    `)
game.splash("Jump Bot", "by JT games")
scene.setBackgroundColor(12)
tiles.setCurrentTilemap(tilemap`level1`)
BOT = sprites.create(img`
    ................
    ................
    ................
    ................
    ........8.......
    .......b8bbb....
    .......b88f2....
    .......b88bb....
    .......bbbff....
    .......bbbbb....
    ........b.......
    ......bbbbbb....
    .....b.bbbb.b...
    .....b.bbbb.bb8.
    .....8.bbbb.....
    .......bbbb.....
    .......b..b.....
    .......b...b....
    ......8....8....
    ......88...88...
    `, SpriteKind.Player)
BOT.setPosition(20, 70)
BOT.ay = 400
let gemcount = 0
EnemySpeed = -1
game.onUpdateInterval(randint(1000, 2000), function () {
    sentientMissile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . 2 2 2 
        . . . . . . . . . . . b b b b b 
        . . . . . b b b b b b b b b b b 
        . . 2 2 2 b b f f f b b b b b b 
        2 2 2 2 2 b b 2 f f b b b 2 2 2 
        . . 2 2 2 b b f f f b b b b b b 
        . . . . . b b b b b b b b b b b 
        . . . . . . . . . . . b b b b b 
        . . . . . . . . . . . . . 2 2 2 
        . . . . . . . . . . . . . . . 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, -100, 0)
    sentientMissile.vx += EnemySpeed * 5
    tiles.placeOnTile(sentientMissile, tiles.getTileLocation(9, randint(5, 0)))
})
game.onUpdateInterval(randint(1000, 3000), function () {
    sentientRobot = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b b b b . . . . . . 
        . . . . f f b b b b b . . . . . 
        . . . . 2 f b b b b b . . . . . 
        . . . . f f b b b b b b . . . . 
        . . . . . b b b b b b b b . . . 
        . . f b b b b b b b b b b . . . 
        . . . . . b b b b b b b b b . . 
        . . b b . b b b b b b b b b b . 
        . . . b b b c c c c c c c b b . 
        . . b b . . b b b b b b b c b . 
        . . . . . b f f f f f f f b b . 
        . . . . . b f b f b f b f b b . 
        . . . . . b f f f f f f f b b . 
        `, -100, 0)
    sentientRobot.vx += EnemySpeed
    tiles.placeOnTile(sentientRobot, tiles.getTileLocation(9, 5))
    sentientRobot.setFlag(SpriteFlag.AutoDestroy, true)
})
game.onUpdateInterval(randint(1000, 3000), function () {
    sentientSawblade = sprites.createProjectileFromSide(img`
        ....b..b..b..b..b...
        ...bb.bb.bb.bb.bb...
        ..bbbbbbbbbbbbb111..
        bbbbbbbbbbbbbb1111b.
        .bbbbbbbbbbbb11111bb
        ..bbbbbbbbbbb1111b..
        bbbbbbbbbbbb1111bbb.
        .bbbbbbbbbb111bbbbbb
        ..bbbbbbffff1bbbbb..
        bbbbbbbb22ffbbbbbbb.
        .bbbbbbb22ffbbbbbbbb
        ..bbbbb1ffffbbbbbb..
        bbbbbb111bbbbbbbbbb.
        .bbb1111bbbbbbbbbbbb
        ..b1111bbbbbbbbbbb..
        bb11111bbbbbbbbbbbb.
        .b1111bbbbbbbbbbbbbb
        ..111bbbbbbbbbbbbb..
        ...bb.bb.bb.bb.bb...
        ...b..b..b..b..b....
        `, -100, 0)
    sentientSawblade.vx += EnemySpeed
    tiles.placeOnTile(sentientSawblade, tiles.getTileLocation(9, 4))
    sentientSawblade.setFlag(SpriteFlag.AutoDestroy, true)
})
