$("form").on('submit', function(e) {
	e.preventDefault();
	e.stopPropagation();
	
	var form = document.forms[0].file;
	var file = form.files[0];
	var formData = new FormData();
	formData.append('file', file);
	$.ajax({
		url:window.location.origin + '/file/upload',
		data:formData,
		type:'POST',
		cache: false,
		processData: false,
		contentType: false,
		error:function() {
			document.write("There has been an error");
		},
		success:function(data) {
			$(document).empty();
			document.write(data);
		}
	})
})
	