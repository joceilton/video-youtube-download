$(function() {

	$("#formBaixar").on("submit", function(e) {  
		
		$(".msg").fadeIn('slow')
		$(".msg").html("<img src='img/loading.gif'/> Aguarde ...")

		e.preventDefault()
	
		$.ajax({
	
		url : $(this).attr("action"),
		method : "POST",
		data : { url : $("#url").val()},
		
		success : function(data) {
				var video = document.getElementById('videoID');
				video.src = data;
				video.load();
				video.play();
				$(".msg").text("Baixe o seu vídeo")
				setTimeout(function() {
				$(".msg").fadeOut('slow')
			}, 3000)
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