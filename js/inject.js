function injectScript(file) {
	var s = document.createElement( "script" );
	s.src = chrome.extension.getURL( file );
	s.async = false;
	document.documentElement.appendChild( s );
}
injectScript( 'js/getTeeTime.js' );
