MailerTemplate.Views.PropertyPanel = Backbone.View.extend({
	m_TitlePanel : null,
	m_activePanel : null,
	m_Model : null,
	
	initialize : function(){
		this.m_TitlePanel =  new MailerTemplate.Views.TitlePanel({el : "#propertyPanel"});
		this.m_activePanel = this.m_TitlePanel;
		this.render();
	},
	setModel : function(model){
		this.m_Model = model;
	},
	getModel : function(){
		return this.m_titleModel;
	},
	events : {
		"click #saveProperties" : "onSaveClick"	
	},
	onSaveClick : function(){
		this.hide();
	},
	render : function(){
		this.m_TitlePanel.render();
	},
	clear : function(){
		this.m_Model  = null;
		this.m_activePanel.clear();
	},
	show : function(templateType, model){
		this.setModel(model);
		if (templateType == MailerTemplate.TemplateItems.TITLE)
		{
			if (this.m_activePanel != this.m_TitlePanel)
			{
				this.m_activePanel.hide();
			}
			this.$el.show();
			this.m_activePanel = this.m_TitlePanel;
			this.m_activePanel.renderModel(this.m_Model);
			this.m_activePanel.show();

		}
		var h = window.innerHeight - $("#propertyBody")[0].offsetTop;
		$("#propertyBody").css({height:h+"px"});
		this.$el.animate({right:0},300);
	},
	
	hide : function(){
		this.$el.animate({right:-350},300);
		//this.$el.hide();
		this.m_activePanel.hide();
	}
});