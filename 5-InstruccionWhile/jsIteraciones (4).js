function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);


	while (numero <0 || numero >10)
		{
			numero = prompt("Reingrese numero");
			numero = parseInt(numero);

		while (isNaN(numero))
			{
				numero = prompt("Error, ingrese un numero");
				numero = parseInt(numero);			
			}
		}

	document.getElementById('Numero').value=numero;

}//FIN DE LA FUNCIÓN