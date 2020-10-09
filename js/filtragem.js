$(document).ready(function(){
    $('.search2 .form-bolo-wraper[category="all"]');
    
    $('.form-bolo-wraper').click(function(){
        var catOption = $(this).attr('category');
        
        $('.vitrine-destaque').css('transform','scale(0)').css('transition','2s');
        function hideProduct(){
            $('.vitrine-destaque').hide();
        } setTimeout(hideProduct,400);
        
        function showProduct(){
            $('.vitrine-destaque[category="'+catOption+'"]').show();
            $('.vitrine-destaque[category="'+catOption+'"]').css('transform','scale(1)').css('transition','2s');
        } setTimeout(showProduct,400);

    })

    $('.form-bolo-wraper[category="all"]').click(function(){
        function showAll(){
            $('.vitrine-destaque').show();
            $('.vitrine-destaque').css('transform','scale(1)');
        } setTimeout(showAll,400);
    });
});