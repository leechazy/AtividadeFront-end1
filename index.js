var nome,ra1,num1,num2,res;
nome=prompt("Digite seu nome completo");
nome=(nome);
ra1=prompt("Digite seu RA");
ra1=parseInt(ra1);
num1=prompt("Digite um número");
num1=parseInt(num1);
num2=prompt("Digite um 2º número");
num2=parseInt(num2);

document.write("Nome do aluno: "+nome+"<br> RA: "+ra1+"<hr>");
document.write("Números digitados:<br>num1: "+num1+"<br> num2: "+num2+"<hr>");

res=(num1==num2);
document.write("Igualdade: "+res+"<br>");

res=(num1===num2);
document.write("Idêntico: "+res+"<br>");

res=(num1!=num2);
document.write("Não Igual: "+res+"<br>");

res=(num1!==num2);
document.write("Não Idêntico: "+res+"<br>");

res=(num1>num2);
document.write("Maior: "+res+"<br>");

res=(num1<num2);
document.write("Menor: "+res+"<br>");

res=(num1>=num2);
document.write("Maior ou Igual: "+res+"<br>");

res=(num1<=num2);
document.write("Menor ou Igual: "+res+"<br");