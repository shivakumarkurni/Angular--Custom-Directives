var app=angular.module("myApp",[]);
app.controller("myController",["$scope", function($scope){
	$scope.message="MyController";
}])
app.directive("myCustomerDetailsDirective",function(){
  return{  
  	restrict: 'EACM',
    template:"<h1>This is DetailsDirective</h1>",
    replace:true
  }
})