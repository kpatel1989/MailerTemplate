MailerTemplate.Views.MainView = Backbone.View.extend({
	m_Model : null,
	m_TemplateItems : null,
	m_Editor : null,
	m_PropertyPanel : null,
	m_DesignPage : null,
	m_DesignPageHeader : null,
	m_DesignPageBody : null,
	m_DesignPageFooter : null,
	
	initialize : function(expenses){
		this.m_TemplateItems = new MailerTemplate.Views.TemplateItems({el : "#templateItems"});
		this.m_Editor = new MailerTemplate.Views.TemplateHolder({el : "#templateHolder"});
		this.listenTo(this.m_Editor,MailerTemplate.Views.TemplateHolder.DISPLAY_PROPERTYPANEL,this.ShowProptertyPanel);
		this.listenTo(this.m_Editor,MailerTemplate.Views.TemplateHolder.BINDMODEL, this.bindModelToPanel);
		
		this.m_PropertyPanel = new MailerTemplate.Views.PropertyPanel({el : "#propertyPanel"});
		
		
//		this.m_DesignTab = new MailerTemplate.Views.DesignTemplatePage({el : "#DesignPageDiv"}); 
//		this.m_DesignPageHeader = new MailerTemplate.Views.DesignTemplatePageHeader({el : "#DesignPageDiv"}); 
//		this.m_DesignPageBody = new MailerTemplate.Views.DesignTemplateBody({el : "#DesignPageDiv"}); 
//		this.m_DesignPageFooter = new MailerTemplate.Views.DesignTemplateFooter({el : "#DesignPageDiv"}); 
	},
	
	ShowProptertyPanel: function(data){
		this.m_PropertyPanel.clear();
		this.m_PropertyPanel.show(data.type,data.model);
	},
	bindModelToPanel : function(model){
		this.m_PropertyPanel.setModel(model);
	}
});


