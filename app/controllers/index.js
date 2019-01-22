function login(){
	$.btnLogin.addEventListener('click', function(e){
		var demoChat = Alloy.createController('/demoChat').getView();
		demoChat.open();
	});
}
//login();



$.index.open();
