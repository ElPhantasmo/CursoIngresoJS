function mostrar()
{
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

//tomo la edad  
	
	if (edad>12 && edad<18) 
	{
		alert("Es adolescente");
	}

	else if (edad<13) 
	{
		alert("Es un Niño");
	}
	
	else
	{
		alert ("Es Adulto");
	}




}//FIN DE LA FUNCIÓN