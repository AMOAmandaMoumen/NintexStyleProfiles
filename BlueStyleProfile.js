/*
	AMO CONSULTANCY - Custom Theme - 01/2023
$('[name*="VIEW_HEADER"]').insertBefore(".runtime-form");
*/

$('body').addClass('amoconsultancy');
$('form').addClass('amoconsultancy');
$('.runtime-content').addClass('amoconsultancy');
$('.runtime-form').addClass('amoconsultancy');
$('[name*="VIEW_HEADER"]').closest('.tabs-top').addClass('tabsinheader');
$('[name*="NO_BORDER"]').closest('.innerpanel').addClass('noborder');

$('[name*="VIEW_HEADER"]').closest('.view').insertBefore('[name*="form1"]');
