/* memcachejs - v1.0
 * http://github.com/gregavola/memcachejs
 *
 * Copyright (c) 2013 Greg Avola <gregory.avola@gmail.com>;
 * Licensed under the MIT license */

var memcachejs = {
	set: function(a,b, ttl) {
		// If you set the TTL, it will create new localSorage value with that time
		if (ttl) {
			var ts = Math.round((new Date()).getTime() / 1000);
			var index = a+"_time";
			var pT = parseInt(ts) + parseInt(ttl);
			// setting the localStorage value
			localStorage.setItem(index, pT);
		}

		// setting the localStorage value for the item you requested
		localStorage.setItem(a, b);
	},
	clear: function() {
		//clearing all localStorage values
		localStorage.clear();
	},
	remove: function(a) {
		// removing the LocalStorage Key
		localStorage.removeItem(a);
	},
	get: function(a) {
		// test so if the value is going to expire
		memcachejs.clean(a);

		// return the value
		return localStorage.getItem(a);
	},
	clean: function(a) {
		// get the timestamp of the key and when it is going to expire (only if it's there)
		if (localStorage.getItem(a+"_time")) {

			// get's the current timestamp
			var ts = Math.round((new Date()).getTime() / 1000);

			// get the expired Time
			var expiresTime =localStorage.getItem(a+"_time");

			// if the current time is greater than the expired time, remove the item

			if (parseFloat(ts) > parseFloat(expiresTime)) {
				localStorage.removeItem(a);
			}
		}
	}
}