var app=angular.module("myApp",[]);
app.controller("myController",["$scope", function($scope){
	$scope.message="MyController";
	$scope.companyName="Tech minds Private limited"
	$scope.userDetails= [{name:"shiva",address:"India"}
                        ,{name:"kumar",address:"Hyderabad"}
                        ,{name:"kiran",address:"AndhraPradesh"}
                        ,{name:"Arvind",address:"Tirupati"}]
	$scope.changeCompanyName=function(){

		$scope.companyName="techmind solutions";
	}

}])
app.directive("myCustomerDetailsDirective",function(){
  return{  
  	restrict: 'EACM',
    templateUrl: 'customerDetails.html',
    replace:true,
    scope:{
     companyName:'@',
     userDetails:'=',
     change:'&'
    },
    compile:function(element,attributes){
    	console.log("In compile !!!")
    	console.log(element)
    	console.log(attributes)
    }


  }
})