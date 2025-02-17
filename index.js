var recipes = new Object ({prop: 1})

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = 2;
  return object;
}

function deleteFromObjectByKey(object, key) {
 var object2 = Object.assign({}, object);
 delete object2[key];
 return object2;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}