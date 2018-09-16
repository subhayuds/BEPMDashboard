sap.ui.core.Control.extend("com.hcl.BPEMDashboard.control.ColorCircle", {
    metadata : {                              
        properties : {
           	"value" : {type: "string", defaultValue: "All"},
			"size" : {type: "sap.ui.core.CSSSize", defaultValue: "50px"},
			"status" : {type: "string", defaultValue: "default"}	
        },  
        events : {  
            "press" : {}  
        }  
    },
    
    onclick : function(evt) {
        this.firePress();  
    },

    renderer : function(oRm, oControl) {      
		oRm.write("<div"); 
		oRm.writeControlData(oControl);  
		oRm.addStyle("width", oControl.getSize());                                                        
		oRm.addStyle("height", oControl.getSize());
		oRm.addStyle("cursor", "pointer");
		oRm.writeStyles();
		if(oControl.getStatus() == "positive"){
			oRm.addClass("circlegreen-text");
		}else if(oControl.getStatus() == "negetive"){
			oRm.addClass("circlered-text");
		}else if(oControl.getStatus() == "pending"){
			oRm.addClass("circleyellow-text");
		}else{
			oRm.addClass("circle-text");
		}
		
		oRm.writeClasses();               
		oRm.write(">");
		oRm.write("<div>"); 	  
		oRm.write(oControl.getValue());  
		oRm.write("</div>");                                                
		oRm.write("</div>");
    }
});