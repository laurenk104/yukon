import BaseScene from '@scenes/base/BaseScene'

import ClientController from './penguin/client/ClientController'
import PenguinFactory from './penguin/PenguinFactory'
import RoomFactory from './room/RoomFactory'


export default class WorldController extends BaseScene {

    constructor(key) {
        super(key)

        this.client = null
        this.room = null
    }

    create() {
        this.scene.launch('InterfaceController')

        this.penguinFactory = new PenguinFactory(this)
        this.roomFactory = new RoomFactory(this)
    }

    setClient(args) {
        this.client = new ClientController(args)
    }

    joinRoom(id, users) {
        if (this.room) this.room.scene.stop()

        this.room = this.roomFactory.createRoom(id)
        this.room.penguins = this.penguinFactory.createPenguins(users, this.room)
    }

    addPenguin(user) {
        let penguin = this.penguinFactory.createPenguin(user, this.room)

        this.room.addPenguin(user.id, penguin)
    }

    removePenguin(id) {
        this.room.removePenguin(id)
    }

}