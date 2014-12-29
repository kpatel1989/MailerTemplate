 function JsonGenerator(){

}

JsonGenerator.prototype = {
	pageSettings : null,
	
	SetPageSettings : function(pageStyle){
		this.pageSettings = pageStyle;	
	},
	
	GenerateJson : function(modelData){
		if (!modelData.ids || !modelData.models)
			return null;
		var lstModels = modelData.models;
		var ids = modelData.ids;
		var jsonOutput = {};
		var templateItems = {};
		$.each(ids,function(i,item){
			templateItems[i+1] =lstModels[item].toJSON(); 
		});
		jsonOutput.templateItems = templateItems;
		jsonOutput.pageStyles = this.pageSettings;
		console.log(JSON.stringify(jsonOutput));
		return jsonOutput;
	}
}