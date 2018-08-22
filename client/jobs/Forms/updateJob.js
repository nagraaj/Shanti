Template.updateJob.onCreated(function(){
var self =this;
self.autorun(function(){
	self.subscribe('jobCreation');
	self.subscribe('ports');
	self.subscribe('partyMasterDetails');
});
});

Template.updateJob.helpers({
	MC:function(){
			return [{label:'Mail',value:'Mail'},{label:'Courier',value:'Courier'}]
		},
	TOC:function(){
		return [{label:'LCL',value:'LCL'},{label:'20" FCL',value:'20" FCL'},{label:'40" FCL',value:'40" FCL'}]
	},
	port:function(){
		var portCol = Ports.find({},{fields:{name:1}});
			var portarr = [];
			portCol.forEach(function(obj){
				portarr.push({label:obj.name,value:obj.name});
			})
			//console.log(portarr);
			return portarr;
	},
	party:function(){
		var partyCol = PartyMasterDetails.find({},{fields:{ClientName:1}});
			var partyarr = [];
			//console.log(partyCol);
			partyCol.forEach(function(obj){
				partyarr.push({label:obj.ClientName,value:obj.ClientName});
			})
			//console.log(portarr);
			return partyarr;
	},
	poptions:function(){
	return [{label:'FSSAI',value:'FSSAI'},{label:'PQ',value:'PQ'},{label:'FSSAI - PQ',value:'FSSAI - PQ'},
	{label:'ADC',value:'ADC'},{label:'WLRO',value:'WLRO'},{label:'TEXTILE',value:'TEXTILE'},{label:'N/A',value:'N/A'}]
},
jobDoc:function(){
	var id = FlowRouter.getParam('id');
	//console.log(id1._id)
  id1 = JobCreation.findOne({_id:id});
	return id1;
}
});


//AutoForm.hooks({ newJobInsert: { before: { insert: function(doc) { console.log(doc); } }, after: { insert: function(error, result) { console.log('Occured error: ' + error); } }, beginSubmit: function() { console.log('begin submit'); }, onSuccess: function(formType, result) { console.log("Insert succeeded"); console.log('Result ' + result); }, onError: function(formType, error) { console.log('Error!!!'); console.log(error); } } });
AutoForm.addHooks('updateJob', {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
		// alert('Data Inserted');
     console.log(arguments);
     return false;
	 },
   onSuccess:function(id,doc)
   {
     Meteor.call('updateJob',id);
     alert('Data Updated');
     window.history.back();
   }
});
SimpleSchema.debug = true;
