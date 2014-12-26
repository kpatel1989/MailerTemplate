 function JsonGenerator(){

}

JsonGenerator.prototype = {
	
	GenerateJson : function(modelData){
		if (!modelData.ids || !modelData.models)
			return null;
		var lstModels = modelData.models;
		var ids = modelData.ids;
		$.each(ids,function(i,item){
			console.log(lstModels[item].toJSON());
		});
	}
}