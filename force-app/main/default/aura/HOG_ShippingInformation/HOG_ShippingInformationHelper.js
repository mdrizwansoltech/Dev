({
	
    getClientId: function(component, event ) {
       
      var action = component.get('c.getclient');  
        action.setParams({  
              
            clientId : component.get("v.selectedClientId")  
              
        });  
        
        action.setCallback(this, function(response) {  
              
            var state = response.getState();  
            if ( state === 'SUCCESS' && component.isValid() ) {  
                  
                component.set('v.clientName', response.getReturnValue());  
                
               //alert(JSON.stringify(response.getReturnValue()));   
            }   
              
        });  
        $A.enqueueAction(action);  
    },
    isFormValid: function (component) {
    return (component.find('shipNamevalidation') || [])
        .filter(function (i) {
            var value = i.get('v.value');
            return !value || value == '' || value.trim().length === 0;
        })
        .map(function (i) {
            return i.get('v.fieldName');
        });
},
    //Helper method to display the error toast message
    showToast : function(type,title,message) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : title,
            message: message,
            duration:'10000',
            key: 'info_alt',
            type: type,
            mode: 'dismissible'
        });
        toastEvent.fire(); 
    } 
    
    
})