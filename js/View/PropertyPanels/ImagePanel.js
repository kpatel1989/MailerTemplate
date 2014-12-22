MailerTemplate.Views.ImagePanel = Backbone.View.extend({
	m_ImageTemplate : null,
	m_propertyPanel : null,
	m_Model : null,
	m_styleTab : null,
	m_ImageBody : null,
	m_ImagePreview : null,
	
	initialize : function(){
		this.m_propertyPanel = $("#propertyPanel");
		this.m_ImageBody = $("#imageBody");
		this.m_ImageBody.show();
		this.m_ImagePreview = $("#imagePreview");

		this.m_styleTab = new MailerTemplate.Views.StyleTab({el : "#styletab"});
		this.m_styleTab.setTemplateType(MailerTemplate.TemplateItems.TITLE);
		this.listenTo(this.m_styleTab,MailerTemplate.Views.StyleTab.STYLE_PROPERTY_CHANGED,this.OnStylePropertyChanged);
	},
	events : {
		"load #imagePreview" : "OnImageLoaded"	
	},
	OnImageLoaded : function(){
		console.log("image loaded in panel");	
	},
	render : function(){
		
	},
	show : function(){
		this.m_ImageBody.show();
	},
	clear: function(){
	},
	hide: function(){
		this.m_ImageBody.hide();
	},
	renderModel : function(model){
		this.m_Model = model;
		this.m_ImagePreview.src = model.getSource();
		this.m_styleTab.setStyleProperty(model.getStyleProperty());
	},
	OnStylePropertyChanged : function(data){
		this.m_Model.setStyleProperty(data);

	}
});