function mostrar()
{

	var contador;	
	contador = 0;

	for (contador = 0;contador < 10;) 
	{
		if (contador == 10) 
			{
				break;
			}
		contador ++;
		document.write(contador);
	}
}