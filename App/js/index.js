// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button9")
                .setLeft("7.619047619047619em")
                .setTop("6.857142857142857em")
                .setCaption("Pop Menu")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button10")
                .setLeft("19.80952380952381em")
                .setTop("6.857142857142857em")
                .setCaption("Pop Anything")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input21")
                .setLeft("28.952380952380953em")
                .setTop("6.857142857142857em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Hover Pop")
            );
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel11")
                .setDock("none")
                .setLeft("19.80952380952381em")
                .setTop("11.428571428571429em")
                .setWidth("10.742857142857142em")
                .setHeight("15.314285714285715em")
                .setCaption("Pop Window")
            );
            
            append(
                xui.create("xui.UI.List")
                .setHost(host,"xui_ui_list3")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "item 1",
                        "imageClass" : "xui-icon-number1"
                    },
                    {
                        "id" : "b",
                        "caption" : "item 2",
                        "imageClass" : "xui-icon-number2"
                    },
                    {
                        "id" : "c",
                        "caption" : "item 3",
                        "imageClass" : "xui-icon-number3"
                    },
                    {
                        "id" : "d",
                        "caption" : "item 4",
                        "imageClass" : "xui-icon-number4",
                        "disabled" : true
                    }
                ])
                .setLeft("28.952380952380953em")
                .setTop("11.428571428571429em")
                .setWidth("18.285714285714285em")
                .setLabelSize("7.619047619047619em")
                .setValue("a")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});