sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.hcl.BPEMDashboard.controller.Dashboard", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if(!this._oRouter) this._oRouter = oRouter;
		},
		
		onPressDashboard: function(oEvent) {
			this._oRouter.navTo("CaseList");
		}
	});
});