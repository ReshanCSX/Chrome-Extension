function wait(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

async function addData(){
    await wait(3000);
    table = document.getElementsByClassName("table table table-striped table-bordered table-hover")[0];
    // x = document.getElementById("x");

    firstrow = true;

    value = 0;
    for(var i = 0, row; row = table.rows[i]; i++){

        if (!firstrow){
            value += parseFloat(row.cells[1].innerHTML);
        }
        else{
            firstrow = false;
        }
        
    }
    alert(Math.round(value * 10) / 10 + " GB");
}

addData();