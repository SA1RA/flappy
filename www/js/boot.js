// Flappy.boot state

'use strict';

var Flappy = { };

Flappy.Boot = function () {};

function Boot() {};

Flappy.Boot.prototype = {

  init: function () {
    console.log("%c~~ Ramming speed ~~~\n",
                "color:rgba(255,0,0);");
  },

  preload: function () {
  },

  create: function () {
    this.game.stage.backgroundColor = "#FF0000";
  }

};
