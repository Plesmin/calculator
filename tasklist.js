$(document).ready(function(){

    $('.addknop').click(function(){
        var item = getItem();
        

    if(item === ''){
        confirm("Please type a task!");
    }else{
        insert(list,item);
        update();
    }

    });



    var list = [];
    function getItem(){
        var item = $('#listitem').val();
        return item;
    }

    function getCopy(name){
        var copy = $('#' + name).clone();
        copy.removeAttr('id');   
        return copy;
    }

    function getId(checkbox){
        var id = $(checkbox).attr('id').replace('check', '');
        return id;
    }

    function update(){
        var ul = $('#myList');
        ul.empty();

        for(var key in list){
            
            var template = 'template';
            var data = list[key];
            var copy = getCopy(template);
                
            copy.attr('id', template + key);

            var text = copy.find('.text');
            text.attr('id', 'text'+key);
            text.text(data);

            var check = copy.find('.check');
            check.attr('id', 'check' + key);

            var button = copy.find('button');

            button.click(function(){
                console.log('delete'); 
                var id = $(this).parent().attr('id').replace(template, '');
                list.splice(id, 1);
                update();
            });

            check.on('change', function(e){
                
                var id = getId(this);
                var row = $('#' + template + id);
                var text = $('#text' + id);

                var button = row.find('button');
                
                if(this.checked){
                    text.css('text-decoration', 'line-through');
                    button.css('background', 'red');
                    button.css('display', 'inline-block');
                }else{
                    text.css('text-decoration', 'none');
                    button.css('display', 'none');
                }

            });

            ul.append(copy);
        }
    }
});