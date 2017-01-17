$(document).ready(function(){



});

function getFirst(){
    var fn = $('#firstname').val();
    return fn;
}

function getLast(){
    var ln = $('#lastname').val();
    return ln;
}
function fullName(first, last){
    return first + ' ' + last;
}