MailerTemplate.Views.PropertyToolbar = Backbone.View.extend({
	m_Edit : null,
	m_Copy : null,
	m_Delete : null,
	m_Move : null,
	
	initialize : function(){
		this.m_Edit = $("#edit");
		this.m_Move = $("#move");
		this.m_Copy = $("#copy");
		this.m_Delete = $("#delete");
		
		this.applyHoverEvent();
		
	},
	applyHoverEvent : function(){
		var temp = this;
		this.$el.hover(function(){},function(){
			temp.hide();
		});
	},
	
	render : function(){
		
	},
	
	show : function(x,y,h,w){
		this.$el.css({"left": (x-10),
					  "top":(y-10),
					  "height":(h+20),
					  "width":(w+20)
					 });
		this.$el.show();
	},
	hide : function()
	{
		this.$el.hide();
	}
});