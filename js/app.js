

//AIzaSyAeRMpT5BhkcPmPtqnEWT_jvoUpIGScUjA

$(document).ready(function() {
    console.log("Jquery cargado");
});







var bio = {

	nombre: "Juan",
 	apellido: "Romaris",
 	pais:"Argentino",
 	edad:"27 años",
 	telefono: "(011) 15-3574-2022",
 	linkGitHub: "https://github.com/juanromaris",
 	habilidades: ["HTML","CSS","Vanilla JS", "JQuery", "Ajax"],

	mostrar: function () {

			$("#main-title").append(this.nombre);
			$("#main-title").append(" " + this.apellido);
			$("#pais").append(this.pais);
			$("#edad").append(this.edad);
			$("#telefono").append(this.telefono);
			$("#git").append(this.linkGitHub);
			$("#habilidades").append(this.habilidades);



		console.log("bio");

	}

};

bio.mostrar();

//API google AIzaSyAeRMpT5BhkcPmPtqnEWT_jvoUpIGScUjA


var experiencia = {

	cargo: "Diseñador Gráfico",
	empresa: "Colombraro",
 	desde: "01/2015",
 	hasta:"Actualidad",
 	mostrar: function () {


			$("#cargo").append(this.cargo);
			$("#empresa").append(this.empresa);
			$("#periodo").append(this.desde);
			$("#periodo").append(" - " + this.hasta);




 		console.log(experiencia);}
	  

};



	experiencia.mostrar();



var educacion = {

	diploma: "Diseñador Gráfico",
 	universidad: "UBA",
 	pais:"Arg",
 	comienzo: "2009",
 	fin: "2013",

 	mostrar: function () {



			$("#diploma").append(this.diploma);
			$("#universidad").append(this.universidad + " " + this.pais);
			$("#lapzo").append(this.comienzo + " " + this.fin);
			


 		console.log(educacion);}
	  

};


	educacion.mostrar();


var proyectos = {

	proyectos: ["Calculadora", "Telefono", "Agenda"],
 	mostrar: function () {

 			$("#proyectos").append(this.proyectos);
			



 		console.log(proyectos);}

 	
};		

	proyectos.mostrar();