memcachejs
==========

A simple way to create expiring localStorage key/value pairs, similar to memcache for other languages

# Requirements
A browser that that enables localStorage (not the IE browsers do not allow LocalStorage from the file:// protocol)<br />


# Getting Started
<pre>memcachejs</pre> was written to have no dependancies, and very simple. You a few methods:<br />

To save a key/value pair using <pre>memcachejs</pre>, just type the following code:
<pre>
memcachejs.set("key", "value", 4000);
</pre>

The <pre>4000</pre> is the time in *seconds* that you want to the localStoage to be expired.<br />

To retrieve the value again, you can do this:<br />

<pre>
if (memcachejs.get("key"))) {
	// we got something, and it hasn't expired
}
else {
	// nothing is retrieved, the cache has expired or nothing was set there
}
</pre>

That's it! Enjoy using memcachejs to creare expriing localStorage key/values pairs.<br />

# Questions
I'm happy to answer questions you may have about this over Twitter @<a href="http://twitter.com/gregavola">gregavola</a>.