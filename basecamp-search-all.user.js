// ==UserScript==
// @name           Basecamp - Search All
// @namespace      https://github.com/skratchdot/basecamp-search-all.user.js
// @description    A user script that displays a "search all projects" form in the header of BaseCamp pages. It only displays when logged in.
// @include        https://*.basecamphq.com/*
// ==/UserScript==

// Only add search form to our "settings" div
var settingsDiv = document.getElementById('settings_signout_and_help');
if( settingsDiv !== null ) {

	// Create Form
	var form = document.createElement('form');
	form.id = 'greasemonkey-searchall';
	form.style.clear = 'both';
	form.style.marginTop = '10px';
	form.setAttribute('action', '/search');
	form.setAttribute('method', 'get');

	// Create Global Input
	var global = document.createElement('input');
	global.setAttribute('type', 'hidden');
	global.setAttribute('name', 'global');
	global.setAttribute('value', 'true');
	form.appendChild(global);

	// Create Scope Input
	var scope = document.createElement('input');
	scope.setAttribute('type', 'hidden');
	scope.setAttribute('name', 'scope');
	scope.setAttribute('value', 'all');
	form.appendChild(scope);

	// Create Terms Input
	var terms = document.createElement('input');
	terms.setAttribute('type', 'text');
	terms.setAttribute('name', 'terms');
	terms.setAttribute('value', '');
	terms.setAttribute('placeholder', 'Search All Projects');
	form.appendChild(terms);

	// Create Submit Link
	var link = document.createElement('a');
	link.setAttribute('href', 'javascript:document.getElementById(\'greasemonkey-searchall\').submit();');
	link.innerHTML = 'search all';
	form.appendChild(link);

	// Append Form to "setting" div
	settingsDiv.appendChild(form);
}