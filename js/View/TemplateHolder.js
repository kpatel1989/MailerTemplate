var m_objCnt=1;

MailerTemplate.Views.TemplateHolder = Backbone.View.extend({
	//m_objCnt : null,
	m_lstTemplates : null,
	m_PropertyToolbar : null,
	bToolbarVisible : false,
	currentHoverElement : null,
	propertyDroppableObject : null,
	propertydroppedObject : null,
	
	initialize : function(){
		//this.m_lstTemplates = [];
		//alert("sadasd");
		this.m_objCnt=0;
		this.m_TemplateHoderBody = $("#template_holder_body");
		this.m_TemplateHoderHeader = $("#template_holder_header");
		this.m_TemplateHoderFooter = $("#template_holder_footer");
		this.m_TemplateHoderBody.addClass("droppable");
		this.m_TemplateHoderHeader.addClass("droppable");
		this.m_TemplateHoderFooter.addClass("droppable");
		this.ApplySortingEvent();
		this.m_PropertyToolbar = new MailerTemplate.Views.PropertyToolbar({el : "#propertyToolbar"});
		this.render();
		
		oDragNDrop = DragNDrop.getInstance();
		oDragNDrop.setDroppableObject({droppableSelectors : [{
												droppable : ".dropppable"
												}],
									   	onDropCallBack : this
									  });
		oDragNDrop.listenToDrag(this);
	
		
	},
	
	ApplyHoverEvent : function(){
		return;
		var temp = this;
		$(".droppedObject").hover(function(obj){
								temp.OnHoverIn(obj.currentTarget)
							},function(obj){});
	},
	ApplySortingEvent : function(){
		$( ".sortable" ).sortable({
		  placeholder: "ui-state-highlight"
		});
		$( ".sortable" ).disableSelection();
	},
	OnHoverIn : function(obj){
		this.currentHoverElement = obj;
		this.m_PropertyToolbar.show($(obj).position().left,
									$(obj).position().top,
								   	$(obj).height(),
								   	$(obj).width(),obj.id,propertyDroppableObject,propertydroppedObject);
	},
	render : function(){
		
		//console.log("sfsdfsdfsdf");
		this.m_lstTemplates = [];
		//this.onDrop(this.m_TemplateHoderBody,"<div>Item is dropped</div>")
	},
	onDrop : function(droppableObject, droppedObject){
		//Create a instance of view and model for the dropped object;

		propertyDroppableObject=droppableObject;
		
		if($(droppedObject).attr('id')=="titleTemplateItem")
		{
			temp="titleTemplateItem"+m_objCnt;
			var tempObj=$('#titleDroppedItem').html();			
			propertydroppedObject= "titleTemplateItem";
			$(droppableObject).append(tempObj);
			$("#titleTemplateItem0").prop("id",temp);
			m_objCnt=m_objCnt + 1;
		}
			
			
			
		if($(droppedObject).attr('id')=="imageTemplateItem")
		{
			temp="imageTemplateItem"+m_objCnt;
			//Image dropped
			var tempObj=$('#imageDroppedItem').html();	
			propertydroppedObject= "imageDroppedItem";
			$(droppableObject).append(tempObj);
			$("#titleTemplateItem0").prop("id",temp);
			//$(droppableObject).append("<div id='"+ temp +"' style=' background:#d0d0d0; margin:5px; '> <center> <img src='../MailerTemplate/images/img_Image.png' /> </center> </div>");
			m_objCnt=m_objCnt + 1;
		}


		if($(droppedObject).attr('id')=="TextPlusImageTemplateItem")
		{
			temp="TextPlusImageTemplateItem"+m_objCnt;
			//Text + Image dropped
			var tempObj=$('#TextPlusImageDroppedItem').html();			
			propertydroppedObject= "TextPlusImageDroppedItem";
			$(droppableObject).append(tempObj);
			$("#TextPlusImageTemplateItem0").prop("id",temp);
			//$(droppableObject).append("<div id='"+ temp +"' style=' background:#d0d0d0; margin:5px; '>  <p  style='text-align:left;'>This is some text. <img src='../MailerTemplate/images/img_Image.png' alt='Smiley face' align='left'><br/><br/><br/><br/><br/><br/><br/> This is some text.</p>  </div>");
			m_objCnt=m_objCnt + 1;
		}

		if($(droppedObject).attr('id')=="")
		{
			temp="ImageCardTemplateItem"+m_objCnt;
			//Image card
			var tempObj=$('#ImageCardDroppedItem').html();			
			propertydroppedObject= "ImageCardDroppedItem";
			$(droppableObject).append(tempObj);
			$("#ImageCardTemplateItem0").prop("id",temp);
			//$(droppableObject).append("<div id='"+ temp +"' style=' background:#d0d0d0; margin:5px; '> <center><div> <img src='../MailerTemplate/images/img_Image.png' /></div><div>Some Text</div> </center> </div>");
			m_objCnt=m_objCnt + 1;
		}

		if($(droppedObject).attr('id')=="ButtonTemplateItem")
		{
			temp="ButtonTemplateItem"+m_objCnt;
			//Button
			var tempObj=$('#ButtonDroppedItem').html();			
			propertydroppedObject= "ButtonDroppedItem";
			$(droppableObject).append(tempObj);
			$("#ButtonTemplateItem0").prop("id",temp);
			//$(droppableObject).append("<div id='"+ temp +"' style=' background:#d0d0d0; margin:5px; '> <center> <input type='Button' value='Button' /> </center> </div>");
			m_objCnt=m_objCnt + 1;
		}

		if($(droppedObject).attr('id')=="SocialLinksTemplateItem")
		{
			temp="SocialLinksTemplateItem"+m_objCnt;
			//Social Link
			var tempObj=$('#SocialLinksDroppedItem').html();			
			propertydroppedObject= "SocialLinksDroppedItem";
			$(droppableObject).append(tempObj);
			$("#SocialLinksTemplateItem0").prop("id",temp);
			//$(droppableObject).append("<div id='"+ temp +"' style=' background:#d0d0d0; margin:5px; '> <p style='text-align:right'> <img src='../MailerTemplate/images/Twitter.png' alt='Twitter' style='display:inline' /> <img src='../MailerTemplate/images/Twitter.png' alt='Twitter'  style='display:inline' />  <img src='../MailerTemplate/images/Twitter.png' alt='Twitter'  style='display:inline' />  <img src='../MailerTemplate/images/Twitter.png' alt='Twitter'  style='display:inline' />  </p> </div>");
			m_objCnt=m_objCnt + 1;
		}

		if($(droppedObject).attr('id')=="VideoTemplateItem")
		{
			temp="VideoTemplateItem"+m_objCnt;
			//Video
			var tempObj=$('#VideoDroppedItem').html();			
			propertydroppedObject= "VideoDroppedItem";
			$(droppableObject).append(tempObj);
			$("#VideoTemplateItem0").prop("id",temp);
			//$(droppableObject).append("<div id='"+ temp +"' style=' background:#d0d0d0; margin:5px; '> <center> <video src='../MailerTemplate/images/a.mp4' height='200px' width='300px' controls></video> </center> </div>");
			m_objCnt=m_objCnt + 1;
		}

		if($(droppedObject).attr('id')=="DividerTemplateItem")
		{
			temp="DividerTemplateItem"+m_objCnt;
			//Divider
			var tempObj=$('#DividerDroppedItem').html();			
			propertydroppedObject= "DividerDroppedItem";
			$(droppableObject).append(tempObj);
			$("#DividerTemplateItem0").prop("id",temp);
			//$(droppableObject).append("<div id='"+ temp +"' style=' background:#d0d0d0; margin:5px; '> <hr style='border: 0; border-top: 1px solid #ccc;'> </div>");	
			m_objCnt=m_objCnt + 1;
		}

			console.log(m_objCnt);
			//$(droppedObject).html("<div>Item is dropped</div>");

			$(droppableObject).children().filter("#tmp").css({"display":"none"});
//			$(droppableObject).append(droppedObject);
			this.ApplyHoverEvent();
			
	},
	OnTemplateItemDragged : function(draggedObject){
		
	}
});
