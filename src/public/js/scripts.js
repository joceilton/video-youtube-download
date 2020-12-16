$(function() {

	$("#formBaixar").on("submit", function(e) {  
		
		$(".msg").fadeIn('slow')
		$(".msg").html("Baixando vídeo")

		e.preventDefault()
	
		$.ajax({
	
		url : $(this).attr("action"),
		method : "POST",
		data : { url : $("#url").val()},
		
		success : function(data) {
			$(".msg").html(data)
		},
		
		error : function(data) {
			$(".msg").html(data.responseText)
			setTimeout(function() {
				$(".msg").fadeOut('slow')
			}, 3000)
		}

	
	})
	
    })
	
	})