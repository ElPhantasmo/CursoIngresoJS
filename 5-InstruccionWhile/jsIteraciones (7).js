function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador = 0;
	acumulador = 0;
	respuesta = "si";


	while(respuesta == "si")
	{
		contador = contador + 1;
		numeroIngresado = prompt("ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while (isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);			
		}
		
		acumulador = acumulador + numeroIngresado;
		respuesta = prompt("ingrese SI para continuar");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN