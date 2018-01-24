var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
}

function (cape) {
  var obj = { prop: 1 }
  obj.prop2 = 2
  return obj
}