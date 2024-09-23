const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Ain't no tea here.");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
});
