/*
	Para la gestión de un hotel,
	ingresar los siguientes datos validados de una reserva
	nombre del huésped
	cantidad de personas 
	cantidad de dia de estadia 
	forma de pago(efectivo , tarjeta o QR)

	informar el huésped que trajo más personas en una sola reserva.
	la cantidad de personas que se quedaron más días
	la forma de pago más utilizada.
	el promedio de cantidad de días por reserva
*/



function mostrar()
{
	var nombreHuesped;
	var cantidadPersonas;
	var diasEstadia;
	var	formaDePago;
	var respuesta;
	var contadorUno;

	contadorUno = 0;

	respuesta = "si";

	while (respuesta == "si")
		{
			nombreHuesped = prompt("Ingrese su Nombre");
			while (!(isNaN(nombreHuesped)))
				{
					nombreHuesped = prompt("Reingrese su Nombre");
				}

			cantidadPersonas = prompt("Ingrese la cantidad de Huespedes");
			cantidadPersonas = parseInt(cantidadPersonas);
			while (isNaN(cantidadPersonas))
				{
					cantidadPersonas = prompt("Vuelva a ingresar los huespedes");
					cantidadPersonas = parseInt(cantidadPersonas);
				}

			diasEstadia = prompt("Ingrese la cantidad de Dias");
			diasEstadia = parseInt(diasEstadia);
			while (isNaN(diasEstadia))
				{
					diasEstadia = prompt("Vuelva a ingresar los dias");
					diasEstadia = parseInt(diasEstadia);
				}

			formaDePago = prompt("Paga en Efectivo, Tarjeta o QR");
			while (formaDePago != "efectivo" && "tarjeta" && "qr")
				{
					formaDePago = prompt("Vuelva a indicar la forma de pago");
				}
		}

		
		//while (respuesta != "si")

}
