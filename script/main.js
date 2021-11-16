
function rollDice(){
    let roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").innerHTML = '<img src="/img/' + roll + '.png"></img>';
}

function buildTable(){
    var table = document.getElementById("mainTable");
    let tableCount = 100;
    for(var i = 0 ; i < 10 ; i++){

        console.log("in row for loop " + i);
        var row = table.insertRow(i);
        if(i % 2 == 0){
            
            for(var j = 0 ; j < 10 ; j++){

                var cell = row.insertCell(j);

                cell.innerHTML = tableCount;
                tableCount--;
            }  
        }else{
            for(var j = 10 ; j > 0 ; j--){
                let count = 0;
                console.log("2nd for loop " + j);

                var cell = row.insertCell(count);
                count++;

                cell.innerHTML = tableCount - (count - 1);
                tableCount--;
            }  
          
        }
    }
}