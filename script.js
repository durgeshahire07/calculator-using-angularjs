angular.module('CalculatorApp', [])
.controller('CalculatorController', function($scope) {
    
    $scope.cancel = function() {
      // var a = $scope.curr.toString(); 
      if($scope.res){
        $scope.res = Math.floor($scope.res/10);
        console.log("h")
      }     
      else{
        $scope.curr = Math.floor($scope.curr/10);
      }
    }
    $scope.del = function() {
      $scope.curr = 0;
      $scope.num_a = null
      $scope.res = null
      $scope.sign = ""

    }
    $scope.digit = function(num) {
      $scope.res = null;
        if($scope.curr==0){
          $scope.curr=num;
        }
        else{
          $scope.curr=$scope.curr*10;
          $scope.curr = $scope.curr+num;
          $scope.curr;
        }
        
    };
    $scope.add = function() {
     
      $scope.sign = '+';
      if($scope.res){
        $scope.num_a = $scope.res;
        $scope.res = null;
      }
      else{
        $scope.num_a = $scope.curr;
      }
      $scope.curr = 0;
      
    }
    $scope.sub = function() {
      $scope.sign = '-';
      if($scope.res){
        $scope.num_a = $scope.res;
        $scope.res = null;
      }
      else{
        $scope.num_a = $scope.curr;
      }
      $scope.curr = 0;
      
    }
    $scope.mul = function() {
      $scope.sign = '*';
      if($scope.res){
        $scope.num_a = $scope.res;
        $scope.res = null;
      }
      else{
        $scope.num_a = $scope.curr;
      }
      $scope.curr = 0;
      
    }
    $scope.div = function() {
      $scope.sign = '/';
      if($scope.res){
        $scope.num_a = $scope.res;
        $scope.res = null;
      }
      else{
        $scope.num_a = $scope.curr;
      }
      $scope.curr = 0;
      
    }
    

    $scope.equal = function() {
      if($scope.sign === '+'){
        $scope.res = $scope.curr + $scope.num_a;
        $scope.sign = "";
        $scope.num_a = null
        $scope.curr = null
        
      }
      if($scope.sign === '-'){
        $scope.res = $scope.num_a - $scope.curr;
        $scope.sign = "";
        $scope.num_a = null
        $scope.curr = null
        
      }
      if($scope.sign === '*'){
        
        $scope.res = $scope.curr * $scope.num_a;
        $scope.sign = "";
        $scope.num_a = null
        $scope.curr = null
       
      }
      if($scope.sign === '/'){
        $scope.res = $scope.num_a / $scope.curr;
        $scope.sign = "";
        $scope.num_a = null
        $scope.curr = null
        
      }
    
     
    }
});