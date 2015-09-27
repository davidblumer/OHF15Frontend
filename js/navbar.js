$(document).ready(function ()
{
    $("#filter").click(function (e) {
        if ($(this).hasClass('filter')) {
            $(this).removeClass('filter');
            $('.navbar,.wrapper').removeClass('filter');
            $('.refine-search').removeClass('active');
            $('.filter-divider').removeClass('active');
            $('.divider').removeClass('filter2');
//            $('#search').removeClass('glyphicon-remove').addClass('glyphicon-search');
            $('#search').removeClass('rotate');
        }        else {
            $(this).addClass('filter');
            $('.navbar,.wrapper').addClass('filter');
            $('.refine-search').addClass('active');
            $('.filter-divider').addClass('active');
            $('.divider').addClass('filter2');
//            $('#search').removeClass('glyphicon-search').addClass('glyphicon-remove');
            $('#search').addClass('rotate');
        }
        $("#home").click(function () {
            $('.navbar,.wrapper').removeClass('filter');
            $('.refine-search').removeClass('active');
            $('#search').removeClass('glyphicon-remove').addClass('glyphicon-search');
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
    });
    
});
