$(function()
{
    $("#nombre").val("Jose"); //asi se setea un nombre en un textbox
    var boton = $("#boton1");
    boton.click(manejadorDelBoton);
}

);

function manejadorDelBoton()
{
    alert ($("#nombre").val()); //con este metodo se accede al value de esa referencia
}