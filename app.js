(function () {
	document.body.innerHTML = '';
	for (var i =0; i < 5; i++) {

		//creating div element
		var divElement = document.createElement('div');
		divElement.id = 'div-' + i;
		divElement.style.marginLeft = '50px'
		divElement.style.float = 'left';
		divElement.style.cursor = 'pointer';
		divElement.style.marginTop = '50px';

		//creating label cat´s name element
		var label = document.createElement('label');
		label.textContent = 'Cat Name ' + Number(i + 1);

		//creating image cat´s element
		var imageElement = document.createElement('img');
		imageElement.src = 'https://pbs.twimg.com/profile_images/602729491916435458/hSu0UjMC.jpg';

		//creating label clicks element
		var clicksElement = document.createElement('label');
		clicksElement.id = 'label-' + i;
		clicksElement.textContent = '0';		

		divElement.appendChild(label);
		divElement.innerHTML += '<br/>';
		divElement.appendChild(imageElement);
		divElement.innerHTML += '<br/>';
		divElement.appendChild(clicksElement);

		divElement.addEventListener('mouseover', (function (num){
			return function (){
				var e = document.getElementById('div-'+num);
				e.style.borderStyle = 'solid';
				e.style.borderWidth = '2px';
			}
		})(i));

		divElement.addEventListener('mouseout', (function (num){
			return function (){
				var e = document.getElementById('div-'+num);
				e.style.borderStyle = 'none';
			}
		})(i));

		//create the function from each div
		divElement.addEventListener('click', (function (num){
			return function (){
				var count = document.getElementById('label-'+num);
				count.innerText = Number(count.innerText) + 1;
			};
		})(i));

		document.body.appendChild(divElement); 
	}
})();