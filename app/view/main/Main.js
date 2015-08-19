/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GMAP.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'GMAP.view.main.MainController',
        'GMAP.view.main.MainModel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
        bind: {
            title: '{name}'
        },
        region: 'west',
        html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
        width: 250,
        split: true,
        tbar: [{
            text: 'Button',
            handler: 'onClickButton'
        }]
    },{
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                    title: 'MAP',
                    layout: 'fit',
                    items: {
                        xtype: 'gmappanel',
                        gmapType: 'map',
                        center: {
                            geoCodeAddr: "221B Baker Street",
                            marker: {
                                title: 'Holmes Home'
                            }
                        },
                        
                        mapOptions: {
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        }
                    }


                }]
    }]
});
