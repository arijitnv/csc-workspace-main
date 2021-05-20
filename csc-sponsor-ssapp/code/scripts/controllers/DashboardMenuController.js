const { WebcController } = WebCardinal.controllers;

export default class DashboardMenuController extends WebcController {

    constructor(element, history) {

        super(element, history);


        this.model = {
            menu_items : [
                { name: "Dashboard" , url : "/" , id: "menu-dashboard"},
                { name: "New Order" , url : "/new-order", id: "menu-new-order"},
                { name: "Pending Actions" , url : "/pending-actions", id: "menu-pending-actions"},
                { name: "Notifications" , url : "/notifications", id: "menu-notifications"},
            ]
        }

        //For every menu item check which one is the active and add the class
        if(this.model.menu_items){
            this.model.menu_items.forEach ( (item) => {
                if(history.location.pathname === item.url){
                    makeMenuActive(item.id);
                }else{
                    makeMenuInActive(item.id);
                }
            })
        }


        //Add active menu class to element
        function makeMenuActive( element ){
            document.getElementById(element).classList.add("dashboard-tab-active");
        }

        //Remove active menu class to element
        function makeMenuInActive( element ){
            document.getElementById(element).classList.remove("dashboard-tab-active");
        }
    }




}