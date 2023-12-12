var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Arrondissement_Dassa_1 = new ol.format.GeoJSON();
var features_Arrondissement_Dassa_1 = format_Arrondissement_Dassa_1.readFeatures(json_Arrondissement_Dassa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arrondissement_Dassa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrondissement_Dassa_1.addFeatures(features_Arrondissement_Dassa_1);
var lyr_Arrondissement_Dassa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arrondissement_Dassa_1, 
                style: style_Arrondissement_Dassa_1,
                interactive: true,
                title: '<img src="styles/legend/Arrondissement_Dassa_1.png" /> Arrondissement_Dassa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Arrondissement_Dassa_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Arrondissement_Dassa_1];
lyr_Arrondissement_Dassa_1.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', 'Pop': 'Pop', 'Actif Agri': 'Actif Agri', });
lyr_Arrondissement_Dassa_1.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', 'Pop': 'TextEdit', 'Actif Agri': 'TextEdit', });
lyr_Arrondissement_Dassa_1.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', 'Pop': 'no label', 'Actif Agri': 'no label', });
lyr_Arrondissement_Dassa_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});