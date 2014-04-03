(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.values = function(map) {
            var values = [];
            for (var key in map) values.push(map[key]);
            return values;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();