const BANNER_VIEW_NAME = 'BANNER';
const REQUEST_LIST_VIEW_NAME = 'VIEW_REQUEST_LIST';
const HEADER_VIEW_NAME = 'HEADER';

$(document).ready(function() {
    enableTheme();
    render();
});

enableTheme = () => {
    $('body').addClass('roullier');
    $('form').addClass('roullier');
    $('.runtime-content').addClass('roullier');
    $('.runtime-form').addClass('roullier');
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
