var mainView;
var dragNDropHandler;
var designView
$(document).ready(function(){
	$("#sidebar-wrapper,#page-content-wrapper").css({"height":window.innerHeight});
	dragNDropHandler = new DragNDrop({dragSelector : ".draggable", dropSelector : ".droppable"});
	mainView = new MailerTemplate.Views.MainView({el : "#wrapper"});
	$('#sidebar-wrapper ul:first li label').click(function(){
		if($(this).text().trim() === "Content"){
			$('#templateDesign').css("display","none");
			$('#templateItems').css("display","block");
		}else{
			$('#templateItems').css("display","none");
			$('#templateDesign').css("display","block");
		}
	});
	$('#templateDesign').css("display","none");
});

window.MailerTemplate = {
	Models : {},
	Collections : {},
	Views : {},
	TemplateItems : {
		TITLE : "title",
		IMAGE : "images",
		TEXTPLUSIMAGE : "textPlusImage",
		IMAGECARD : "ImageCard",
		DIVIDER : "Divider",
		GALLERY : "Gallery",
		BUTTON : "Button",
		VIDEO : "Video",
		SOCIALLINKS : "SocialLinks"
	},
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
		 ],
	DesignTemplate : [
		"background",
		"headingTextColor",
		"fontfamily",
		"fontsize",
		"fontstyle",
		"fontweight",
		"lineheight",
		"letterspacing",
		"textalign"
		],
	}