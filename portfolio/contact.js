function sendMail() {
	var tempParams ={
	from_name: document.getElementById ("fromName").value,
	to_name: document.getElementById("toName").value,
	message:document.getElementById("msg").value,	
	};
	emailjs.send('service_d40og8j','template_h48ybgh',tempParams)
	.then(function(res){
		console.log("succes",res.status);

	})
}
