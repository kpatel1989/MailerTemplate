MailerTemplate.Views.TemplateHolder = Backbone.View.extend({
	m_lstTemplates : null,
	initialize : function(){
		this.m_TemplateHoderBody = $("#template_holder_body");
		this.m_TemplateHoderHeader = $("#template_holder_header");
		this.m_TemplateHoderFooter = $("#template_holder_footer");
		this.m_TemplateHoderBody.addClass("droppable");
		this.m_TemplateHoderHeader.addClass("droppable");
		this.m_TemplateHoderFooter.addClass("droppable");
		this.render();
		
		oDragNDrop = DragNDrop.getInstance();
		oDragNDrop.setDroppableObject({droppableSelectors : [{
												droppable : ".dropppable"
												}],
									   	onDropCallBack : this.onDrop
									  });
		
	},
	render : function(){
		
		console.log("sfsdfsdfsdf");
		
		//this.onDrop(this.m_TemplateHoderBody,"<div>Item is dropped</div>")
	},
	onDrop : function(droppableObject, droppedObject){
		//Create a instance of view and model for the dropped object;
		$(droppableObject).append(droppedObject);
			//$(droppedObject).html("<div>Item is dropped</div>");
//			$(droppableObject).children().filter("#tmp").css({"display":"none"});
//			$(droppableObject).append(droppedObject);

	}
});
