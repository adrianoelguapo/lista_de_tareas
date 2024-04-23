$(function() {

    /* Añadir una tarea a la lista */
    var contador = 0;

    $(".añadirtarea").click(function() {
        var valorInput = $(".textotarea").val();

        if(valorInput.length > 35){
            alert("Solo se admiten tareas de hasta 35 caracteres de largo (contando espacios)");
        } else {
            if(contador < 6){
                $(".contenido").prepend('<div class = "tarea">' + '<div class = "tareatexto">' + valorInput + '</div>' + '<div class = "completar">' + '<img src = "./images/tick.png">' + '</div>' + '<div class = "eliminar">' + '<img src = "./images/bin.png">' + '</div>' + '</div');
                contador += 1;
            } else {
                alert("Lista de tareas llena");
            }
        }
    });


    /* Para estos dos módulos de código he utilizado la siguiente documentación:

       El método on() permite adjuntar eventos para el elemento que se selecciona y para sus elementos hijos

       https://www.w3schools.com/jquery/event_on.asp -> Ejemplo: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_on_newel

       El métofo closest() permite devolver el primer elemento padre del elemento seleccionado

       https://www.w3schools.com/jquery/traversing_closest.asp?ref=blog.haposoft.com
       
       Para elminar y marcar como completadas las tareas he utilizado el método on() para definir el evento para que cuando se haga
       clic en la imagen tanto de completar como de eliminar, se ejecute la función que contiene. 
       Para llegar al elemento con la clase tarea (que es el que se debe modificar) he utilizado el método closest() porque el primer padre
       del selector que se le pasa al método on() es el elemento con la clase tarea. */

    /* Eliminar una tarea de la lista */
    $(".contenido").on("click", ".eliminar img", function() {
        contador -= 1;
        $(this).closest(".tarea").slideUp();
        $(this).closest(".tareacompletada").slideUp();
    });


    /* Marcar tarea como completada */
    $(".contenido").on("click", ".completar img", function() {
        $(this).closest(".tarea").addClass("tareacompletada");
        $(this).closest(".tarea").removeClass("tarea");
    });
});