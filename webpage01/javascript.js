$(document).ready(function(){

    var pictures = $('.pictures');

    var img1 = '<img src="pictures/picture-page';
    var img2 = '.jpg" />';

    for(var i = 1; i < 100; i++){

        var number = i < 10 ? '0' + i : i;

        var img = img1 + number + img2;
        var element = $(img);

        element.on('load', function(){
            $(this).css('opacity', 1);  
            $(this).css('margin-top', '0px'); 
        });

        element.on('error', function(){
            $(this).remove();
        })

        pictures.append(element);
    }

});