({
    getFullName : function(component, event, helper) {
        let firstName=component.get("v.FirstName");
        let latsName=component.get("v.LastName");
        let fullName= firstName +' '+ latsName;

        component.set("v.FullName", fullName);
    },
    getpdatableFullName : function(component, event, helper) {
        let firstName=component.getReference("v.FirstName");
        let latsName=component.getReference("v.LastName");
        //let fullName= firstName +' '+ latsName;

        component.set("v.FullName", firstName);
    }
})