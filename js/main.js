/* Funcion para ejecutar evento despues de ser cargado el DOM.
Es mejor usar este que es el escucha. Lo carga laz veces que se llame */
document.addEventListener("DOMContentLoaded",function(event){
  var input = document.getElementById('input');
  console.log(input);
});
/* Funcion 2 para ejecutar evento despues de ser cargado el DOM.
Este lo va acargar de ultimas, y si se usa mas de una vez solo carga el ultimo no todos*/
window.onload = function(){
  var input = document.getElementById('result');
  console.log(input);
};


calculator = {
  op1 : null,
  op2 : null,
  operador : null,
  check_input : function(){//check if the input is valid and asign it
    var self = calculator;
    console.log("Check Input");
    var input = document.getElementById('input'); //Input del usuario
    var input_text = input.value;
    var errors = document.querySelector("#error");
    var input_number = Number(input_text); //Crear un numero si es posible
    if(Number.isNaN(input_number)){// revisa si input_number is NOT A Number 
        input.value = "";
      }
      console.log("Error");
  },
  set_number: function(button){
    return function(){
      console.log(this);
    var input = document.getElementById('input');
    input.value = ""+input.value+button.textContent;
    };// Return
  },//set_number
  exec_operator: function(){
    var self = calculator;
    return function(){
      if(self.result === null){

      }
      self.operator = button.textContent;
    };
  },
  clear: function(){
    var self = calculator;
    self.op1 = null;
    self.op2 = null;
    self.operador = null;
    var input = document.getElementById("input");//user input
    input.value = "";
  },
};

document.addEventListener("DOMContentLoaded",function(event){
  //Una vez la pagina ha cargado

  var output = document.getElementById("result");
  var controlpad = document.getElementById("control-pad");
  var button_operators = controlpad.querySelectorAll("#operators button");
  var i;
  for(i=0 ; i<button_operators.length ; i++){
    button_operators[i].addEventListener("click", calculator.check_input);
  }
  var button_numbers = controlpad.querySelectorAll("#numbers button");
  var input = document.getElementById('input');
  for(i=0 ; i<button_numbers.length ; i++){
    button_numbers[i].addEventListener(
    "click",calculator.set_number(button_numbers[i])
    );
  }
  console.log("Initiated");
});
