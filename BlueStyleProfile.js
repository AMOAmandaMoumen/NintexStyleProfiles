/*
	AMO CONSULTANCY - Custom Theme - 30/01/2023
	- JS that will render and apply classes needed for the css
*/

const HEADER_VIEW_NAME = 'VIEW_HEADER';
const HEADER_LOGO_VIEW_NAME = 'VIEW_HEADER_Logo';
const HEADER_TRANSLATION_VIEW_NAME = 'VIEW_HEADER_Translator';
const REQUEST_LIST_VIEW_NAME = 'VIEW_REQUEST_LIST';

$(document).ready(function() {
	enableTheme();
	render();
});

enableTheme = () => {
	$('body').addClass('amoconsultancy');
	$('form').addClass('amoconsultancy');
	$('.runtime-content').addClass('amoconsultancy');
	$('.runtime-form').addClass('amoconsultancy');
}

render = () => {
	renderHeader();
	renderListView();
}

renderHeader = () => {
    	$('div[name*="' + HEADER_VIEW_NAME + '"]').closest('.view').addClass('header');
    	$('div[name*="' + HEADER_VIEW_NAME + '"]').insertBefore(".tabs-top");
	$('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').closest('.view').addClass('logo');
	$('div[name="' + HEADER_TRANSLATION_VIEW_NAME + '"]').closest('.view').addClass('translator');
}

renderListView = () => {
    	$('div[name="' + REQUEST_LIST_VIEW_NAME + '"]').closest('.view').addClass('requests');
}
