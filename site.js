(function () {
	
	var model = {

		cats: [{
			name: 'Cat',
			clickCount: 0
		}, {
			name: 'Purr',
			clickCount: 0
		}, {
			name: 'Meowl',
			clickCount: 0
		}, {
			name: 'Sparkles',
			clickCount: 0
		}, {
			name: 'X',
			clickCount: 0
		}]
	};

	var octopus = {
		init: function () {
			view.init();			
		},
		hideAllCats: function () {
			for (var i = 0; i < 5; i++) {
				var catDiv = document.getElementById('cat-'+i);	
				catDiv.style.display = 'none';
			}			
		},
		showCat: function (num) {
			octopus.hideAllCats();
			var catDiv = document.getElementById('cat-'+num);	
			var catName = document.getElementById('cat-name-'+num);
			catName.textContent = model.cats[num].name;				
			catDiv.style.display = 'inline';
		}
	};

	var view = {
		init: function() {
			var buttons = document.getElementsByTagName('button');
			for (var i =0; i < 5; i++) {
				buttons[i].innerText = model.cats[i].name;
				console.log(buttons[i]);
				buttons[i].addEventListener('click', (function (num) {
					return function () {
						octopus.showCat(num);
					}					
				})(i), false);
				var catDiv = document.getElementById('cat-'+i);
				catDiv.addEventListener('click', (function (num) {
					return function () {
						var label = document.getElementById('cat-click-'+num);
						label.textContent = parseInt(label.textContent) + 1;
					}
				})(i));
			}
			octopus.hideAllCats();
		},

		render: function () {

		}

	};
	octopus.init();

})();