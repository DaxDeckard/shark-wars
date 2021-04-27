controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Fynn_The_Shark,
    assets.animation`attack_right`,
    100,
    false
    )
    projectile2 = sprites.createProjectileFromSprite(assets.image`fireball_right`, Fynn_The_Shark, 50, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Fynn_The_Shark,
    assets.animation`attack_left`,
    100,
    false
    )
    projectile = sprites.createProjectileFromSprite(assets.image`fireball_left`, Fynn_The_Shark, -50, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Fynn_The_Shark,
    assets.animation`move_left`,
    100,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Fynn_The_Shark,
    assets.animation`move_right`,
    100,
    true
    )
})
let projectile: Sprite = null
let projectile2: Sprite = null
let Fynn_The_Shark: Sprite = null
Fynn_The_Shark = sprites.create(assets.image`Fynn_the_shark`, SpriteKind.Player)
controller.moveSprite(Fynn_The_Shark)
scene.setBackgroundColor(8)
