MailerTemplate.Views.PropertyToolbar = Backbone.View.extend({
	m_Edit : null,
	m_Copy : null,
	m_Delete : null,
	m_Move : null,
	element_Id : null,
	property_DroppableObject : null,
	property_DroppedObject : null,
	m_TemplateHolder1 : null,
	initialize : function(){
		this.m_Edit = $("#edit");
		this.m_Move = $("#move");
		this.m_Copy = $("#copy");
		this.m_Delete = $("#delete");
		//this.m_TemplateHolder1 = new MailerTemplate.Views.TemplateHolder({el : "#templateHolder"});
		this.applyHoverEvent();
		
	},
	events : {
//		"mouseout"	: "OnHoverOut",
//		"mouseover div #edit" : "OnHoverIn"
		"click #edit": "editClicked",
		"click #move": "moveClicked",
		"click #copy": "copyClicked",
		"click #delete": "deleteClicked"
	},
	OnHoverIn : function(evt){
		evt.stopPropagation();
		evt.preventDefault();
	},
	OnHoverOut : function(evt){
		this.hide();
	},
	applyHoverEvent : function(){
		var temp = this;
		this.$el.hover(function(){},function(){
			temp.hide();
		});
	},
	
	render : function(){
		
	},
	
	show : function(x,y,h,w,id,propertyDroppableObject,propertyDroppedObject){
		this.$el.css({"left": (x-10),
					  "top":(y-10),
					  "height":(h+20),
					  "width":(w+20)
					 });
		element_Id = id;
		property_DroppableObject=propertyDroppableObject;
		property_DroppedObject=propertyDroppedObject;
		this.$el.show();
	},
	hide : function()
	{
		this.$el.hide();
	},
	editClicked : function()
	{
		$('#templateItems').css("display","none");
		 $('#templateDesign').css("display","block");
	},
	moveClicked : function()
	{
		alert('move clicked');
	},
	copyClicked : function()
	{
		var tempObj=$('#' + property_DroppedObject).html();
		$("#" + property_DroppableObject.id).append(tempObj);
		alert("property_DroppedObject: " + property_DroppedObject);
		alert("property_DroppableObject.id: " + property_DroppableObject.id);
		$("#" + property_DroppedObject + "0").prop("id","abccd");
		//$("#abccd").(new MailerTemplate.Views.TemplateHolder()).ApplyHoverEvent();
	},
	deleteClicked : function()
	{
		$("#" + element_Id).hide();
	}
});