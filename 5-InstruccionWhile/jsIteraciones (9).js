function mostrar()
{

	var contador=0;
	var numeroIngresado;
	var minimo;
	var maximo;	
	var respuesta='si';
	var primeraVez;

	while(respuesta!='no')
	{
		contador = contador + 1;
		numeroIngresado = prompt("ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while (isNaN(numeroIngresado))
		{
			numeroIngresado = prompt("Error, ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);			
		}			
	
		if (primeraVez = false) 
			{
				minimo = numeroIngresado;
				maximo = numeroIngresado;
			}
		else 
			{
				if (numeroIngresado > maximo) 
					{
						maximo = numeroIngresado;
					}

				else 
					{
						minimo = numeroIngresado;
					}
			}
	}




}//FIN DE LA FUNCIÓN