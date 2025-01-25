import BookContainer from '@scenes/interface/books/BookContainer'

import { Button, Interactive, SimpleButton, Zone } from '@components/components'

import Tag1 from './buttons/Tag1'
import Tag2 from './buttons/Tag2'


export const preload = {
    key: 'clothingcatalog-pack',
    url: 'assets/media/interface/catalogs/costume/costume-pack.json',
    loadString: ['loading', 'clothingcatalog']
}

/* START OF COMPILED CODE */

export default class CostumeTrunk extends BookContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.megaphone;
        /** @type {Phaser.GameObjects.Container} */
        this.secret_container;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // page5
        const page5 = scene.add.container(0, 1);
        page5.visible = false;
        this.add(page5);

        // back
        const back = scene.add.image(0, 0, "costume", "back");
        back.setOrigin(0, 0);
        page5.add(back);

        // close_back
        const close_back = scene.add.image(1029, 85, "costume", "close");
        page5.add(close_back);

        // left_back
        const left_back = scene.add.image(492, 590, "costume", "left");
        left_back.setOrigin(0, 0);
        page5.add(left_back);

        // page4
        const page4 = scene.add.container(0, 1);
        page4.visible = false;
        this.add(page4);

        // page_3
        const page_3 = scene.add.image(0, 0, "costume", "3");
        page_3.setOrigin(0, 0);
        page4.add(page_3);

        // bard
        const bard = scene.add.image(308, 644, "costume", "bard");
        page4.add(bard);

        // feather
        const feather = scene.add.image(497, 416, "costume", "feather");
        page4.add(feather);

        // director
        const director = scene.add.image(1038, 301, "costume", "director");
        page4.add(director);

        // megaphone
        const megaphone = scene.add.image(898, 422, "costume", "megaphone");
        page4.add(megaphone);

        // secret_container
        const secret_container = scene.add.container(653, 210);
        secret_container.visible = false;
        page4.add(secret_container);

        // secret
        const secret = scene.add.image(94, 218, "costume", "secret");
        secret_container.add(secret);

        // ruffle
        const ruffle = scene.add.image(22, 329, "costume", "ruffle");
        secret_container.add(ruffle);

        // close_secret
        const close_secret = scene.add.image(293, -17, "costume", "close_secret");
        secret_container.add(close_secret);

        // secretZone
        const secretZone = scene.add.rectangle(858, 159, 114.65, 70);
        secretZone.alpha = 0.5;
        secretZone.isFilled = true;
        secretZone.fillColor = 65280;
        page4.add(secretZone);

        // page3
        const page3 = scene.add.container(0, 0);
        page3.visible = false;
        this.add(page3);

        // page_2
        const page_2 = scene.add.image(0, 0, "costume", "2");
        page_2.setOrigin(0, 0);
        page3.add(page_2);

        // feet
        const feet = scene.add.image(1185, 677, "costume", "feet");
        page3.add(feet);

        // fish
        const fish = scene.add.image(998, 230, "costume", "fish");
        page3.add(fish);

        // jester
        const jester = scene.add.image(431, 581, "costume", "jester");
        page3.add(jester);

        // jester_hat
        const jester_hat = scene.add.image(599, 270, "costume", "jester_hat");
        page3.add(jester_hat);

        // page2
        const page2 = scene.add.container(0, 1);
        page2.visible = false;
        this.add(page2);

        // page_1
        const page_1 = scene.add.image(0, 0, "costume", "1");
        page_1.setOrigin(0, 0);
        page2.add(page_1);

        // dress
        const dress = scene.add.image(1006, 489, "costume", "dress");
        page2.add(dress);

        // hat
        const hat = scene.add.image(1149, 195, "costume", "hat");
        page2.add(hat);

        // page1
        const page1 = scene.add.container(0, 0);
        this.add(page1);

        // cover_new
        const cover_new = scene.add.image(0, 1, "costume", "cover_new");
        cover_new.setOrigin(0, 0.05);
        page1.add(cover_new);

        // close_front
        const close_front = scene.add.image(1030, 80, "costume", "close");
        page1.add(close_front);

        // right_front
        const right_front = scene.add.image(1002, 699, "costume", "right");
        page1.add(right_front);

        // buttons
        const buttons = scene.add.container(140, 41);
        buttons.visible = false;
        this.add(buttons);

        // coins
        const coins = scene.add.text(1179.3806244260172, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // left
        const left = scene.add.image(0, 549, "costume", "left");
        left.setOrigin(0, 0);
        buttons.add(left);

        // right
        const right = scene.add.image(1114, 549, "costume", "right");
        right.setOrigin(0, 0);
        buttons.add(right);

        // close
        const close = scene.add.image(1175, 15, "costume", "close");
        close.setOrigin(0, 0);
        buttons.add(close);

        // lists
        const pages = [page1, page2, page3, page4, page5];

        // block (components)
        new Interactive(block);

        // close_back (components)
        const close_backButton = new Button(close_back);
        close_backButton.spriteName = "close";
        close_backButton.callback = () => this.close();
        close_backButton.pixelPerfect = true;

        // left_back (components)
        const left_backButton = new Button(left_back);
        left_backButton.spriteName = "left";
        left_backButton.callback = () => this.prevPage();
        left_backButton.activeFrame = false;

        // bard (components)
        const bardButton = new Button(bard);
        bardButton.spriteName = "bard";
        bardButton.callback = () => this.interface.prompt.showItem(761);
        bardButton.pixelPerfect = true;

        // feather (components)
        const featherButton = new Button(feather);
        featherButton.spriteName = "feather";
        featherButton.callback = () => this.interface.prompt.showItem(476);
        featherButton.pixelPerfect = true;

        // director (components)
        const directorButton = new Button(director);
        directorButton.spriteName = "director";
        directorButton.callback = () => this.interface.prompt.showItem(489);
        directorButton.pixelPerfect = true;

        // megaphone (components)
        const megaphoneButton = new Button(megaphone);
        megaphoneButton.spriteName = "megaphone";
        megaphoneButton.callback = () => this.interface.prompt.showItem(5580);
        megaphoneButton.pixelPerfect = true;

        // ruffle (components)
        const ruffleButton = new Button(ruffle);
        ruffleButton.spriteName = "ruffle";
        ruffleButton.callback = () => this.interface.prompt.showItem(186);
        ruffleButton.pixelPerfect = true;

        // close_secret (components)
        const close_secretButton = new Button(close_secret);
        close_secretButton.spriteName = "close_secret";
        close_secretButton.callback = () => this.closeSecret();
        close_secretButton.activeFrame = false;

        // secretZone (components)
        const secretZoneZone = new Zone(secretZone);
        secretZoneZone.callback = () => this.openSecret();

        // feet (components)
        const feetButton = new Button(feet);
        feetButton.spriteName = "feet";
        feetButton.callback = () => this.interface.prompt.showItem(367);
        feetButton.pixelPerfect = true;

        // fish (components)
        const fishButton = new Button(fish);
        fishButton.spriteName = "fish";
        fishButton.callback = () => this.interface.prompt.showItem(763);
        fishButton.pixelPerfect = true;

        // jester (components)
        const jesterButton = new Button(jester);
        jesterButton.spriteName = "jester";
        jesterButton.callback = () => this.interface.prompt.showItem(762);
        jesterButton.pixelPerfect = true;

        // jester_hat (components)
        const jester_hatButton = new Button(jester_hat);
        jester_hatButton.spriteName = "jester_hat";
        jester_hatButton.callback = () => this.interface.prompt.showItem(477);
        jester_hatButton.pixelPerfect = true;

        // dress (components)
        const dressButton = new Button(dress);
        dressButton.spriteName = "dress";
        dressButton.callback = () => this.interface.prompt.showItem(760);
        dressButton.pixelPerfect = true;

        // hat (components)
        const hatButton = new Button(hat);
        hatButton.spriteName = "hat";
        hatButton.callback = () => this.interface.prompt.showItem(475);
        hatButton.pixelPerfect = true;

        // close_front (components)
        const close_frontButton = new Button(close_front);
        close_frontButton.spriteName = "close";
        close_frontButton.callback = () => this.close();
        close_frontButton.pixelPerfect = true;

        // right_front (components)
        const right_frontButton = new Button(right_front);
        right_frontButton.spriteName = "right";
        right_frontButton.callback = () => this.nextPage();
        right_frontButton.activeFrame = false;

        // left (components)
        const leftButton = new Button(left);
        leftButton.spriteName = "left";
        leftButton.callback = () => this.prevPage();
        leftButton.activeFrame = false;
        leftButton.pixelPerfect = true;

        // right (components)
        const rightButton = new Button(right);
        rightButton.spriteName = "right";
        rightButton.callback = () => this.nextPage();
        rightButton.activeFrame = false;
        rightButton.pixelPerfect = true;

        // close (components)
        const closeButton = new Button(close);
        closeButton.spriteName = "close";
        closeButton.callback = () => this.close();
        closeButton.pixelPerfect = true;

        this.megaphone = megaphone;
        this.secret_container = secret_container;
        this.coins = coins;
        this.buttons = buttons;
        this.pages = pages;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    openSecret() {
        this.secret_container.visible = true
    }
    closeSecret() {
        this.secret_container.visible = false
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
