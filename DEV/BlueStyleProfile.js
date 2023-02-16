/*
	AMO CONSULTANCY - Custom Theme - 02/2023
*/

const KPI_TABLE_NAME = 'Table_PortalKPIs';
const HEADER_LOGO_VIEW_NAME = 'View_Header_Logo';
const HEADER_TRANSLATOR_VIEW_NAME = 'View_Header_Translator';

$(document).ready(function() {
    enableTheme();
    render();
});

enableTheme = () => {
    $('body').addClass('amo');
    $('form').addClass('amo');
    $('.runtime-content').addClass('amo');
    $('.runtime-form').addClass('amo');
}

render = () => {
    renderHeader();
    renderKPIs();
}

renderHeader = () => {    
	$('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').closest('.view').addClass('header-left');
	$('div[name="' + HEADER_TRANSLATOR_VIEW_NAME + '"]').closest('.view').addClass('header-right');
	$('div[name="' + HEADER_LOGO_VIEW_NAME + '"]').closest('.row').addClass('header');
	$('.header').insertBefore($('.runtime-content'));
}

renderKPIs = () => {
    $('div[name="' + KPI_TABLE_NAME + '"]').closest('.formcontrol').addClass('kpis');
}
