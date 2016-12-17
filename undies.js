/**
 * Created by boochoo on 17/12/2016.
 */
var names = ["gary", "jerry", "perry", "smith"];

_.each(names, function (el, index, list) {
    console.log("Element : " + el + "Index : " + index );
    console.log("From the List : " + list );
});

var rappers =  [
    { name : "Travis ", last_name : "Scott"},
    { name : "Kanye ", last_name : "West"},
    { name : "Kendrick ", last_name : "Lamar"},
];

_.each(rappers, function (value, key) {
   console.log(value);
});

/*Array with context*/

var people = {
    names : names,
    getMessage : function (name) {
        return "Hello " + name + "!";
    }
};

_.each(people.names, function (el, index, list) {
   console.log(this.getMessage(el));
}, people);

/*Object with context*/

    messager = {
        getGreeting : function () {
            return "Hi ";
        },
        getMessage : function (msg) {
            return this.getGreeting() + msg;
        }
    };
_.each(rappers, function (value, key) {
   console.log(this.getMessage(value.name));
}, messager);