module.exports.point = justType('Point', 'POINT');
module.exports.line = justType('LineString', 'POLYLINE');
module.exports.polygon = justType('Polygon', 'POLYGON');

function justType(type, TYPE) {
  return function(gj) {
    var oftype;
    var geometries;
    if (TYPE === 'POLYLINE') {
        oftype = gj.features.filter(isTypePolyline(type));
        geometries = oftype.map(function(t) { return [justCoords(t)]; });
    } else {
        oftype = gj.features.filter(isTypeOthers(type));
        geometries = oftype.map(justCoords);
    }
    return {
      geometries: geometries,
      properties: oftype.map(justProps),
      type: TYPE
    };
  };
}

function justCoords(t) {
  return t.geometry.coordinates;
}

function justProps(t) {
  return t.properties;
}

function isTypePolyline(t) {
    return function(f) { return f.geometry.type === t; };
}

function isTypeOthers(t) {
  return function(f) { return f.geometry.type.replace('Multi', '') === t; };
}