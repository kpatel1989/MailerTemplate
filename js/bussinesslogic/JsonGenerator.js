 function JsonGenerator(){

}

JsonGenerator.prototype = {
	
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
		console.log(jsonOutput);
	}
}