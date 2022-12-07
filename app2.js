
var validataionApp = angurlar.module('validationApp', []);


validataionApp.controller('mainController', function ($scope){
    $scope.submitForm = function (isValid){
        if(isValid){
            alert('form is Valid');
        }
    };
});