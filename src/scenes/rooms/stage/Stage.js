import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud_raft;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sun_puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud_beans;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud_fish;
        /** @type {Phaser.GameObjects.Sprite} */
        this.moon_pizza;
        /** @type {Phaser.GameObjects.Sprite} */
        this.wave_shark_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.wave_shark_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.costumes;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle_left;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_5;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_6;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_7;
        /** @type {Phaser.GameObjects.Sprite} */
        this.switchbox_8;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 840, 500),
            'costume_trunk': () => this.interface.loadWidget('ClothingCatalog')
        }
        this.music = '31'
        this.roomAnims = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-pack", "assets/media/rooms/stage/stage-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "stage", "bg");
        bg.setOrigin(0, 0);

        // window
        const window = this.add.image(1142.2, 336.5, "stage", "window");
        window.setOrigin(0.5, 0.875);

        // bush_5
        const bush_5 = this.add.image(949.5, 523.1, "stage", "bush_5");
        bush_5.setOrigin(0.25, 0.7);

        // bush_4
        const bush_4 = this.add.image(1163.3, 489.3, "stage", "bush_4");
        bush_4.setOrigin(0.15, 0.75);

        // bush_1
        const bush_1 = this.add.image(1048, 429.2, "stage", "bush_1");
        bush_1.setOrigin(0.5, 0.75);

        // bush_2
        const bush_2 = this.add.image(1063.6, 358.9, "stage", "bush_2");
        bush_2.setOrigin(0.5, 0.7);

        // bush_3
        const bush_3 = this.add.image(889.5, 353.6, "stage", "bush_3");
        bush_3.setOrigin(0.5, 0.7);

        // arch
        const arch = this.add.image(946.1, 307.4, "stage", "arch");
        arch.setOrigin(0.5, 0.87);

        // balcony
        const balcony = this.add.image(1114.6, 103.8, "stage", "balcony");
        balcony.setOrigin(0.5, -0.325);

        // railing
        const railing = this.add.image(1107.9, 400.5, "stage", "railing");
        railing.setOrigin(0.5, 3.75);

        // squid
        const squid = this.add.image(746.8, 490.1, "stage", "squid");
        squid.setOrigin(0.5, 0.3);

        // starfish
        const starfish = this.add.image(691.5, 399.3, "stage", "starfish");
        starfish.setOrigin(0.5, -0.15);

        // boat
        const boat = this.add.image(453.9, 317.8, "stage", "boat");
        boat.setOrigin(0.5, 0.775);

        // proscenium
        const proscenium = this.add.image(751.6, 497.8, "stage", "proscenium");
        proscenium.setOrigin(0.5, 0.9725);

        // light_bg_left
        const light_bg_left = this.add.image(473.4, 298.3, "stage", "light_bg_left");
        light_bg_left.setOrigin(0.6, 10.5);

        // light_bg_right
        const light_bg_right = this.add.image(1032.1, 298.3, "stage", "light_bg_right");
        light_bg_right.setOrigin(0.6, 10.5);

        // lights
        const lights = this.add.image(320.5, 474.7, "stage", "lights");
        lights.setOrigin(-0.16, 0.98);

        // chair_left_1
        const chair_left_1 = this.add.image(144.9, 774.3, "stage", "chair_left_1");
        chair_left_1.setOrigin(0, 0.8);

        // chair_left_2
        const chair_left_2 = this.add.image(230.5, 790.4, "stage", "chair_left_2");
        chair_left_2.setOrigin(0, 0.8);

        // chair_left_3
        const chair_left_3 = this.add.image(327, 813, "stage", "chair_left_3");
        chair_left_3.setOrigin(0, 0.85);

        // chair_left_4
        const chair_left_4 = this.add.image(430.1, 836, "stage", "chair_left_4");
        chair_left_4.setOrigin(0, 0.9);

        // chair_left_5
        const chair_left_5 = this.add.image(534.5, 842.9, "stage", "chair_left_5");
        chair_left_5.setOrigin(0, 0.8);

        // chair_left_6
        const chair_left_6 = this.add.image(95.2, 869, "stage", "chair_left_6");
        chair_left_6.setOrigin(0, 0.8);

        // chair_left_7
        const chair_left_7 = this.add.image(180, 891.7, "stage", "chair_left_7");
        chair_left_7.setOrigin(0, 0.8);

        // chair_left_8
        const chair_left_8 = this.add.image(286.1, 906.2, "stage", "chair_left_8");
        chair_left_8.setOrigin(0, 0.8);

        // chair_left_9
        const chair_left_9 = this.add.image(402.1, 917.7, "stage", "chair_left_9");
        chair_left_9.setOrigin(0, 0.8);

        // chair_left_10
        const chair_left_10 = this.add.image(506.5, 924.5, "stage", "chair_left_10");
        chair_left_10.setOrigin(0, 0.8);

        // cloud_raft
        const cloud_raft = this.add.sprite(388, 168, "stage", "cloud_raft_0001");
        cloud_raft.setOrigin(0.5, 0.675);

        // sun_puffle
        const sun_puffle = this.add.sprite(557.2, 147.7, "stage", "sun_puffle_0001");
        sun_puffle.setOrigin(0.5, 0.75);

        // cloud_beans
        const cloud_beans = this.add.sprite(702, 106, "stage", "cloud_beans_0001");
        cloud_beans.setOrigin(0.55, 0.665);

        // cloud_fish
        const cloud_fish = this.add.sprite(695, 170, "stage", "cloud_fish_0001");
        cloud_fish.setOrigin(0.4, 0.7);

        // moon_pizza
        const moon_pizza = this.add.sprite(945.2, 96.3, "stage", "moon_pizza_0001");
        moon_pizza.setOrigin(0.6, 0.65);

        // wave_shark_1
        const wave_shark_1 = this.add.sprite(520, 461, "stage", "wave_shark_1_0001");
        wave_shark_1.setOrigin(0.5, 0.6);

        // wave_shark_2
        const wave_shark_2 = this.add.sprite(496, 386.9, "stage", "wave_shark_2_0001");
        wave_shark_2.setOrigin(0.5, 0.6);

        // wave_shark_3_0001
        const wave_shark_3_0001 = this.add.image(362.1, 334.4, "stage", "wave_shark_3_0001");
        wave_shark_3_0001.setOrigin(0.5, 0.6);

        // wave_shark_4_0001
        const wave_shark_4_0001 = this.add.image(301.6, 457.7, "stage", "wave_shark_4_0001");
        wave_shark_4_0001.setOrigin(0.5, 0.6);

        // chair_right_1
        const chair_right_1 = this.add.image(1375.5, 775.2, "stage", "chair_right_1");
        chair_right_1.setOrigin(1, 0.8);

        // chair_right_2
        const chair_right_2 = this.add.image(1289.9, 791.3, "stage", "chair_right_2");
        chair_right_2.setOrigin(1, 0.8);

        // chair_right_3
        const chair_right_3 = this.add.image(1193.5, 813.9, "stage", "chair_right_3");
        chair_right_3.setOrigin(1, 0.85);

        // chair_right_4
        const chair_right_4 = this.add.image(1090.3, 836.9, "stage", "chair_right_4");
        chair_right_4.setOrigin(1, 0.9);

        // chair_right_5
        const chair_right_5 = this.add.image(985.9, 843.8, "stage", "chair_right_5");
        chair_right_5.setOrigin(1, 0.8);

        // chair_right_6
        const chair_right_6 = this.add.image(1425.2, 869.9, "stage", "chair_right_6");
        chair_right_6.setOrigin(1, 0.8);

        // chair_right_7
        const chair_right_7 = this.add.image(1340.4, 892.6, "stage", "chair_right_7");
        chair_right_7.setOrigin(1, 0.8);

        // chair_right_8
        const chair_right_8 = this.add.image(1234.3, 907.1, "stage", "chair_right_8");
        chair_right_8.setOrigin(1, 0.8);

        // chair_right_9
        const chair_right_9 = this.add.image(1118.3, 918.6, "stage", "chair_right_9");
        chair_right_9.setOrigin(1, 0.8);

        // chair_right_10
        const chair_right_10 = this.add.image(1013.9, 925.4, "stage", "chair_right_10");
        chair_right_10.setOrigin(1, 0.8);

        // piano
        const piano = this.add.image(743.5, 667.6, "stage", "piano");
        piano.setOrigin(0.5, 0.75);

        // music_1
        const music_1 = this.add.image(441.4, 663.1, "stage", "music_1");
        music_1.setOrigin(0.55, 0.75);

        // music_2
        const music_2 = this.add.image(531.7, 684.1, "stage", "music_2");
        music_2.setOrigin(0.55, 0.75);

        // music_3
        const music_3 = this.add.image(903.8, 694.9, "stage", "music_3");
        music_3.setOrigin(0.45, 0.75);

        // music_4
        const music_4 = this.add.image(1029.8, 673.2, "stage", "music_4");
        music_4.setOrigin(0.45, 0.75);

        // wall_left
        const wall_left = this.add.image(296, 556.7, "stage", "wall_left");
        wall_left.setOrigin(0.775, 0.7);

        // wall_right
        const wall_right = this.add.image(1210.9, 555.3, "stage", "wall_right");
        wall_right.setOrigin(0.225, 0.7);

        // pillar_right
        const pillar_right = this.add.image(1421.9, 870.9, "stage", "pillar_right");
        pillar_right.setOrigin(0.652, 0.925);

        // pillar_left
        const pillar_left = this.add.image(93.2, 871.9, "stage", "pillar_left");
        pillar_left.setOrigin(0.348, 0.925);

        // costumes
        const costumes = this.add.sprite(1270.4, 603.9, "stage", "costumes_0001");
        costumes.setOrigin(0.1, 0.5);

        // chair_balcony_right
        const chair_balcony_right = this.add.image(1350.5, 284.5, "stage", "chair_balcony_right");
        chair_balcony_right.setOrigin(0.371, 0.78);

        // chair_right
        const chair_right = this.add.image(1422.3, 308.8, "stage", "chair_right");
        chair_right.setOrigin(0.48, 0.5);

        // armrest_right
        const armrest_right = this.add.image(1441.5, 345.7, "stage", "armrest_right");
        armrest_right.setOrigin(0.5, 0.7);

        // railing_right
        const railing_right = this.add.image(1397, 714.8, "stage", "railing_right");
        railing_right.setOrigin(0.49, 3.425);

        // chair_balcony_left
        const chair_balcony_left = this.add.image(135.1, 282.4, "stage", "chair_balcony_left");
        chair_balcony_left.setOrigin(0.5, 0.76);

        // chair_left
        const chair_left = this.add.image(87.1, 308.8, "stage", "chair_left");

        // armrest_left
        const armrest_left = this.add.image(67.9, 345.7, "stage", "armrest_left");
        armrest_left.setOrigin(0.5, 0.7);

        // railing_left
        const railing_left = this.add.image(111.5, 714.8, "stage", "railing_left");
        railing_left.setOrigin(0.5, 3.4);

        // shadow_right
        const shadow_right = this.add.image(1431.5, 244.6, "stage", "shadow_right");

        // shadow_left
        const shadow_left = this.add.image(82.5, 244.6, "stage", "shadow_left");

        // wall_light
        const wall_light = this.add.image(73.81679314532195, 662.742366113968, "stage", "wall_light");
        wall_light.setOrigin(0.39511709688694907, 1.3408761053929446);

        // light_glow
        const light_glow = this.add.image(88.32919311523438, 642.8733520507812, "stage", "light_glow");
        light_glow.setOrigin(0.5698682671324484, 1.4889686859581086);

        // exit_glow
        const exit_glow = this.add.image(99.52920095661858, 639.5865378295883, "stage", "exit_glow");
        exit_glow.setOrigin(0.548144520208914, 2.6636864427931606);

        // door
        const door = this.add.image(135.6, 581.5, "stage", "door");
        door.setOrigin(0.62, 0.51);

        // puffle_left
        const puffle_left = this.add.sprite(125, 397, "stage", "puffle_left_0005");
        puffle_left.setOrigin(0.4609973898442763, 1.0116770999000901);
        puffle_left.visible = false;

        // costume_trunk
        const costume_trunk = this.add.sprite(1340, 1055, "stage", "costume_trunk");
        costume_trunk.setOrigin(0, 2);

        // switchbox3000
        const switchbox3000 = this.add.container(744.4885476817636, 857.0604983501916);

        // switchbox
        const switchbox = this.add.image(12.811440111205115, -4.460522764254051, "stage", "switchbox");
        switchbox.setOrigin(0.525, 0.58);
        switchbox3000.add(switchbox);

        // switchbox_1
        const switchbox_1 = this.add.sprite(-74.08852326770113, -45.96052276425405, "stage", "switchbox_1_0001");
        switchbox_1.setOrigin(0.7, 0.4);
        switchbox3000.add(switchbox_1);

        // switchbox_2
        const switchbox_2 = this.add.sprite(-53.688559888794885, -49.96052276425405, "stage", "switchbox_2_0001");
        switchbox_2.setOrigin(0.625, 0.34);
        switchbox3000.add(switchbox_2);

        // switchbox_3
        const switchbox_3 = this.add.sprite(51.311440111205115, -49.66047393612905, "stage", "switchbox_3_0001");
        switchbox_3.setOrigin(0.5, 0.35);
        switchbox3000.add(switchbox_3);

        // switchbox_4
        const switchbox_4 = this.add.sprite(74.91147673229887, -53.3604861431603, "stage", "switchbox_4_0001");
        switchbox_4.setOrigin(0.55, 0.3);
        switchbox3000.add(switchbox_4);

        // switchbox_5
        const switchbox_5 = this.add.sprite(97.31144011120512, -65.16047393612905, "stage", "switchbox_5_0001");
        switchbox_5.setOrigin(0.425, 0.325);
        switchbox3000.add(switchbox_5);

        // switchbox_6
        const switchbox_6 = this.add.sprite(-27.688559888794885, -70.56049835019155, "stage", "switchbox_6_0001");
        switchbox_6.setOrigin(0.3, -0.1);
        switchbox3000.add(switchbox_6);

        // switchbox_7
        const switchbox_7 = this.add.sprite(24.511452318236365, -60.96052276425405, "stage", "switchbox_7_0001");
        switchbox_7.setOrigin(0.8, 0.3);
        switchbox3000.add(switchbox_7);

        // switchbox_8
        const switchbox_8 = this.add.sprite(-4.3885720958261345, -45.3604861431603, "stage", "switchbox_8_0001");
        switchbox_8.setOrigin(0.5, -0.25);
        switchbox3000.add(switchbox_8);

        // lists
        const sort = [window, bush_5, bush_4, bush_2, bush_1, bush_3, arch, balcony, railing, squid, starfish, boat, proscenium, light_bg_left, light_bg_right, lights, chair_left_1, chair_left_2, chair_left_3, chair_left_4, chair_left_5, chair_left_6, chair_left_7, chair_left_8, chair_left_9, chair_left_10, cloud_raft, sun_puffle, cloud_beans, cloud_fish, moon_pizza, wave_shark_4_0001, wave_shark_3_0001, wave_shark_2, wave_shark_1, chair_right_1, chair_right_2, chair_right_3, chair_right_4, chair_right_5, chair_right_6, chair_right_7, chair_right_8, chair_right_9, chair_right_10, piano, music_1, music_2, music_3, music_4, wall_left, wall_right, pillar_right, pillar_left, bg, costumes, chair_balcony_right, chair_right, armrest_right, railing_right, chair_balcony_left, chair_left, armrest_left, railing_left, shadow_right, shadow_left, wall_light, light_glow, exit_glow, door, puffle_left, costume_trunk, switchbox3000];

        // costumes (components)
        const costumesSimpleButton = new SimpleButton(costumes);
        costumesSimpleButton.hoverCallback = () => this.onCostumesOver();
        costumesSimpleButton.hoverOutCallback = () => this.onCostumesOut();
        costumesSimpleButton.callback = () => this.interface.loadWidget('CostumeTrunk');

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 135;
        doorMoveTo.y = 630;

        // puffle_left (components)
        const puffle_leftAnimation = new Animation(puffle_left);
        puffle_leftAnimation.key = "puffle_left_";
        puffle_leftAnimation.start = 5;
        puffle_leftAnimation.end = 80;
        puffle_leftAnimation.repeat = 0;
        puffle_leftAnimation.autoPlay = false;

        // costume_trunk (components)
        const costume_trunkButton = new Button(costume_trunk);
        costume_trunkButton.spriteName = "costume_trunk";
        costume_trunkButton.callback = () => this.interface.loadWidget('CostumeTrunk');
        costume_trunkButton.activeFrame = false;
        costume_trunkButton.pixelPerfect = true;

        // switchbox_1 (components)
        const switchbox_1Animation = new Animation(switchbox_1);
        switchbox_1Animation.key = "switchbox_1_";
        switchbox_1Animation.end = 18;
        switchbox_1Animation.repeat = 0;
        switchbox_1Animation.autoPlay = false;
        switchbox_1Animation.showOnStart = true;
        const switchbox_1SimpleButton = new SimpleButton(switchbox_1);
        switchbox_1SimpleButton.callback = () => this.onSwitchbox1();

        // switchbox_2 (components)
        const switchbox_2Animation = new Animation(switchbox_2);
        switchbox_2Animation.key = "switchbox_2_";
        switchbox_2Animation.end = 13;
        switchbox_2Animation.repeat = 0;
        switchbox_2Animation.autoPlay = false;
        switchbox_2Animation.showOnStart = true;
        const switchbox_2SimpleButton = new SimpleButton(switchbox_2);
        switchbox_2SimpleButton.callback = () => this.onSwitchbox2();

        // switchbox_3 (components)
        const switchbox_3Animation = new Animation(switchbox_3);
        switchbox_3Animation.key = "switchbox_3_";
        switchbox_3Animation.end = 13;
        switchbox_3Animation.repeat = 0;
        switchbox_3Animation.autoPlay = false;
        switchbox_3Animation.showOnStart = true;
        const switchbox_3SimpleButton = new SimpleButton(switchbox_3);
        switchbox_3SimpleButton.callback = () => this.onSwitchbox3();

        // switchbox_4 (components)
        const switchbox_4Animation = new Animation(switchbox_4);
        switchbox_4Animation.key = "switchbox_4_";
        switchbox_4Animation.end = 14;
        switchbox_4Animation.repeat = 0;
        switchbox_4Animation.autoPlay = false;
        switchbox_4Animation.showOnStart = true;
        const switchbox_4SimpleButton = new SimpleButton(switchbox_4);
        switchbox_4SimpleButton.callback = () => this.onSwitchbox4();

        // switchbox_5 (components)
        const switchbox_5Animation = new Animation(switchbox_5);
        switchbox_5Animation.key = "switchbox_5_";
        switchbox_5Animation.end = 11;
        switchbox_5Animation.repeat = 0;
        switchbox_5Animation.autoPlay = false;
        switchbox_5Animation.showOnStart = true;
        const switchbox_5SimpleButton = new SimpleButton(switchbox_5);
        switchbox_5SimpleButton.callback = () => this.onSwitchbox5();
        switchbox_5SimpleButton.pixelPerfect = true;

        // switchbox_6 (components)
        const switchbox_6Animation = new Animation(switchbox_6);
        switchbox_6Animation.key = "switchbox_6_";
        switchbox_6Animation.end = 11;
        switchbox_6Animation.repeat = 0;
        switchbox_6Animation.autoPlay = false;
        switchbox_6Animation.showOnStart = true;
        const switchbox_6SimpleButton = new SimpleButton(switchbox_6);
        switchbox_6SimpleButton.callback = () => this.onSwitchbox6();

        // switchbox_7 (components)
        const switchbox_7Animation = new Animation(switchbox_7);
        switchbox_7Animation.key = "switchbox_7_";
        switchbox_7Animation.end = 11;
        switchbox_7Animation.repeat = 0;
        switchbox_7Animation.autoPlay = false;
        switchbox_7Animation.showOnStart = true;
        const switchbox_7SimpleButton = new SimpleButton(switchbox_7);
        switchbox_7SimpleButton.callback = () => this.onSwitchbox7();

        // switchbox_8 (components)
        const switchbox_8Animation = new Animation(switchbox_8);
        switchbox_8Animation.key = "switchbox_8_";
        switchbox_8Animation.end = 11;
        switchbox_8Animation.repeat = 0;
        switchbox_8Animation.autoPlay = false;
        switchbox_8Animation.showOnStart = true;
        const switchbox_8SimpleButton = new SimpleButton(switchbox_8);
        switchbox_8SimpleButton.callback = () => this.onSwitchbox8();

        this.cloud_raft = cloud_raft;
        this.sun_puffle = sun_puffle;
        this.cloud_beans = cloud_beans;
        this.cloud_fish = cloud_fish;
        this.moon_pizza = moon_pizza;
        this.wave_shark_1 = wave_shark_1;
        this.wave_shark_2 = wave_shark_2;
        this.costumes = costumes;
        this.puffle_left = puffle_left;
        this.switchbox_1 = switchbox_1;
        this.switchbox_2 = switchbox_2;
        this.switchbox_3 = switchbox_3;
        this.switchbox_4 = switchbox_4;
        this.switchbox_5 = switchbox_5;
        this.switchbox_6 = switchbox_6;
        this.switchbox_7 = switchbox_7;
        this.switchbox_8 = switchbox_8;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onCostumesOver() {
        this.costumes.play('costumes_open')
    }

    onCostumesOut() {
        this.costumes.play('costumes_close')
    }

    onSwitchbox1() {
        this.switchbox_1.__Animation.play()
        let frame = this.cloud_raft.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0066':
                this.cloud_raft.play('cloudToRaft')
                break
            case '0033':
                this.cloud_raft.play('raftToCloud')
                break
            default:
                break
        }
    }

    onSwitchbox2() {
        this.switchbox_2.__Animation.play()
        let frame = this.sun_puffle.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0068':
                this.sun_puffle.play('sunToPuffle')
                break
            case '0034':
                this.sun_puffle.play('puffleToSun')
                break
            default:
                break
        }
    }

    onSwitchbox3() {
        this.switchbox_3.__Animation.play()
        let frame = this.cloud_fish.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0070':
                this.cloud_fish.play('cloudToFish')
                break
            case '0035':
                this.cloud_fish.play('fishToCloud')
                break
            default:
                break
        }
    }

    onSwitchbox4() {
        this.switchbox_4.__Animation.play()
        let frame = this.moon_pizza.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0070':
                this.moon_pizza.play('moonToPizza')
                break
            case '0035':
                this.moon_pizza.play('pizzaToMoon')
                break
            default:
                break
        }
    }

    onSwitchbox5() {
        this.puffle_left.visible = true;
        this.switchbox_5.__Animation.play()
        this.puffle_left.__Animation.play()
    }

    onSwitchbox6() {
        this.switchbox_6.__Animation.play()
        let frame = this.wave_shark_2.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
                this.wave_shark_2.play('waveToShark2')
                break
            case '0002':
                this.wave_shark_2.play('sharkToWave2')
                break
            default:
                break
        }
    }

    onSwitchbox7() {
        this.switchbox_7.__Animation.play()
        let frame = this.cloud_beans.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0068':
                this.cloud_beans.play('cloudToBeans')
                break
            case '0034':
                this.cloud_beans.play('beansToCloud')
                break
            default:
                break
        }
    }

    onSwitchbox8() {
        this.switchbox_8.__Animation.play()
        let frame = this.wave_shark_1.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
                this.wave_shark_1.play('waveToShark1')
                break
            case '0002':
                this.wave_shark_1.play('sharkToWave1')
                break
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
