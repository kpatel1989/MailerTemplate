var mainView;
var dragNDropHandler;
$(document).ready(function(){
	dragNDropHandler = new DragNDrop({dragSelector : ".draggable", dropSelector : ".droppable"});
	mainView = new MailerTemplate.Views.MainView({el : "#wrapper"});
	
});

window.MailerTemplate = {
	Models : {},
	Collections : {},
	Views : {},
	Templates : [ 
			"title",
			"images",
			"TextPlusImage",
			"ImageCard",
			"Divider",
			"Gallery",
			"Button",
			"Video",
			"SocialLinks"
		 ]	 
	}