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
    let result = document.getElementById("result") ;
    let str2 = data.replace(data.charAt(data.length-1),"");
    data = str2
    screen1.innerHTML =  data;
    click = 0;
    result.innerHTML = "";
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
document.getElementById("bodyTag").addEventListener("keyup",function(event){
    let r = document.querySelector(":root");
	let rs = getComputedStyle(r);  
	let hoverColor = rs.getPropertyValue('--hoverColor');  
    let green = rs.getPropertyValue('--green');  
    let orange = rs.getPropertyValue('--orange');  
    let blue = rs.getPropertyValue('--blue');  
    let equals = document.getElementById("equals");
    let backspace = document.getElementById("arr");
    let pc = document.getElementById("pc");
    let point = document.getElementById("point");
    let plus = document.getElementById("plus");
    let minus = document.getElementById("minus");
    let multiply = document.getElementById("multiply");
    let divide = document.getElementById("divide");
    let zero = document.getElementById("zero");
    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");
    let six = document.getElementById("six");
    let seven = document.getElementById("seven");
    let eight = document.getElementById("eight");
    let nine = document.getElementById("nine");
    
    switch(event.key){
        case "Backspace": backspace();
                          backspace.style.backgroundColor = hoverColor;
                          setTimeout(function(){backspace.style.backgroundColor = orange;},200);                         
                          break;
        case "=": 
        case "Enter": equals.style.backgroundColor = hoverColor;
                    setTimeout(function(){equals.style.backgroundColor = green;},200);
                    evaluateResult();
                    break;

        case "%": pc.style.backgroundColor = hoverColor;
                  setTimeout(function(){pc.style.backgroundColor = blue;},200);
                  append(pc);
                  calculatePercent();
                  break;
        case ".": point.style.backgroundColor = hoverColor;
                    setTimeout(function(){point.style.backgroundColor = blue;},200);
                    append(point);
                    break;
        case "+": plus.style.backgroundColor = hoverColor;
                    setTimeout(function(){plus.style.backgroundColor = orange;},200);
                    append(plus);
                    break;
        case "-": minus.style.backgroundColor = hoverColor;
                setTimeout(function(){minus.style.backgroundColor = orange;},200);
                append(minus);
                break;
        case "*": multiply.style.backgroundColor = hoverColor;
                setTimeout(function(){multiply.style.backgroundColor = orange;},200);
                append(multiply);
                break;
        case "/": divide.style.backgroundColor = hoverColor;
                setTimeout(function(){divide.style.backgroundColor = orange;},200);
                append(divide);
                break;
        case "0":zero.style.backgroundcolor = hoverColor;
                setTimeout(function(){zero.style.backgroundColor = blue;},200);
                append(zero);
                break;
        case "1":one.style.backgroundColor = hoverColor;
                setTimeout(function(){one.style.backgroundColor = blue;},200);
                append(one);
                break;
        case "2":two.style.backgroundColor = hoverColor;
                setTimeout(function(){two.style.backgroundColor = blue;},200);
                append(two);
                break;
        case "3":three.style.backgroundColor = hoverColor;
                setTimeout(function(){three.style.backgroundColor = blue;},200);
                append(three);
                break;
        case "4":four.style.backgroundColor = hoverColor;
                setTimeout(function(){four.style.backgroundColor = blue;},200);
                append(four);
                break;
        case "5":five.style.backgroundColor = hoverColor;
                setTimeout(function(){five.style.backgroundColor = blue;},200);
                append(five);
                break;
        case "6":six.style.backgroundColor = hoverColor;
                setTimeout(function(){six.style.backgroundColor = blue;},200);
                append(six);
                break;
        case "7":seven.style.backgroundColor = hoverColor;
                setTimeout(function(){seven.style.backgroundColor = blue;},200);
                append(seven);
                break;
        case "8":eight.style.backgroundColor = hoverColor;
                setTimeout(function(){eight.style.backgroundColor = blue;},200);
                append(eight);
                break;
        case "9":nine.style.backgroundColor = hoverColor;
                setTimeout(function(){nine.style.backgroundColor = blue;},200);
                append(nine);
                break; 
        }
});
