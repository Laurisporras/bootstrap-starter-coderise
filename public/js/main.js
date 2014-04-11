$(function () {
    //Codigo Lista Contacto
    $( "#datepicker" ).datepicker();
    var IngresarContacto = $("#IngresarContacto")
    IngresarContacto.on("click" , addContacto);
    
    
    function addContacto (e){
        e.preventDefault();
       var nombre = $("#nombreContacto");
       var email = $("#emailContacto");
       
       nombre.val()
       
       var contacto = "<li>" + nombre.val() + " -" + email.val() + "</li>";
      
       $("#listaContactos").append(contacto);
    } 
    
    
    
    
    //Codigo login
    
    $('.alert-danger').hide();
    $('.alert-success').hide();
  var signIn = $("#signin");

  signIn.on('click', function (e) {
    e.preventDefault();
    
    
    var username = $("#email").val();
    var password = $("#password").val();
    
    if ((username==="lalaporras@hotmail.com") && (password==="lauraporras")) {
      
     $('.alert-success').show();
        
    }else {
     $('.alert-success').hide();    
    $('.alert-danger').show();
    }
    
    

    console.log(username, password);
  });

 });
