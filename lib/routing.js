if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('alljobs');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/',{
	name:'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('alljobs');
		}
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/jobs', {
	name: 'jobs',
	action(){
		BlazeLayout.render('MainLayout',{main:'Jobs'});
	}

});

FlowRouter.route('/alljobs', {
	name: 'alljobs',
	action(){
		BlazeLayout.render('MainLayout',{main:'alljobs'});
	}
	});

FlowRouter.route('/master', {
	name: 'master',
	action(){
		BlazeLayout.render('MainLayout',{main:'masterhome'});
	}
	});

FlowRouter.route('/partymaster', {
	name: 'partymaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'partymaster'});
	}
	});

FlowRouter.route('/searchpartymaster', {
	name: 'searchpartymaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'searchpartymaster'});
	}
	});

FlowRouter.route('/searchshippingmaster', {
	name: 'searchshippingmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'searchshippingmaster'});
	}
	});

FlowRouter.route('/searchyardmaster', {
	name: 'searchyardmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'searchyardmaster'});
	}
	});

FlowRouter.route('/searcheyardmaster', {
	name: 'searcheyardmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'searcheyardmaster'});
	}
	});

FlowRouter.route('/getdoc', {
	name: 'getdoc',
	action(){
		BlazeLayout.render('MainLayout',{main:'getdoc'});
	}
	});

FlowRouter.route('/searchtransportmaster', {
	name: 'searchtransportmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'searchtransportmaster'});
	}
	});

FlowRouter.route('/shippingmaster', {
	name: 'shippingmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'shippingmaster'});
	}
	});

FlowRouter.route('/yardmaster', {
	name: 'yardmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'yardmaster'});
	}
	});
FlowRouter.route('/eyardmaster', {
	name: 'eyardmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'eyardmaster'});
	}
	});
FlowRouter.route('/transportmaster', {
	name: 'transportmaster',
	action(){
		BlazeLayout.render('MainLayout',{main:'transportmaster'});
	}
	});
FlowRouter.route('/job/:id', {
	name: 'job',
	action(){
		BlazeLayout.render('MainLayout',{main:'job'});
	}
	});

FlowRouter.route('/job/view/:id', {
	name: 'view',
	action(){
		BlazeLayout.render('MainLayout',{main:'view'});
	}
	});

FlowRouter.route('/:id/orDoc', {
	name: 'orDoc',
	action(){
		BlazeLayout.render('MainLayout',{main:'orDoc'});
	}
	});

FlowRouter.route('/:id/ship', {
	name: 'ship',
	action(){
		BlazeLayout.render('MainLayout',{main:'ship'});
	}
	});

FlowRouter.route('/:id/dorder', {
	name: 'dorder',
	action(){
		BlazeLayout.render('MainLayout',{main:'dorder'});
	}
	});

FlowRouter.route('/:id/yard', {
	name: 'yard',
	action(){
		BlazeLayout.render('MainLayout',{main:'yard'});
	}
	});
FlowRouter.route('/:id/boe', {
	name: 'boe',
	action(){
		BlazeLayout.render('MainLayout',{main:'boe'});
	}
	});
FlowRouter.route('/:id/fssai', {
	name: 'fssai',
	action(){
		BlazeLayout.render('MainLayout',{main:'fssai'});
	}
	});
FlowRouter.route('/:id/pq', {
	name: 'pq',
	action(){
		BlazeLayout.render('MainLayout',{main:'pq'});
	}
	});
FlowRouter.route('/:id/textile', {
	name: 'textile',
	action(){
		BlazeLayout.render('MainLayout',{main:'textile'});
	}
	});
FlowRouter.route('/:id/checked', {
	name: 'checked',
	action(){
		BlazeLayout.render('MainLayout',{main:'docDocks'});
	}
	});
FlowRouter.route('/:id/delivery', {
	name: 'delivery',
	action(){
		BlazeLayout.render('MainLayout',{main:'delivery'});
	}
	});

FlowRouter.route('/:id/bill', {
	name: 'bill',
	action(){
		BlazeLayout.render('MainLayout',{main:'bill'});
	}
	});

FlowRouter.route('/:id/stampduty', {
	name: 'stampduty',
	action(){
		BlazeLayout.render('MainLayout',{main:'stampduty'});
	}
	});
FlowRouter.route('/:id/iGMDetails', {
	name: 'iGMDetails',
	action(){
		BlazeLayout.render('MainLayout',{main:'iGMDetails'});
	}
	});
FlowRouter.route('/addmeraport', {
	name: 'addports',
	action(){
		BlazeLayout.render('MainLayout',{main:'addports'});
	}
	});
FlowRouter.route('/:id/updatejob', {
		name: 'updatejob',
		action(){
			BlazeLayout.render('MainLayout',{main:'updateJob'});
		}
		});
FlowRouter.route('/:id/updateParty', {
			name: 'updateParty',
			action(){
				BlazeLayout.render('MainLayout',{main:'updateParty'});
			}
			});

FlowRouter.route('/:id/updateShipping', {
			name: 'updateShipping',
			action(){
			BlazeLayout.render('MainLayout',{main:'updateShipping'});
			}
			});

FlowRouter.route('/:id/updateTransport', {
			name: 'updateTransport',
			action(){
			BlazeLayout.render('MainLayout',{main:'updateTransport'});
			}
			});

FlowRouter.route('/:id/updateYard', {
			name: 'updateYard',
			action(){
			BlazeLayout.render('MainLayout',{main:'updateYard'});
			}
			});

FlowRouter.route('/:id/updateEmptyYard', {
			name: 'updateEmptyYard',
			action(){
			BlazeLayout.render('MainLayout',{main:'updateEmptyYard'});
			}
			});
