$(document).ready(function ()
{
    $("#filter").click(function (e) {
        if ($(this).hasClass('filter')) {
            $(this).removeClass('filter');
            $('.navbar,.wrapper').removeClass('filter');
            $('.refine-search').removeClass('active');
            $('.divider').removeClass('filter2');
            $('#search').removeClass('glyphicon-remove').addClass('glyphicon-search');
        }        else {
            $(this).addClass('filter');
            $('.navbar,.wrapper').addClass('filter');
            $('.refine-search').addClass('active');
            $('.divider').addClass('filter2');
            $('#search').removeClass('glyphicon-search').addClass('glyphicon-remove');
        }
        $("#home").click(function (e) {
            $('.navbar,.wrapper').removeClass('filter');
            $('.refine-search').removeClass('active');
        });
    });
});