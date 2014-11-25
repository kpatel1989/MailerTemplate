var mainView;
var dragNDropHandler;
var designView
$(document).ready(function(){
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