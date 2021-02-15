var x = true;
var field = [[],[],[]];
var len = field.length;
var won = document.getElementById("title");

console.log(field)
function put_xy(elm) {
    var valid = "";
    var id = elm.id;
    if(x){
        elm.innerHTML = "X"
        elm.style.color = "blue";
        x = false;
    }else{
        elm.innerHTML = "O";
        elm.style.color = "red";
        x = true;
    }
    field[parseInt(id[0])][parseInt(id[1])] = elm.innerHTML;
    console.log(field)


    for (let i = 0; i < len; i++) {
        var val = "";
        var val_diagonal = "";
        var val_diagonal_ = "";
        console.log(field[i].join(""))
        if(field[i].join("")=="XXX"){
            won.innerHTML = "Pobednik je X";
            won.style.color = "blue";
            break;
        } 
        if(field[i].join("")=="OOO"){
            won.innerHTML = "Pobednik je O";
            won.style.color = "red";
            break;
        } 
        for (let j = 0; j < len; j++) {
            val += field[j][i];
            val_diagonal += field[j][j]
            val_diagonal_ += field[j][len-1-j]
            if(val=="XXX" || val_diagonal == "XXX" || val_diagonal_ == "XXX"){
                won.innerHTML = "Pobednik je X";
                won.style.color = "blue";

                break; 
            } 
            if(val=="OOO" || val_diagonal=="OOO" || val_diagonal_ == "OOO"){
                won.innerHTML = "Pobednik je O";
                won.style.color = "red";
                break;
            }   
        }
    }  
}


