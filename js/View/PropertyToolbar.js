
MailerTemplate.Views.PropertyToolbar = Backbone.View.extend({
	m_Edit : null,
	m_Copy : null,
	m_Delete : null,
	m_Move : null,
	m_hoveredElement : null,
	m_hideOnDragg : false,
	IsReverted : false,
	
	
	initialize : function(){
		this.m_Edit = $("#edit");
		this.m_Move = $("#move");
		this.m_Copy = $("#copy");
		this.m_Delete = $("#delete");
		this.applyHoverEvent();
		this.applyMovingEvent();
	},
	events : {
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
	applyMovingEvent : function(){
		var temp = this;
		$(".moveable").draggable({
			connectToSortable : ".sortable",
			placeholder: "ui-state-highlight",
			revert : function(isReverted){
				temp.IsReverted = isReverted;
			},
			appendTo : "body",
			forceHelperSize: true,
			cursor : "move",
			helper : function(){
				$(".moveable").css("display","block");
				var type = $(temp.m_hoveredElement).attr('type');
				var helperElement = $('#' + type + 'DroppedItem').html();
				$(helperElement).css({"background-color" : "gray",
										"width" :"auto",
										"height":"40px"});
				return helperElement;
			},
			start : function(event, ui){
				temp.$el.hide();
				
				temp.m_hideOnDragg = true;
			},
			stop : function(event, ui){
				temp.m_hideOnDragg = false;
				$(".moveable").css("display","inline-block");
				
				if (temp.IsReverted)
					$(temp.m_hoveredElement).remove();
			}
		});	
	},
	render : function(){
		
	},
	
	show : function(x,y,h,w,hoverObject){
		if (this.m_hideOnDragg)
			return;
		this.$el.css({"left": (x-10),
					  "top":(y-10),
					  "height":(h+20),
					  "width":(w+20)
					 });
		this.m_hoveredElement = hoverObject;
		this.$el.show();
		
	},
	hide : function()
	{
		this.$el.hide();
	},
	editClicked : function()
	{
		this.trigger(MailerTemplate.Views.PropertyToolbar.EDIT_BTN_CLICKED,this.m_hoveredElement);
	},
	moveClicked : function()
	{
		
	},
	copyClicked : function()
	{
		
//		var tempObj=$('#' + property_DroppedObject).html();
//		$("#" + property_DroppableObject.id).append(tempObj);
//		alert("property_DroppedObject: " + property_DroppedObject);
//		alert("property_DroppableObject.id: " + property_DroppableObject.id);
//		$("#" + property_DroppedObject + "0").prop("id","abccd");
		//$("#abccd").(new MailerTemplate.Views.TemplateHolder()).ApplyHoverEvent();
	},
	deleteClicked : function()
	{
		$("#" + element_Id).hide();
	}
});

MailerTemplate.Views.PropertyToolbar.EDIT_BTN_CLICKED = "toolbarEditClicked";
MailerTemplate.Views.PropertyToolbar.COPY_BTN_CLICKED = "toolbarCopyClicked";
MailerTemplate.Views.PropertyToolbar.DELETE_BTN_CLICKED = "toolbarDeleteClicked";