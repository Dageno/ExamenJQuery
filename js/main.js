/**
 * @author Daniel Gestino Notario
 */

/**
 * Creación del plugin 
 */

(function($){
    $.fn.plugin = function(options){
            
            var defaults = {
                fuente: "500%",
                width: "100%",
                background: "yellow"
            }

            var options = $.extend({}, defaults, options);

            this.each(function() {        	    	           
                $(this).attr('style', 'background-color: '+options.background+';').click(function(){
                    $(this).animate({
                        width: options.width,
                        fontSize: options.fuente
                    }, 1500);
                })
                .dblclick(function(){
                    $(this).animate({
                        width: "100%",
                        fontSize: "100%"
                    }, 1500);
                });
            });
    }
    
            
})($)
/**
 * Definición de funciones de los eventos
 */
/*
let funcionAjax = function(){
    $.getJSON("php/comunicador.php", {datos: "Este texto está introducido con AJAX"})
    .done(function(data){
        $("#customInput").text(data);
        })
}
let efectoSubeBaja = function(){
    $(".domtree h3").slideUp()
    .slideDown();
}
let desapareceAparece = function(){
    $(".domtree ul").fadeOut("slow")
    .fadeIn("slow");
}

let efectoAcordeon = function(){
    $(".domtree ul ul li").slideUp()
    .slideDown();
}

let anchoAlto = function(){
    $(".domtree p:first").animate({
        width: "0%",
        height: "100%"
    }, 1000)
    $(".domtree p:first").animate({
        width: "100%",
        height: "100%"
    }, 1000)
}

let fondoVerde = function(){
    $(":selected").attr("style", "background-color: green;");
}

let efectoClase = function(){
    $(".domtree code").addClass("highlight");
}
*/
/**
 * Objeto de funciones para iterar
 */
let funcionesClick = {

    funcionAjax: function(){
        $.getJSON("php/comunicador.php", {datos: "Este texto está introducido con AJAX"})
        .done(function(data){
            $("#customInput").text(data);
        })
    },
    efectoSubeBaja: function(){
        $(".domtree h3").slideUp()
        .slideDown();
    },
    desapareceAparece: function(){
        $(".domtree ul").fadeOut("slow")
        .fadeIn("slow");
    },
    
    efectoAcordeon: function(){
        $(".domtree ul ul li").slideUp()
        .slideDown();
    },
    
    anchoAlto: function(){
        $(".domtree p:first").animate({
            width: "0%",
            height: "100%"
        }, 1000)
        $(".domtree p:first").animate({
            width: "100%",
            height: "100%"
        }, 1000)
    },
    
    fondoVerde: function(){
        $(":selected").attr("style", "background-color: green;");
    },
    
    efectoClase: function(){
        $(".domtree code").addClass("highlight");
    }
    
};

/**
 * funcion iteradora
 */
function* idMaker(){
    for(const key in funcionesClick) yield key;
}
/**
 * iterador
 */
let gen = idMaker();

/**
 * Efecto del h3 con nuestro apellido
 */
let efectoGestino = function(){
    $("#gestino")
        .fadeOut("slow")
        .fadeIn("slow");
}


/**
 * Aplicación de eventos clave al cargar la página
 */
$(function(){
    $(".example h3:first")
        .attr("id", "gestino")
        .click(efectoGestino)
        .click();
    
    let $nombreApellidos = $(".section h1");
    let nombreCompleto = "Daniel Gestino Notario";
    $nombreApellidos.text(  
        $nombreApellidos.text().replace("Nombre Apellido1 Apellido2", nombreCompleto)
    );

    $("#customInput").text(nombreCompleto);
    
    // ARRAY DE FUNCIONES 
    //let asignarEvento = [funcionAjax, efectoSubeBaja, desapareceAparece, efectoAcordeon, anchoAlto, fondoVerde, efectoClase]
    
    $(".example :submit").each(function(){
       $(this).click(funcionesClick[gen.next().value]);
    });

    $("h3:first").plugin();
    $("#miId").plugin({fuente: "600%", width: "40%", background: "red"});
    
})
