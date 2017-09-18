var app = angular.module("sampleApp", []);
/*
    E for Element name
    A for Attribute
    C for Class
    M for Comment
*/
app.directive("sampleTest", function() {
    return {
        restrict: "A",
        template: "<h1>Directive </h1>"
    }
});


app.directive("applicationTest", function() {
    return {
        restrict: "A",
        scope: {
            'keywordfor': '='
        },
        link: function(scope, element, attrib) {
            scope.$watch('keywordfor', function(condition) {
                if (condition) {
                    element.css('color', 'red');
                    console.log(element);
                    // element[0].style.color = "red";
                } else { element.css('color', 'green'); }
            });
        }
    }
});


app.filter("countrytoUpper", function() {
    return function(string) {
        return string.toUpperCase();
    };
})

app.service("allToUpper", function() {
    this.upperCase = function(txt) { return txt.toUpperCase(); }
});