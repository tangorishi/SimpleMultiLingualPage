//Português
$(function() {
    $(".br").click(function() {
       
        $(".nav-menu").children().eq(0).text("Soluções");
        $(".nav-menu").children().eq(1).text("Comunidade");
        $(".nav-menu").children().eq(2).text("Comprar");
        $(".nav-menu").children().eq(3).text("Entrar");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
        
        $("#title").text("Uma Webpage simples com opção de Milti-language");
        $("#title1").text("O escudeiro Trelawney, o Dr. Livesey e o restante desses cavalheiros me pediram para escrever todos os detalhes sobre a Ilha do Tesouro, do começo ao fim, sem guardar nada além das orientações da ilha, e isso apenas porque ainda há tesouros. ainda não levantado, pego minha caneta no ano da graça 17-, e volto ao tempo em que meu pai mantinha a estalagem Admiral Benbow, e o velho marinheiro moreno, com o corte de sabre, primeiro se hospedou sob nosso teto.");
       
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluções");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Contate-nos");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagamentos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Suporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("promoções");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Termos e Políticas");
    });
});

//English
$(function() {
    $(".en").click(function() {
        //header
        $(".nav-menu").children().eq(0).text("Solutions");
        $(".nav-menu").children().eq(1).text("community");
        $(".nav-menu").children().eq(2).text("Buy");
        $(".nav-menu").children().eq(3).text("Log in");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
        //section
        $("#title").text("A simple webpage with Multi-language option");
        $("#title1").text("Squire Trelawney, Dr Livesey, and the rest of these gentlemen having asked me to write down the whole particulars about Treasure Island, from the beginning to the end, keeping nothing back but the bearings of the island, and that only because there is still treasure not yet lifted, I take up my pen in the year of grace 17-, and go back to the time when my father kept the Admiral Benbow inn, and the brown old seaman, with the sabre cut, first took up his lodging under our roof.");
        //About
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Contact Us");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Promotions");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});

//Espanõl
$(function() {
    $(".es").click(function() {
        //encabezamiento
        $(".nav-menu").children().eq(0).text("Soluciones");
        $(".nav-menu").children().eq(1).text("Comunidad");
        $(".nav-menu").children().eq(2).text("Comprar");
        $(".nav-menu").children().eq(3).text("Entra");
        $(".language-selected").text("es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").addClass("change-es");
        //sección
        $("#title").text("Una página web sencilla con la opción de Multi-language");
        $("#title1").text("Squire Trelawney, el Dr. Livesey y el resto de estos caballeros me pidieron que escribiera todos los detalles sobre Treasure Island, desde el principio hasta el final, sin guardar nada más que el rumbo de la isla, y eso solo porque todavía hay tesoro. aún no levantado, tomo mi pluma en el año de gracia 17-, y retrocedo a la época en que mi padre tenía la posada Admiral Benbow, y el viejo marinero moreno, con el corte de sable, se alojó por primera vez bajo nuestro techo.");
        //sobre
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluciones");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Contacta con nosotros");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Soporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("promociones");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Términos y Políticas");
    });
});