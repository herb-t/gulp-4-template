// 'use strict';

// var config = require('./config');

// console.log(config);

'use strict';

// -------------------------------------
//   if just using AnimationController,
//   index.js would just be.....
// -------------------------------------

// var AnimationController = require('./modules/AnimationController');

// var app = {

// 	start: function(){

// 		this.begin = new AnimationController();

// 		this.begin.play();

// 	}
// }

// app.start();

// -------------------------------------
//   end index.styl
// -------------------------------------




// // -------------------------------------
// //   AnimationControllerTwo - used with another module
// // -------------------------------------
// //   If using another mddule to use AnimationController,
// //   we'll call it ActivationController and rename AnimationControllerTwo
// //   we'll call ActivationController instead of just AnimationController
// // -------------------------------------

var ActivationController = require('./modules/ActivationController');

var app = {

	start: function(){

		this.begin = new ActivationController();
		this.begin.init();

		this.begin.play();

	}
}

app.start();

// // -------------------------------------
// //   end index.styl
// // -------------------------------------
