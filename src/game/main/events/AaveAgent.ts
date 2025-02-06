import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'AAVE_AGENT', 
    hitbox: {
        width: 32,
        height: 16
    }
})
export default class VillagerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female')
    }
    async onAction(player: RpgPlayer) {
        await player.showText('Hi, I am an Aave Agent', {
            talkWith: this
        })
    }
} 