<<<<<<< HEAD
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
=======
var recipes = new Object ({prop: "1"})

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign (recipes, {prop2: "2"});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.prop2 = "2";
  return recipes;
}

function deleteFromObjectByKey(object, key) {
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
>>>>>>> 4e5525d4cae4dd2c275095c3a4376041d16aefdc
}