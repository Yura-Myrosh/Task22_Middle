"use strict"
var run = document.getElementById("run");
var rows = document.getElementById("rows");
var cols = document.getElementById("cols");
var table = document.getElementById("table");

run.addEventListener("click",()=>{

    var _table = document.createElement("table");
    _table.style.width = '100%';
    var countR = parseInt(rows.value,10);
    var countC = parseInt(cols.value,10);
    for(var i=0;i<countR;i++){

        var tr = document.createElement("tr");

        for(var j=0;j<countC;j++){
            var td = document.createElement("td");
            td.innerText = +i+1  + " - " + -(-j-1);
            td.id = "td-"+i + "-"+j;
            tr.appendChild(td);

        }

        _table.appendChild(tr);
    }

    table.appendChild(_table);
},true);

table.onclick=()=>{
    if (event.target.id.startsWith("td"))
        var elem = event.target;
    if (elem.style.background === 'rgb(255, 255, 255)' || elem.style.background === '')
        elem.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
    else  elem.style.background = '#FFFFFF'

}
document.addEventListener("click", ()=>{
    if (event.target.id=="run") {
        if (table.childNodes.length>0) table.innerHTML = "";
    }
},true);