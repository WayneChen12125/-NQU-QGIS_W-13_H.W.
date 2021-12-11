var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_map_012tb_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "map_012tb_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/map_012tb_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13428131.768634, 2762680.265885, 13443519.879550, 2774471.661598]
                            })
                        });
var format_2_2 = new ol.format.GeoJSON();
var features_2_2 = format_2_2.readFeatures(json_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_2.addFeatures(features_2_2);
var lyr_2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2_2, 
                style: style_2_2,
                interactive: true,
                title: '<img src="styles/legend/2_2.png" /> 台中歌劇院-火車站區域建築-2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_map_012tb_modified_1.setVisible(true);lyr_2_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_map_012tb_modified_1,lyr_2_2];
lyr_2_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', '圖名代�': '圖名代�', '房屋型�': '房屋型�', '房屋結�': '房屋結�', '建物樓�': '建物樓�', '更新年�': '更新年�', '備註': '備註', });
lyr_2_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', '圖名代�': 'TextEdit', '房屋型�': 'TextEdit', '房屋結�': 'TextEdit', '建物樓�': 'TextEdit', '更新年�': 'TextEdit', '備註': 'TextEdit', });
lyr_2_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', '圖名代�': 'inline label', '房屋型�': 'inline label', '房屋結�': 'inline label', '建物樓�': 'inline label', '更新年�': 'inline label', '備註': 'no label', });
lyr_2_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});