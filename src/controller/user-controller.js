window.UserController = function ($scope,$http,$routeParams) {
    $scope.user = [];
    $scope.form_user={
      id:"",
      username: "",
      newpassword: "",
      role:"customer",
      password: "",
      };
    $scope.vi_tri=1;
    var ig = true;
    
    $http.get(userAPI).then(
        function (response) {
           console.log(response);
           response.status === 200;
           if (response.statusText === "OK") {
          $scope.user= response.data;
           }
        }
      );
     
      $scope.Login= function(event){
        event.preventDefault();
        
        if($scope.form_user.username.length == 0 || $scope.form_user.password.length == 0){
          alert("Please enter a username && password");
          return;
        }
        $scope.user.forEach(st=> {
          if($scope.form_user.username == st.username && $scope.form_user.password == st.password && st.role=="customer" ){
            alert("Success");  
            window.open("/src/index.html");
            // window.location.href = "";
            return true;
          }else if($scope.form_user.username == st.username && $scope.form_user.password == st.password && st.role=="admin"){
            alert("Success");  
            window.open("/src/index1.html");
            return true;
          }
          else {
            alert("Wrong username and password"); 
            return false;  
          }
        }); 
      };

      $scope.Register = function(event) {
        event.preventDefault();
        $http.post(userAPI,$scope.form_user).then(function(response) {
          $scope.user.push(response.data);
          alert("Success");
        })
      }

      $scope.Change = function(event){
        event.preventDefault();
        if($scope.form_user.username.length == 0 || $scope.form_user.password.length == 0 || $scope.form_user.newpassword.length == 0){
          alert("Please enter a username && password && new password");
        }
        $scope.user.forEach(st=> {
          if($scope.form_user.username == st.username && $scope.form_user.password == st.password && $scope.form_user.newpassword != st.password) {
        $scope.form_user.newpassword == st.password
          alert("Success");
          }else {
            alert("Wrong username and password");   
          }
        });
      };

     
};