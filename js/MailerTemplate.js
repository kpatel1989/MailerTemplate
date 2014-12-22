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
		IMAGE : "image",
		/*TEXTPLUSIMAGE : "textPlusImage",
		IMAGECARD : "ImageCard",
		DIVIDER : "Divider",
		GALLERY : "Gallery",
		BUTTON : "Button",
		VIDEO : "Video",
		SOCIALLINKS : "SocialLinks"*/
	},
	Templates : [ 
			"title",
			"image",
			/*"TextPlusImage",
			"ImageCard",
			"Divider",
			"Gallery",
			"Button",
			"Video",
			"SocialLinks"*/
		 ],
	DesignTemplate : [
		"background",
		"headingTextColor",
		"fontFamily",
		"fontSize",
		"fontstyle",
		"fontWeight",
		"lineHeight",
		"letterspacing",
		"textAlign"
		],
	StyleProperties : {
		fontColor : "#000",
		fontFamily : "Arial",
		fontSize : "16px",
		fontWeight : "initial",
		lineHeight : "initial",
		textAlign : "center"
	},
	CssStyleConnector : {
		fontColor : "color",
		fontFamily : "font-family",
		fontSize : "font-size",
		fontWeight : "font-weight",
		lineHeight : "line-height",
		textAlign : "text-align"
	}
}