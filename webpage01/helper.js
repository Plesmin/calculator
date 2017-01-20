
function tag( name, value ){
    var element = $('<' + name + '></' + name + '>');

    if(value){
        if(name === 'img'){
            element.attr('src', value);
        }else{
            element.text(value);
        }
    }

    return element;
}