$(document).ready(function(){
  $("#boton").click(function(){
    $("#inicial").hide();
    $("#validacion").hide();
    $("#boton").hide();
	var potencia=$('input:radio[name=bits]:checked').val();
	var numero=parseInt( $("#nombre").val());
	var bina=(Math.pow(2,potencia-1)+ numero);
	$("#RadioGroup").hide();
	$("#final").text("El numero " + $("#nombre").val() + " en Exceso 2 ^" + potencia+"-1 " + " es : "+ bina.toString(2));
    $("#final2").text("La codificacion seleccionada es de "+ potencia + " bits");
	$("#final2").show();
	$("#final").show();
    $(document).attr("title", "TP1- exceso 2^"+potencia+"-1 // jQuery");
  });
});

