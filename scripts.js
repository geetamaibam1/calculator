var data = "";
var click = 0;
function append (obj){
    let data2 = "";
    if((data=="" && obj.innerHTML==".")
        ||(((data.charAt(data.length-1)=="/")&& obj.innerHTML==".")
            ||((data.charAt(data.length-1)=="*") && obj.innerHTML==".")
            ||((data.charAt(data.length-1)=="-")&& obj.innerHTML==".")
            ||((data.charAt(data.length-1)=="+")&& obj.innerHTML==".")
          )
     ){
        data2="0"+obj.innerHTML;
        data+=data2;
    }
    else{
        data+=obj.innerHTML;  
    }
    let screen1 = document.getElementById("screen1");
    screen1.style.fontSize = "25px";
    screen1.innerHTML = data;
}
function cleanit(){  
    document.getElementById("screen1").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    data = "";
    click = 0;
}
function backspace(){
    let screen1 = document.getElementById("screen1");  
    let str2 = data.replace(data.charAt(data.length-1),"");
    data = str2
    screen1.innerHTML =  data;
    click = 0;
}
function calculatePercent(){
    let result = "";
    let val = data.substring(0,data.length-1);  //exclude the % sign 
    let regExp =  new RegExp("[+*-/]+");
    if(data!="" 
        &&(val!="")
        && !regExp.test(val)){            
        result = parseFloat(Number(val)*0.01).toFixed(2);
        document.getElementById("result").innerHTML = result;        
    }   
}

function plusMinus(obj){ 
    let screen1 = document.getElementById("screen1");
    let data2 = screen1.innerHTML;
    let regExp =  new RegExp("[+*-/]*");  
    if(screen1.innerHTML =='(-)' ||(screen1.innerHTML == "")){
        screen1.innerHTML = "";
        data2 = "";
        data = "";
        click =0;        
    }
    else if(regExp.test(data2)){         
        let lastIdx1 = data2.lastIndexOf("+");
        let lastIdx2 = data2.lastIndexOf("-");
        let lastIdx3 = data2.lastIndexOf("*");
        let lastIdx4 = data2.lastIndexOf("/");
        let lastIdx = Math.max.apply(null,[lastIdx1,lastIdx2,lastIdx3,lastIdx4]);
        try{
            var val = data2.substring(lastIdx+1);        
            var val2 = "(-"+val+")";
            data = data.replace(val,val2);
            screen1.innerHTML = data; 
            ++click;          
            if(click>1) { 
                val = val.replace(val.charAt(val.length-1),""); 
                val2 = val2.replace(val2.charAt(val2.length-1),"");                                                        
                data = data2.replace(val2,val);           
                click = 0;          
                screen1.innerHTML = data;
            }  
        }   
        catch(err)  {
            screen1.innerHTMl = "Error";
        }
    }   
    
}

function evaluateResult(){
   try{
    var screen1Expr = document.getElementById("screen1").innerHTML;  
    if(screen1Expr.includes("%")){      
        screen1Expr = screen1Expr.replaceAll(/%/g,"*0.01");        
    }
    const result = eval(screen1Expr);    
    
    if(result=== undefined){             
        throw "Error";
    }
    document.getElementById("result").innerHTML = result;
   }
   catch(err){
    document.getElementById("result").innerHTML = "Error";
   }
}