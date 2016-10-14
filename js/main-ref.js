
alert("Bienvenido a la Calculadora hecha con javascript");
var op1 = prompt("Primer Operando");
var op2 = prompt("Segundo Operando");
var operador = prompt("Operador (suma,sum,+,resta,subt,-,multiplicar,mult,*,dividir,divide,/)");
var oper = ['suma','sum','+','resta','subt','-','multiplicar','mult','*','dividir','divide','/'];
var veroper = false;
var resultado;
var opera;

function sumar(p1, p2){
  resultado = parseFloat(p1)+parseFloat(p2);
  return resultado;
}

function restar(p1, p2){
  resultado = parseFloat(p1)-parseFloat(p2);
  return resultado;
}

function multiplicar(p1, p2){
  resultado = parseFloat(p1)*parseFloat(p2);
  return resultado;
}

function dividir(p1, p2){
  resultado = parseFloat(p1)/parseFloat(p2);
  return resultado;
}

if(!isNaN(op1) && !isNaN(op2)){
  for(var pos in oper){
    if(oper[pos]===operador){
      veroper = true;
      if(pos < 3){
        opera = '+';
        resultado = sumar(op1,op2);
      }else if(pos > 2 && pos < 6){
               opera = '-';
               resultado = restar(op1,op2);
            }else if(pos > 5 && pos < 9){
                     opera = '*';
                     resultado = multiplicar(op1,op2);
                  }else {
                     opera = '/';
                     resultado = dividir(op1,op2);
                  }
    }
  }

  if(veroper === true){
     console.log(op1 + " "+op2+" "+operador+" SI es una operacion Valida!!");
     alert("Resultado: "+op1 + " " + opera + " " + op2 + " = " + resultado);
  }else {
     console.log(op1 + " "+op2+" "+operador+" "+opera+" NO es una operacion Valida!!");
     alert("No es Valido: "+op1 + " " + operador + " " + op2);
  }
}else {
  console.log(op1 + " "+op2+" "+operador+" "+opera+" NO es una operacion Valida!!");
  alert("No es Valido: "+op1 + " " + operador + " " + op2);
}
