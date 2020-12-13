(function () {
    "use strict";
    angular.module("LunchCheck", [])
        .controller("LunchCheckController", CheckLunch);

    CheckLunch.$inject = ['$scope'];

    function CheckLunch($scope) {
        $scope.lunch_list = "";
        $scope.countLunchList = function () {
            var classname = document.getElementById("message").classList;
            var count = 0;
            var listofLunch = $scope.lunch_list.split(",");//split the string into list of lunchs
            for (var i = 0; i < listofLunch.length; i++) {

                if (listofLunch[i].trim() !== "") {
                    console.log(listofLunch[i]+ " ");//show list of lunches other than empty , white space and 
                    count += 1;// count the list of lunches i.e not included white space, two or more comma separated
                }
            }
            if (count == 0) {
                $scope.message = "Please enter data first!";// if not data entered
                classname.remove("withMessage");
                classname.add("emptyMessage")
            } else if (count <= 3) {
                $scope.message = "Enjoy!";// 1,2 or 3 list of lunches
                classname.add("withMessage");
                classname.remove("emptyMessage")
            } else {
                $scope.message = "Too much!"; // more than3 lunch items
                classname.add("withMessage");
                classname.remove("emptyMessage")
            }
            console.log("you have listed  "+ count+" lunch of items ");
        };

    };

})();