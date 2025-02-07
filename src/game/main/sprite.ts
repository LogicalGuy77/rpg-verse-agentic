import { RpgSprite, type RpgSpriteHooks } from '@rpgjs/client'

const sprite: RpgSpriteHooks = {
    onInit(sprite: RpgSprite) {
        sprite.eventMode = 'static'
        sprite.on('click', () => {
            sprite.guiDisplay = !sprite.guiDisplay
        })
    }
}

export default sprite