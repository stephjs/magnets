$( function() {
    $( ".draggable" ).draggable();
  	$("#magnetmaker").on("submit", function(){
      var newMag = $("#magnet").val().trim().split(" ");
      for (i=0; i<newMag.length; i++) {
        $("body").append('<p class="draggable">'+newMag[i]+'</p>');
        $( ".draggable" ).draggable();
        $( ".draggable" ).attr("data-name", newMag[i]);
      }
      $("#magnetmaker").trigger("reset");
		  return false;
    });
  
    $('#trash').droppable({
        drop: function(event, ui) {
          $(ui.draggable).remove();
        }
    });
  
    $(".draggable").on("click", function(){
      console.log("clicked");
    });
});