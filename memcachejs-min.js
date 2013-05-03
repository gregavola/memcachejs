/*!memcachejs - v1.0
 * http://github.com/gregavola/memcachejs
 *
 * Copyright (c) 2013 Greg Avola <gregory.avola@gmail.com>;
 * Licensed under the MIT license */
 
var memcachejs={set:function(e,t,n){if(n){var r=Math.round((new Date).getTime()/1e3);var i=e+"_time";var s=parseInt(r)+parseInt(n);localStorage.setItem(i,s)}localStorage.setItem(e,t)},clear:function(){localStorage.clear()},remove:function(e){localStorage.removeItem(e)},get:function(e){memcachejs.clean(e);return localStorage.getItem(e)},clean:function(e){if(localStorage.getItem(e+"_time")){var t=Math.round((new Date).getTime()/1e3);var n=localStorage.getItem(e+"_time");if(parseFloat(t)>parseFloat(n)){localStorage.removeItem(e)}}}}