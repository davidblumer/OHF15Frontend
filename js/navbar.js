$(document).ready(function ()
{
    $("#filter").click(function (e) {
        if ($(this).hasClass('filter')) {
            $(this).removeClass('filter');
            $('.navbar,.wrapper').removeClass('filter');
            $('.refine-search').removeClass('active');
            $('.filter-divider').removeClass('active');
            $('.divider').removeClass('filter2');
            $('#search').removeClass('glyphicon-remove').addClass('glyphicon-search');
        }        else {
            $(this).addClass('filter');
            $('.navbar,.wrapper').addClass('filter');
            $('.refine-search').addClass('active');
            $('.filter-divider').addClass('active');
            $('.divider').addClass('filter2');
            $('#search').removeClass('glyphicon-search').addClass('glyphicon-remove');
        }
        $("#home").click(function () {
            $('.navbar,.wrapper').removeClass('filter');
            $('.refine-search').removeClass('active');
            $('#search').removeClass('glyphicon-remove').addClass('glyphicon-search');
            $('.divider').removeClass('filter2');
        });
    });
});