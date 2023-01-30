/*
    AMO CONSULTANCY - Custom theme - 30/01/2023
    - JS that will render and apply classes needed for the css
*/

const HEADER_VIEW_NAME = 'VIEW_TOP_BANNER';
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
    $('div[name="' + HEADER_VIEW_NAME + '"]').closest('.view').addClass('header');
    $('div[name*="' + HEADER_VIEW_NAME + '"]').insertBefore(".tabs-top");
}

renderListView = () => {
    $('div[name="' + REQUEST_LIST_VIEW_NAME + '"]').closest('.view').addClass('requests');
}
