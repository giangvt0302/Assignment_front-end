window.CategorysController = function ($scope,$http,$routeParams) {
    $scope.category = [];
    $scope.form_category={
      id:"",
      name: "",    
    };
    $scope.vi_tri=-1;

    $http.get(categoryAPI).then(
        function (response) {
           console.log(response);
           response.status === 200
           if (response.statusText === "OK") {
          $scope.category= response.data;
           }
        }
      );
      $scope.deleteCategory=function ($event,$index) {
          $event.preventDefault();//giu lai case co the load lai trang
          let st = $scope.category[$index];
          let api = categoryAPI +"/" + st.id;
          $http.delete(api).then(function () {
            $scope.category.splice($index, 1);
            alert("Xóa thành công");
          });

      };
      ///detail:
      $scope.detailCategory=function(event,index){
        event.preventDefault();
        let st = $scope.category[index];
        $scope.form_category.id=st.id;
        $scope.form_category.name=st.name;
        $scope.vi_tri=index;
       
      };
      $scope.addCategory= function($event){
        $event.preventDefault();
       $http.post(categoryAPI,$scope.form_category).then(function(response){
        $scope.category.push(response.data);
        alert("Thêm thành công");
       });
      };

      $scope.updateCategory = function($event){
        $event.preventDefault();
        if($scope.vi_tri == -1){
          alert("Ban chua chon");
        }
        let st = $scope.category[$scope.vi_tri];
        let api = categoryAPI +"/" + st.id;
        $http.put(api,$scope.form_category).then(function(response){
          $scope.category[$scope.vi_tri] = response.data;
          alert("Cập nhật thành công");
        });      
        };
};