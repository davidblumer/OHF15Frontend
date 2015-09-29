$(document).ready(function ()
{
    $("#filter").click(function (e) {
        if ($(this).hasClass('filter')) {
            $(this).removeClass('filter');
            $('.navbar').removeClass('filter');
            $('.wrapper,.brand').removeClass('filter-wrapper');
            $('.refine-search').removeClass('active');
            $('.filter-divider').removeClass('active');
            $('.divider').removeClass('filter2');
//            $('#search').removeClass('glyphicon-remove').addClass('glyphicon-search');
            $('#search').removeClass('rotate');
            $('#home,.brand').removeClass('fade-out');
            $('.divider').removeClass('hidden');
            
        }        else {
            $(this).addClass('filter');
            $('.navbar').addClass('filter');
            $('.wrapper,.brand').addClass('filter-wrapper');
            $('#home,.brand').addClass('fade-out');
            $('.refine-search').addClass('active');
            $('.filter-divider').addClass('active');
            $('.divider').addClass('filter2');
//            $('#search').removeClass('glyphicon-search').addClass('glyphicon-remove');
            $('#search').addClass('rotate');
            $('.divider').addClass('hidden');
            
        }
        $("#home").click(function () {
            $('.navbar,.wrapper,.brand').removeClass('filter');
            $('.refine-search').removeClass('active');
            $('#search').removeClass('glyphicon-remove').addClass('glyphicon-remove');
            $('.divider').removeClass('filter2');
        });
    });
    
    var asdf = $('#filter-list .checkbox input').change(function ()
    {
        var checkbox = $(this);
        var parent = checkbox.parent();
        var spans = parent.find('span');
        var identifier = spans.eq(1);
     
        if (checkbox.is(':checked')){
//            checkbox.removeAttr('checked');
            identifier
                .addClass('glyphicon-ok filter-true')
                .removeClass('glyphicon-remove filter-false')
            ;            
        }
        else {
//            checkbox.attr('checked','checked');
            identifier
                .removeClass('glyphicon-ok filter-true')
                .addClass('glyphicon-remove filter-false')
            ;
        }
        
        currentData = 0;
        updateData();
    });
    
});
