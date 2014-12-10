MailerTemplate.Views.Title = Backbone.View.extend({
	m_titleText : null,
	m_Model : null,
	
	initialize : function(){
		
	},
	
	setTitle : function(text){
		this.m_titleText = text;
		this.$el.html(text);
	},
	setModel : function(model){
		this.m_Model = model;
		this.listenTo(this.m_Model, MailerTemplate.Models.Title.TEXT_CHANGE, this.setTitle);
	}
});
