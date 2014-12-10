MailerTemplate.Models.Title = Backbone.Model.extend({
	m_titleText : null,
	
	initialize : function(){
		this.m_titleText = "Put your text here.";
	},
	
	setTitle : function(text){
		this.m_titleText = text;
		this.trigger(MailerTemplate.Models.Title.TEXT_CHANGE,this.m_titleText);
	},
	getTitle : function(){
		return this.m_titleText;
	}
});

MailerTemplate.Models.Title.TEXT_CHANGE = "titleTextchange";