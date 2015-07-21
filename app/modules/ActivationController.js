
'use strict';

var colors = require('../colors');
var AnimationControllerTwo = require('./AnimationControllerTwo');

module.exports = function(){

	console.log('%c:: activation ::', colors.green);

	this.init = function(){

		console.log('%c:: activation init ::', colors.purple);

		this.animate = new AnimationControllerTwo();

	}

	this.play = function(animate){

		console.log('%c:: activation play ::', colors.yellow);

		this.animate.init();

		this.animate.tl.play();

	}

};