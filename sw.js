self.addEventListener('install',function(e) {
	e.waitUntil(
		caches.open('Cars99').then(function(cache){
			return cache.addAll([
				'/',
				'index.html',
				'bootstrap4/css/bootstrap.min.css',
				'bootstrap4/font/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css',
				'images/cars/andrew-pons-113427-unsplash.jpg',
				'bootstrap4/js/popper.js',
				'bootstrap4/js/jquery-3.2.1.min.js',
				'bootstrap4/js/bootstrap.min.js',
				'AngularJS/angular.js',
				'bootstrap4/angular-route/angular-route.min.js',
				]);
		})
	);
})

self.addEventListener('fetch',function (event) {
	
	console.log(event.request.url);
	
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
		);
});