/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bananas10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bananas", "./Bananas10/costumes/bananas.svg", {
        x: 39,
        y: 38
      })
    ];

    this.sounds = [
      new Sound("Chomp", "./Bananas10/sounds/Chomp.wav"),
      new Sound("Bite", "./Bananas10/sounds/Bite.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.visible = false;
      if (this.stage.vars.score == 10) {
        this.visible = true;
      }
      if (this.touching(this.sprites["Giga"].andClones())) {
        yield* this.startSound("Bite");
        this.stage.vars.score += 1;
      }
      yield;
    }
  }
}