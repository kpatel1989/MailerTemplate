MailerTemplate.Views.MainView = Backbone.View.extend({
	m_Model : null,
	m_TemplateItems : null,
	m_Editor : null,
	
	initialize : function(expenses){
		this.m_TemplateItems = new MailerTemplate.Views.TemplateItems({el : "#templateItems"});
		this.m_Editor = new MailerTemplate.Views.TemplateHolder({el : "#templateHolder"});
		
		
	}
});


