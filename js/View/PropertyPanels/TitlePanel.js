MailerTemplate.Views.TitlePanel = Backbone.View.extend({
	m_titleTemplate : null,
	m_propertyPanel : null,
	m_Model : null,
	bSupressChangeEvent : true,

	initialize : function(){
		this.m_propertyPanel =  _.template($("#propertyStructure").html());
		this.m_titleTemplate = _.template($("#titlePanelBody").html());
	},
	render : function(){
		var templateData = {
			title : "Text",
			propertyBody : this.m_titleTemplate({})
		}
		this.$el.html(this.m_propertyPanel(templateData));
		this.initCkEditor();
	},
	show : function(){
		//this.render();
		this.bSupressChangeEvent = false;
	},
	clear: function(){
		//this.m_Model = null;	
		this.bSupressChangeEvent = true;
		//CKEDITOR.instances["titleText"].setData("");
	},
	hide: function(){
		
	},
	initCkEditor : function(){
		var temp = this;
		CKEDITOR.replace( 'titleText' );
		CKEDITOR.instances["titleText"].on('change', function() {
			temp.onCKEditorChangeEvent();
		});
	},
	onCKEditorChangeEvent : function(){
		if (!this.bSupressChangeEvent)
		{
			var data = CKEDITOR.instances["titleText"].getData();
			if (this.m_Model != null)
				this.m_Model.setTitle(data);
		}

	},
	renderModel : function(model){
		this.m_Model = model;
		
		CKEDITOR.instances["titleText"].setData(model.getTitle());
		//CKEDITOR.dom.text(model.getTitle());
		console.log(model.getTitle());
	}
})