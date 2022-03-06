  
function myFunction1(){  
  alert ("I am an alert box") 
}
 
function myFunction2(){
    if (confirm("Were you born on a Sunday")){
        txt = "Your name is Akosua";
    }
    else{
        return false
    }
    document.getElementById("demo2"). innerHTML = txt
}

function myFunction3() {
    const inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo3"). innerHTML = inpObj.validationMessage;
    }
    else{
        document.getElementById("demo3"). innerHTML = "Input Ok" 
    }
}

