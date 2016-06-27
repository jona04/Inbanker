
module.exports = function(doc) {

	//doc._id = doc.data._id['$oid']; 

	//pegamos a data do evento usando $data para saber que eh uma data
  	var data_evento = doc.data["datetime"].$date;
  	//pegamos a data atual
	var data_hoje = new Date().getTime();

	//verificamos se o evento ja aconteceu e retornamos apenas os que estao para acontecer
	if(data_hoje < data_evento){

		return doc;
		//return _.omit(doc, ["nome"]);
	}
  	return false;
	
}
