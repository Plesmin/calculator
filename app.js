$(document).ready(function(){

    var set = [];

  


    function buttonClicked(){

        var fn = getFirst();
        var ln = getLast();
        
        var fullname = fullName(fn,ln);

        confirm('Hallo ' + fullname);

        
    }

    var number = '';

    function show(){
        var text = '';

        for(var key in set){
            var item = set[key];
            text += item + ' ';
        }

        text += number;

        var screen = $('#screen');
        
        screen.html(text);
    }

    $('#knop').click(buttonClicked);

    $('.number').click(function(){
        var button = $(this);
        var value = button.html();

        number += value;
        
        show();
    });

    $('.symbol').click(function(){

        var button = $(this);
        var symbol = button.html();

        set.push(number);
        set.push(symbol);

        number = '';
        show();
    });

    

    $('.equals').click(function(){
       
        if(number.length > 0)
            set.push(number);
        number = '';

        total = calculate(set);

        var screen = $('#screen');
        if(total > 0){
            screen.addClass('positive');
            screen.removeClass('negative');
        }else{
            screen.addClass('negative');
            screen.removeClass('positive');
        }

        set = [total];

        number = '';
        show();
    });

 $('.redo').click(function(){

    set = [];
    number = '';
    show();

 });


});
