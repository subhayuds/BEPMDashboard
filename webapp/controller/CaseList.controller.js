sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/hcl/BPEMDashboard/control/ColorCircle"
], function (Controller, ColorCircle) {
	"use strict";

	return Controller.extend("com.hcl.BPEMDashboard.controller.CaseList", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.hcl.BPEMDashboard.view.CaseList
		 */
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			if(!this._oRouter) this._oRouter = oRouter;
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.hcl.BPEMDashboard.view.CaseList
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.hcl.BPEMDashboard.view.CaseList
		 */
		onAfterRendering: function() {
			var that = this;
			var oModel = this.getOwnerComponent().getModel("caseListModel");
			this.getView().byId("tabCaseList").setModel(oModel);
			oModel.attachRequestCompleted(function() {
				that.getView().byId("tabCaseList").setModel(oModel);
			});
		}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.hcl.BPEMDashboard.view.CaseList
		 */
		//	onExit: function() {
		//
		//	}

	});
});