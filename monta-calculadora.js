let montaCalculadora = () => {
    
    let body = document.body;
    let table = document.createElement("table");
    body.appendChild(table);
    table.classList.add('areaEstilo');

    for(let i =0; i<=5;i++){
        let tr = document.createElement("tr");  
        table.appendChild(tr);
        tr.classList.add('linha');
        if(i==5){
            let td = document.createElement("td");
            tr.appendChild(td);
            td.classList.add('celula-resultado');
            let div = document.createElement("div");
            td.appendChild(div);
            div.classList.add("div-resultado");
            //input.setAttribute();    
        }else{
            for(let j = 0; j<=3;j++){
                if(i==0 && j<=3){
                    let num = j+1;
                    let td = document.createElement("td");
                    tr.appendChild(td);
                    td.classList.add('bt','tecla'+(j+1));
                    if(j==3){
                        td.classList.remove('tecla4');
                        td.textContent = "+";
                        td.classList.add('opSomar');
                    }else{
                        td.innerHTML = num;
                        td.classList.add('numero');
                    }  
                }
                if(i==1 && j<=3){
                    let num = j+4;
                    let td = document.createElement("td");
                    tr.appendChild(td);
                    td.classList.add('bt','tecla'+(j+4));
                    if(j==3){
                        td.classList.remove('tecla7');
                        td.textContent = "-";
                        td.classList.add('opSubtrair');
                    }else{
                        td.innerHTML = num;
                        td.classList.add('numero');
                    }      
                }
                if(i==2 && j<=3){
                    let num = j+7;
                    let td = document.createElement("td");
                    tr.appendChild(td);
                    td.classList.add('bt','tecla'+(j+7));
                    if(j==3){
                        td.classList.remove('tecla10');
                        td.textContent = "*";
                        td.classList.add('opMultiplicar');
                    }else{
                        td.innerHTML = num;
                        td.classList.add('numero');
                    }       
                }
                if(i==3 && j<=3){
                    let td = document.createElement("td");
                    tr.appendChild(td);
                    td.classList.add('bt');
                    if(j==3){
                        td.textContent = "/";
                        td.classList.add('opDividir');
                    }else if(j==0){
                        td.innerHTML = "%";
                        td.classList.add('opPercentual');
                    }else if(j==1){
                        td.innerHTML = "0";
                        td.classList.add('numero','tecla0');
                    }else if(j==2){
                        td.innerHTML = ",";
                        td.classList.add('decimal');
                    }       
                }
                if(i==4 && j<=3){
                    let td = document.createElement("td");
                    tr.appendChild(td);
                    td.classList.add('bt');
                    if(j==3){
                        td.textContent = "=";
                        td.classList.add('igual');
                    }else if(j==0){
                        td.innerHTML = "CE";
                        td.classList.add('limparDisplay');
                    }else if(j==1){
                        td.innerHTML = "C";
                        td.classList.add('limparCalculo');
                    }else if(j==2){
                        td.innerHTML = "<<";
                        td.classList.add('backSpace');
                    }       
                }
            }
        }
    }
}
montaCalculadora();