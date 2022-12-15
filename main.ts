controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999c99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999cc999999c9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999ccc99999c999999999999c999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999ccccc9999cc9999999999ccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ccccccc999cc9999999999ccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999c9cccc999ccc999999999ccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999ccccc999cccc99999999cccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ccccccc999cc9999999999cccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999cccc9cc99ccc9999999cccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999cccccc999ccc999999999cccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999cc9ccccc99cccc9999999ccccc9cc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999cccccccccccc999999ccccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ccccccccccccccccccc99cccccc999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999c9999999999ccccccccccccccccccccc99cccccc9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999c999999999999999999
    999999999999ccc99999999999ccccccccccccccccccccccc99999999999999999999999999999999999999999999999999999999999999999999999999999999999999c9999cc999999999999999999
    999999999999cc9999999999cccccccccccccccccccccccccc9999999999999999999999999999999999c99999999999999999999999999999999999999999999999999cc999cc999999999999999999
    99999999999ccc999999999cccccccccccccccccccccccccccc999999999999999999999999999999999cc9999999999999999999999999999999999999999999999999cc99ccc999999999999999999
    9999999999ccccc999999ccccccccccccccccccccccccccccccc99999999999999999999999999999999cc99999999999999999999999999999999999999999999c999cccc9ccccc9999999999999999
    99999999999ccc99999cccccccccccccccccccccccccccccccccc999999999999999999999999999999cccc999999999999999999999999999999999999999999ccc99cccc99cc999999999999999999
    999999999999ccc999cccccccccccccccccccccccccccccccccccc99999999999999999999999999999cccc9999c9999999999999999999999999999999999999ccc999cc99cccccc999999999999999
    9999999999cccc99ccccccccccccccccccccccccccccccccccccccc999999999999999999999cc999999cc99999c999999999999999999999999999999999999cccc9ccccccccc999999999c99999999
    99999999999ccccccccccccccccccccccccccccccccccccccccccccc9999999999999999999ccc9999cccccc999cc9999999999999999999999999999999999999ccc9cccc999cc99999999c99999999
    999999999999ccccccccccccccccccccccccccccccccccccccccccccc99999999999999999cccc99999cccc9999cc999999999999999999999999999999999999ccc99ccccc99c99999999cccc999999
    999999999999cccccccccccccccccccccccccccccccccccccccccccccc999999999999999999ccc9999ccccc99ccc9999999999999c99999999999999999999ccccccccccccc9c999999999c99999999
    99999999999ccccccccccccccccccccccccccccccccccccccccccccccc9999999999999999cccccc9cccccccc9cccc99999999999cc999999999999999999999ccccccccccccccccc9999cccc9999999
    9999999999ccccccccccccccccccccccccccccccccccccccccccccccccc99999999999999cccccc9cccccccccc9cc999999999999ccc9999999999999c99999ccccc99ccccccccccccc999ccc9999999
    99999999cccccccccccccccccccccccccccccccccccccccccccccccccccc999999999999999cccccc99cccc9999ccc9999999999ccccc999999999999c9999cccccccccccccccccccccc99ccccc99999
    9999999cccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999cccccc99cccccc99ccc9999999999ccccccc99999999999cc99999cccccccccccccccccccccccccc999999
    999999cccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999999999ccccccccccccccccccccccc9999999c9cccc999999999999cc9999cccccccccccccccccccccccccc9999999
    99999cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999999ccccccccccccccccccccccc99999ccccc99999999999ccc9999cccccccccccccccccccccccccc9999999
    999ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999999999cccccccccccccccccccccccccc99ccccccc99999999999c9999cccccccccccccccccccccccccccc999999
    99ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999999cccccccccccccccccccccccccccccc9cccc9c9999999999cccc99cccccccccccccccccccccccccccccc9999
    9cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc99999ccccccccccccccccccccccccccccccccccccc999999999999cc99ccccccccccccccccccccccccccccccccc99
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc999ccccccccccccccccccccccccccccccccccccccc999999999ccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999cccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999999ccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999999ccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc9999cccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b6666666.bb66666666..66bbb66666666666666b6666666.bb66666666..66bbb66666666666666b6666666.bb66666666..66bbb66666666666666b6666666.bb66666666..66bbb666666666666
    66b666666..dbb666666dd.666bb66666666666666b666666...bb666666...666bb66666666666666b666666...bb666666...666bb66666666666666b666666...bb666666...666bb666666666666
    6bb666.66..66bbb6.666d..66bb6666666666666bb666.66..66bbb6.666d..66bb6666666666666bb666.66..66bbb6.666d..66bb6666666666666bb666.66..66bbb6.666d..66bb666666666666
    6bb666d.66.6d.bbb..66d..66bbb666666666666bb666d.66.6d.bbb..66d..66bbb666666666666bb666d.66.6d.bbb..66d..66bbb666666666666bb666d.66.6d.bbb..66d..66bbb66666666666
    6bb66dd....d..6bb..ddd.6666bb666666666666bb66dd....d..6bb..ddd.6666bb666666666666bb66dd....d..6bb..ddd.6666bb666666666666bb66dd....d..6bb..ddd.6666bb66666666666
    bbb666d....d..6bb..dd..66.dbbb66.6666666bbb666d....d..6bb..dd..66.dbbb66.6666666bbb666d....d..6bb..dd..66.dbbb66.6666666bbb666d....d..6bb..dd..66.dbbb66.6666666
    bbbdd6d....d...bbb.dd.....6bbb66...66666bbbdd6d....d...bbb.dd.....6bbb66...66666bbbdd6d....d...bbb.dd.....6bbb66...66666bbbdd6d....d...bbb.dd.....6bbb66...66666
    bbb6ddd....d....bb.dd....d6bbb.6..666666bbb6ddd....d....bb.dd....d6bbb.6..666666bbb6ddd....d....bb.dd....d6bbb.6..666666bbb6ddd....d....bb.dd....d6bbb.6..666666
    bbb6ddd...d.....bbbdd....d.bbb....66..66bbb6ddd...d.....bbbdd....d.bbb....66..66bbb6ddd...d.....bbbdd....d.bbb....66..66bbb6ddd...d.....bbbdd....d.bbb....66..66
    bbbdddd...d......bbdd....d.bbbb....d...6bbbdddd...d......bbdd....d.bbbb....d...6bbbdddd...d......bbdd....d.bbbb....d...6bbbdddd...d......bbdd....d.bbbb....d...6
    bb.dddd..dd.......bb....dd.bbbb....d....bb.dddd..dd.......bb....dd.bbbb....d....bb.dddd..dd.......bb....dd.bbbb....d....bb.dddd..dd.......bb....dd.bbbb....d....
    bb..ddddd.........bbb...d...bbb....d....bb..ddddd.........bbb...d...bbb....d....bb..ddddd.........bbb...d...bbb....d....bb..ddddd.........bbb...d...bbb....d....
    bb..dddd..........dbbbbdd...bbb....d...bbb..dddd..........dbbbbdd...bbb....d...bbb..dddd..........dbbbbdd...bbb....d...bbb..dddd..........dbbbbdd...bbb....d...b
    bb..ddd...........ddbbbb....bbbb...d...bbb..ddd...........ddbbbb....bbbb...d...bbb..ddd...........ddbbbb....bbbb...d...bbb..ddd...........ddbbbb....bbbb...d...b
    bb..ddd...........ddbbbbbb..bbbb...d...bbb..ddd...........ddbbbbbb..bbbb...d...bbb..ddd...........ddbbbbbb..bbbb...d...bbb..ddd...........ddbbbbbb..bbbb...d...b
    b....dd..........ddddbbbbbbbbbbbb...d..bb....dd..........ddddbbbbbbbbbbbb...d..bb....dd..........ddddbbbbbbbbbbbb...d..bb....dd..........ddddbbbbbbbbbbbb...d..b
    b....ddd.........dd.....bbbbbbbbb...d..bb....ddd.........dd.....bbbbbbbbb...d..bb....ddd.........dd.....bbbbbbbbb...d..bb....ddd.........dd.....bbbbbbbbb...d..b
    b....dddd........dd......bbbbbbbb...d.bbb....dddd........dd......bbbbbbbb...d.bbb....dddd........dd......bbbbbbbb...d.bbb....dddd........dd......bbbbbbbb...d.bb
    b....ddddd......ddd.......bbbbbbb...dbbbb....ddddd......ddd.......bbbbbbb...dbbbb....ddddd......ddd.......bbbbbbb...dbbbb....ddddd......ddd.......bbbbbbb...dbbb
    dd.....ddddd....ddd.........bbbbb...bbbbdd.....ddddd....ddd.........bbbbb...bbbbdd.....ddddd....ddd.........bbbbb...bbbbdd.....ddddd....ddd.........bbbbb...bbbb
    .d.....ddddddd.ddd..........bbbbb..bbbb..d.....ddddddd.ddd..........bbbbb..bbbb..d.....ddddddd.ddd..........bbbbb..bbbb..d.....ddddddd.ddd..........bbbbb..bbbb.
    .d......dddddddddd..........bbbbb..bbb...d......dddddddddd..........bbbbb..bbb...d......dddddddddd..........bbbbb..bbb...d......dddddddddd..........bbbbb..bbb..
    .d......ddddddddd...........bbbbb..bb....d......ddddddddd...........bbbbb..bb....d......ddddddddd...........bbbbb..bb....d......ddddddddd...........bbbbb..bb...
    .dd.....ddddddd.............bbbbb..bbd...dd.....ddddddd.............bbbbb..bbd...dd.....ddddddd.............bbbbb..bbd...dd.....ddddddd.............bbbbb..bbd..
    ..dd....dddddd..............bbbbb..bbd....dd....dddddd..............bbbbb..bbd....dd....dddddd..............bbbbb..bbd....dd....dddddd..............bbbbb..bbd..
    ..ddd...dddddd..............bbbbb.bbbdd...ddd...dddddd..............bbbbb.bbbdd...ddd...dddddd..............bbbbb.bbbdd...ddd...dddddd..............bbbbb.bbbdd.
    ....dddddddddd.............bbbbbb.bbb.d.....dddddddddd.............bbbbbb.bbb.d.....dddddddddd.............bbbbbb.bbb.d.....dddddddddd.............bbbbbb.bbb.d.
    ....dddddddddd.............bbbbbbbbb..d.....dddddddddd.............bbbbbbbbb..d.....dddddddddd.............bbbbbbbbb..d.....dddddddddd.............bbbbbbbbb..d.
    ......dddddddd.............bbbbbbbbb..dd......dddddddd.............bbbbbbbbb..dd......dddddddd.............bbbbbbbbb..dd......dddddddd.............bbbbbbbbb..dd
    d.......dddddd............bbbbbbbbb....dd.......dddddd............bbbbbbbbb....dd.......dddddd............bbbbbbbbb....dd.......dddddd............bbbbbbbbb....d
    dd.......ddddd............bbbbbbbbb.....dd.......ddddd............bbbbbbbbb.....dd.......ddddd............bbbbbbbbb.....dd.......ddddd............bbbbbbbbb.....
    dd.......ddddd............bbbbbbbb......dd.......ddddd............bbbbbbbb......dd.......ddddd............bbbbbbbb......dd.......ddddd............bbbbbbbb......
    .d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb......
    .d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb......
    .d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb......
    .d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb.......d.......ddddd...........bbbbbbbbb......
    .dd......ddddd...........bbbbbbbb........dd......ddddd...........bbbbbbbb........dd......ddddd...........bbbbbbbb........dd......ddddd...........bbbbbbbb.......
    .dd......ddddd...........bbbbbbbb........dd......ddddd...........bbbbbbbb........dd......ddddd...........bbbbbbbb........dd......ddddd...........bbbbbbbb.......
    ddd......ddddd...........bbbbbbbb.......ddd......ddddd...........bbbbbbbb.......ddd......ddddd...........bbbbbbbb.......ddd......ddddd...........bbbbbbbb.......
    dd.......ddddd...........bbbbbbbb.......dd.......ddddd...........bbbbbbbb.......dd.......ddddd...........bbbbbbbb.......dd.......ddddd...........bbbbbbbb.......
    dd.......dddddd..........bbbbbbbb.......dd.......dddddd..........bbbbbbbb.......dd.......dddddd..........bbbbbbbb.......dd.......dddddd..........bbbbbbbb.......
    dd.......dddddd..........bbbbbbbb.......dd.......dddddd..........bbbbbbbb.......dd.......dddddd..........bbbbbbbb.......dd.......dddddd..........bbbbbbbb.......
    dd.......dddddd..........bbbbbbb........dd.......dddddd..........bbbbbbb........dd.......dddddd..........bbbbbbb........dd.......dddddd..........bbbbbbb........
    d........dddddd..........bbbbbbb.......dd........dddddd..........bbbbbbb.......dd........dddddd..........bbbbbbb.......dd........dddddd..........bbbbbbb.......d
    d........dddddd..........bbbbbbb......ddd........dddddd..........bbbbbbb......ddd........dddddd..........bbbbbbb......ddd........dddddd..........bbbbbbb......dd
    d........dddddd..........bbbbbbb......ddd........dddddd..........bbbbbbb......ddd........dddddd..........bbbbbbb......ddd........dddddd..........bbbbbbb......dd
    .........ddddddd.........bbbbbbb.....ddd.........ddddddd.........bbbbbbb.....ddd.........ddddddd.........bbbbbbb.....ddd.........ddddddd.........bbbbbbb.....ddd
    .........ddddddd.........bbbbbbb.....ddd.........ddddddd.........bbbbbbb.....ddd.........ddddddd.........bbbbbbb.....ddd.........ddddddd.........bbbbbbb.....ddd
    .........ddddddd.........bbbbbbb.....ddd.........ddddddd.........bbbbbbb.....ddd.........ddddddd.........bbbbbbb.....ddd.........ddddddd.........bbbbbbb.....ddd
    .........dddddddd........bbbbbbb....dddd.........dddddddd........bbbbbbb....dddd.........dddddddd........bbbbbbb....dddd.........dddddddd........bbbbbbb....dddd
    .........dddddddd........bbbbbbb....dddd.........dddddddd........bbbbbbb....dddd.........dddddddd........bbbbbbb....dddd.........dddddddd........bbbbbbb....dddd
    .........dddddddd........bbbbbbb....ddd..........dddddddd........bbbbbbb....ddd..........dddddddd........bbbbbbb....ddd..........dddddddd........bbbbbbb....ddd.
    ..........dddddddd......bbbbbbbb....ddd...........dddddddd......bbbbbbbb....ddd...........dddddddd......bbbbbbbb....ddd...........dddddddd......bbbbbbbb....ddd.
    d.........dddddddd......bbbbbbbbddddddddd.........dddddddd......bbbbbbbbddddddddd.........dddddddd......bbbbbbbbddddddddd.........dddddddd......bbbbbbbbdddddddd
    ddddd.....dddddddd......bbbbbbbbbdddddddddddd.....dddddddd......bbbbbbbbbdddddddddddd.....dddddddd......bbbbbbbbbdddddddddddd.....dddddddd......bbbbbbbbbddddddd
    dddddddd..ddddddddd...ddbbbbbbbbbddddddddddddddd..ddddddddd...ddbbbbbbbbbddddddddddddddd..ddddddddd...ddbbbbbbbbbddddddddddddddd..ddddddddd...ddbbbbbbbbbddddddd
    ddddddddddddddddddd.ddddbbbbbbbbbdddddddddddddddddddddddddd.ddddbbbbbbbbbdddddddddddddddddddddddddd.ddddbbbbbbbbbdddddddddddddddddddddddddd.ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666667666666666666666766666666766666667666666766666666666666666676666666666666666666766666666666666666676666666666766666666666666666667666667666666666666
    6766766666666666766667666676666666666666766666666666666666667666666666666666666666766666666666676666666667666666666667666666666666666676666666666666666667666666
    dddddddddd7dddddddddddddddddddddddd7dddddddd7dddddddddd7dddddddddd7ddddddddddd7ddddddddd7dddddddddd7ddddddddddddd7ddddddddddddd7dddddddddddddddddddddddddddddddd
    ddddddddddddddddddddd7ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddeddddddddddddddddddddddddddddddddddddddddddd7dddddddddddeddd
    ddedddddddddddddddddeedddddddddddddddddddddddddddddddddddedddddddddddddddddddddddedddddddeeddddddddddedddddddddddddeedddddddddddeddddedddddddddddddddddddddddddd
    ddddddddddedddddddddeedddddddddddeddddddddddddddddddddddddddddddddedddddddddddddeddddddddeeddddddddddddddddddddddddeedddddddddddddddddeddddddddddeddddeddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddedddddddddddddddedddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
scroller.scrollBackgroundWithSpeed(-5, 0, scroller.BackgroundLayer.Layer0)
scroller.scrollBackgroundWithSpeed(-20, 0, scroller.BackgroundLayer.Layer1)
scroller.scrollBackgroundWithSpeed(-50, 0, scroller.BackgroundLayer.Layer2)
mySprite = sprites.create(img`
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 1 1 b b c c . 
    . . b 1 1 3 3 3 3 3 1 1 3 b c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 3 3 3 3 3 b c c c c b b f 
    . c 3 3 3 3 b b d d d c c c b f 
    c b 3 3 b b d d d d d d b c b f 
    c 3 3 c b d d d d d d c d b c . 
    f 3 c c c d d c d d d c d d c . 
    f b c c c d d d c d d d d d f . 
    f b c c c f f b d d b b b d f . 
    f f b b f b d d b d d d d c . . 
    . f f f f d d b b d d d c . . . 
    . . . . b b b b f b b f f . . . 
    . . . . . . . f f b b b f . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 1 1 b b c c . 
    . . b 1 1 3 3 3 3 3 1 1 3 b c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 3 3 3 3 3 b c c c c b b f 
    . c 3 3 3 3 b b d d d c c c b f 
    c b 3 3 b b d d d d d d b c b f 
    c 3 3 c b d d d d d d c d b c . 
    f 3 c c c d d c d d d c d d c . 
    f b c c c d d d c d d d d d f . 
    f b c c c f f b d d b b b d f . 
    f f b b f b d d b d d d d c . . 
    . f f f f d d b b d d d c . . . 
    . . . . b b b b f b b f f . . . 
    . . . . . . . f f b b b f . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 1 1 b b c c . 
    . . b 1 1 3 3 3 3 1 1 1 3 c c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 1 1 3 3 b b c c c c b b f 
    . c c 3 3 b b d d d d b c c b f 
    c b 3 3 b b d d d d d d d c b f 
    c 3 3 b b d d d d d d c d d c . 
    f 3 3 c b d d c d d d c d d c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d f f b b b b d f . 
    f f b b c c f b d d b d d c . . 
    . f f f c c f d d b b d c . . . 
    . . . . . . b b b b f c . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 3 1 1 b c c . 
    . . b 3 3 3 3 3 3 1 1 1 3 c c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 1 1 3 3 3 b c c c c b b f 
    . c c 3 3 3 b b d d d c c c b f 
    c b 3 3 b b d d d d d d b c b f 
    c 3 3 c b d d d d d d d d b c . 
    f 3 c c c d d d d d d c c d c . 
    f b c c c d d c c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c f f b d d d d d c . . 
    . f f f f d d b b d d d b f . . 
    . . . . f d d d b c c f f f . . 
    `,img`
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 1 1 b b c c . 
    . . b 1 1 3 3 3 3 3 1 1 3 3 c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 3 3 3 3 3 3 3 c c c b b f 
    . c 3 3 3 3 3 b b b b c c c b f 
    c 3 3 3 3 b b d d d d d c c b f 
    c 3 3 c b d d d d d d c d c c . 
    f 3 c c c d d c d d d c d b c . 
    f b c c c d d d c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c b d d d d d d d c . . 
    . f f f f b c c d d d d f f . . 
    . . f b d d b c c f f b b f f . 
    . . f d d d b . . f f b b b f . 
    `],
100,
true
)
mySprite.setPosition(12, 104)
mySprite.ay = 200
info.setScore(0)
let enemyList = [
sprites.builtin.forestScenery1,
sprites.builtin.forestScenery0,
sprites.builtin.forestMushroomPatch,
sprites.builtin.forestScenery2,
sprites.builtin.forestScenery3
]
game.onUpdateInterval(2000, function () {
    if (Math.percentChance(80)) {
        projectile = sprites.createProjectileFromSide(enemyList._pickRandom(), -50, 0)
        projectile.y = 104
    }
})
game.onUpdateInterval(100, function () {
    info.changeScoreBy(1)
})
