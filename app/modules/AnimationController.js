
'use strict';

var colors = require('../colors');
var TweenMax = require('TweenMax');

module.exports = function(){

	console.log('%c:: animation ::', colors.red);

	var elem = document.querySelector('img');

	this.introAnimation = function(){

		var tl = new TimelineMax({});

		TweenMax.set ([elem], { autoAlpha: 0 } );

		tl.to(elem, 1.2, {
		    autoAlpha: 0.25,
		    ease: 'Power2.easeInOut'
		});

		tl.to(elem, 1.2, {
		    autoAlpha: 1,
		    ease: 'Power2.easeInOut'
		}, '+= 1');

		return tl;

	};

	this.anotherAnimation = function(){

		var tl = new TimelineMax({});

		tl.to(elem, 1.2, {
		    top: 20,
		    ease: 'Power2.easeInOut'
		});

		tl.to(elem, 1.2, {
		    top: 200,
		    ease: 'Power2.easeInOut'
		});

		return tl

	};

	this.init = function(){

		this.tl = new TimelineMax({paused: true});

		this.tl.add(this.introAnimation())
			   .add(this.anotherAnimation());

		return this.tl;

	};

	this.play = function(){

		console.log('%c:: animation | play ::', colors.green);

		this.init();

		this.tl.play();

	};

};
