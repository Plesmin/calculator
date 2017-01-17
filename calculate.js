function calculate(calcSet){

    var total = 0;
    var plus = true;

    for(var key in calcSet){
        
        var item = calcSet[key];
        var num = parseInt(item);
        
        if(isNaN(num)){
            // dan zal het wel een plus zijn
            if(item == '-'){
                plus = false;
            }

        }else{
            if(plus)
                total += num;
            else
                total -= num;
        }
    }

    return  total;
}

function redo(set, number){
    set = [];
    number = '';

}