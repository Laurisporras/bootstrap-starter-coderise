$(document).ready(function (){
     console.log("ready")
     $('#ap').click(function(){
         $("#ask").slideDown('slow');
     });
 
 


  // Get Database References
  var db = new Firebase("https://wisdom.firebaseio.com/");
  var matematicas = db.child("matematicas");

  $("#procesar").click(function(e){
      e.preventDefault();
      var titulo = $("#tl-pr").val();
      var desc = $("#desc-pr").val();
      matematicas.push({
          titulo: titulo,
          descripcion: desc
      });
      alert("Publicado "+titulo)
      $("#ask").fadeOut();
  });
  
   matematicas.on('child_added', function (snapshot) {
    // Load Contact from Database
    var mate = snapshot.val();
    console.log(mate);

    // Append rendered contact to contact list
    $("#contacts").append(html);
  });
 
});
 
 
 
 
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
 
 
 
 
