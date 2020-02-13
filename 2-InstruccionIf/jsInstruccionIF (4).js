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

	else 
	{
		alert ("No es adolescente");
	}


}//FIN DE LA FUNCIÓN