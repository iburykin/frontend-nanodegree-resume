var name = 'Ivan Burykin';
var role = ' Front-end developer';
var formatedName = HTMLheaderName.replace("%data%", name);
var formatedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formatedName);
$("#header").append(formatedRole);

var test = "audacity";
test = test[1].toUpperCase() + test.slice(2);

console.log(test);
