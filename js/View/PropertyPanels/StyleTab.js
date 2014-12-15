MailerTemplate.Views.StyleTab = Backbone.View.extend({
	m_TemplateType : null,
	m_lstStyleProperties : [],
	m_fontColor : null,
	m_fontFamily : null,
	m_fontSize  : null,
	m_fontWeight : null,
	m_lineHeight : null,
	m_textAlign  : null,
	m_backgroundColor : null,
	m_headerTextColor : null,
	
	initialize : function(){
		
		this.initProperties();
		this.attachEvents();
	},
	initProperties : function(){
		this.m_fontColor = $("#fontColor");
		this.m_fontFamily = $("#fontFamily");
		this.m_fontSize = $("#fontSize");
		this.m_fontWeight = $("#fontWeight");
		this.m_lineHeight = $("#lineHeight");
		this.m_textAlign = $("#textAlign");
		this.m_backgroundColor = $("#backgroundColor");
		this.m_headerTextColor = $("#headingTextColor");
	},
	attachEvents : function(){
		var temp = this;
		this.m_fontColor.bind("change.bfhcolorpicker",function(e){temp.OnFontColorChanged(e)});
		this.m_fontFamily.bind("change.bfhselectbox",function(e){temp.OnFontFamilyChanged(e)});
		this.m_fontSize.bind("change.bfhselectbox",function(e){temp.OnFontSizeChanged(e)});
		this.m_fontWeight.bind("change.bfhselectbox",function(e){temp.OnFontWeightChanged(e)});
		this.m_lineHeight.bind("change.bfhselectbox",function(e){temp.OnLineHeightChanged(e)});
		this.m_textAlign.bind("change.bfhselectbox",function(e){temp.OnTextAlignChanged(e)});
	},
	OnFontColorChanged : function(e){
		data = {
			"property" : "fontColor",
			"value" : $(e.target).val()
		}
		this.trigger(MailerTemplate.Views.StyleTab.STYLE_PROPERTY_CHANGED,data);
	},
	OnFontFamilyChanged: function(e){
		data = {
			"property" : "fontFamily",
			"value" : $(e.target).val()
		}
		this.trigger(MailerTemplate.Views.StyleTab.STYLE_PROPERTY_CHANGED,data);
	},
	OnFontSizeChanged: function(e){
		data = {
			"property" : "fontSize",
			"value" : $(e.target).val() + "px"
		}
		this.trigger(MailerTemplate.Views.StyleTab.STYLE_PROPERTY_CHANGED,data);
	},
	OnFontWeightChanged: function(e){
		var data = {
			"property" : "fontWeight",
		};
		switch($(e.target).val())
		{
			case "1":
				data.value = "initial";
				break;
			case "2":
				data.value = "normal";
			case "3":
				data.value = "bold";
		}
		this.trigger(MailerTemplate.Views.StyleTab.STYLE_PROPERTY_CHANGED,data);
	},
	OnLineHeightChanged: function(e){
		var data = {
			"property" : "lineHeight",
		};
		switch($(e.target).val())
		{
			case "1":
				data.value = "initial";
				break;
			case "2":
				data.value = "2em";
			case "3":
				data.value = "1.5em";
			case "4":
				data.value = "3em";
			case "5":
				data.value = "4em";
		}
		this.trigger(MailerTemplate.Views.StyleTab.STYLE_PROPERTY_CHANGED,data);
	},
	OnTextAlignChanged: function(e){
		data = {
			"property" : "textAlign",
			"value" : $(e.target).attr("alignType")
		}
		this.trigger(MailerTemplate.Views.StyleTab.STYLE_PROPERTY_CHANGED,data);
	},
	render : function(){
		
	},
	setTemplateType : function(type){
		this.showAll();
		switch (type)
		{
			case MailerTemplate.TemplateItems.TITLE:
				$("#backgroundColorParent").hide();
				$("#headingTextColorParent").hide();
		}
	},
	showAll : function(){
		$("#textColorParent").show();
		$("#backgroundColorParent").show();
		$("#headingTextColorParent").show();
		$("#fontFamilyParent").show();
		$("#fontSizeParent").show();
		$("#fontWeightParent").show();
		$("#lineHeightParent").show();
		$("#textAlignParent").show();
	},
	getStyleProperty : function(){
		
	},
	setStyleProperty : function(styleData){
		this.m_fontColor.val(styleData.fontColor);
		this.m_fontFamily.val(styleData.fontFamily);
		this.m_fontSize.val(styleData.fontSize);
		this.m_textAlign.val(styleData.textAlign);
		switch(styleData.fontWeight)
		{
			case "initial":
				this.m_fontWeight.val("1");
			case "normal":
				this.m_fontWeight.val("2");
				break;
			case "bold":
				this.m_fontWeight.val("3");
		}
		switch(styleData.lineHeight)
		{
			case "initial":
				this.m_lineHeight.val("1");
				break;
			case "2em":
				this.m_lineHeight.val("2");
				break;
			case "1.5em":
				this.m_lineHeight.val("3");
				break;
			case "3em":
				this.m_lineHeight.val("4");
				break;
			case "4em":
				this.m_lineHeight.val("5");
				break;
		}
	}
});
MailerTemplate.Views.StyleTab.STYLE_PROPERTY_CHANGED = "stylePropchanged";