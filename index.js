define(function(require){
	var $ = require("jquery");
	var justep = require("$UI/system/lib/justep");

	
	var Model = function(){
		this.callParent();
	};
		Model.prototype.modelLoad = function(event){

	};
	
		Model.prototype.getImgUrl = function(imgUrl){
		return require.toUrl("./img/"+imgUrl);

	};

	return Model;
});