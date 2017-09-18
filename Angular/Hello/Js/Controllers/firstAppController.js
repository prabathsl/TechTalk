app.controller("firstController", function($scope, allToUpper) {
    $scope.title = allToUpper.upperCase("Hello Angular");
    // $scope.name = "Saman";
});

app.controller("secondController", function($scope) {
    $scope.angularList = ["Directives", "Filters",
        "Factory", "Services",
        "http", "events",
        "broadcast"
    ];
});

app.controller("thirdController", function($scope) {
    $scope.getSumFunction = function() {
        $scope.answer = 0;

        $scope.answer = $scope.firstNumber + $scope.secondNumber;
    }
});


app.controller("fourthController", function($scope, $http) {
    $scope.isLoading = false;
    $scope.orderByEle = function(param) {
        $scope.parameter = "-" + param;
    }


    $http.get("https://www.w3schools.com/angular/customers.php")
        .then(function(response) {
                $scope.isLoading = true;
                $scope.angularList = response.data.records;
            },
            function(error) {
                $scope.angularList = ["Directives", "Filters",
                    "Factory", "Services",
                    "http", "events",
                    "broadcast"
                ];
                $scope.isLoading = true;
            });
});