(() => { 
	console.log("connected");

	var iconSet = document.querySelectorAll('svg');

		function logThisIcon() {
			console.log('clicked on this icon', this.id);

			this.style.opacity = 0.5;
		}


	iconSet.forEach(icon => icon.addEventListener('click', logThisIcon));
}) ();
