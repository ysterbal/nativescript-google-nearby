var GoogleNearby = require("nativescript-google-nearby").GoogleNearby;
var googleNearby = new GoogleNearby();

describe("greet function", function() {
    it("exists", function() {
        expect(googleNearby.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(googleNearby.greet()).toEqual("Hello, NS");
    });
});