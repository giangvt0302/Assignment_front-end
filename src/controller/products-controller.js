window.ProductsController = function ($scope,$http,$routeParams) {
    $scope.products = [];
    $scope.form_products={
      id:"",
      name: "",
      price: "",
      category: "",
      detail: "",
      image: "",
    };
    $scope.vi_tri=-1;
    $scope.searchSp=""
    $scope.Original = function() {
      $scope.searchSp="Original"
    }
    $scope.All= function() {
      $scope.searchSp=""
    }
    $scope.ZeroSugar= function() {
      $scope.searchSp="Zero Sugar"
    }
    $scope.Diet = function() {
      $scope.searchSp="Diet"
    }
    $scope.Special = function() {
      $scope.searchSp="Special"
    }

    $http.get(productAPI).then(
        function (response) {
           console.log(response);
           response.status === 200
           if (response.statusText === "OK") {
          $scope.products= response.data;
           }
        }
      );
      $scope.deleteProduct=function ($event,$index) {
          $event.preventDefault();//giu lai case co the load lai trang
          let st = $scope.products[$index];
          let api = productAPI +"/" + st.id;
          $http.delete(api).then(function () {
            $scope.products.splice($index, 1);
            alert("Xóa thành công");
          });

      };
      ///detail:
      $scope.detailProduct=function(event,index){
        event.preventDefault();
        let st = $scope.products[index];
        $scope.form_products.id=st.id;
        $scope.form_products.name=st.name;
        $scope.form_products.price=st.price;
        $scope.form_products.detail=st.detail;
        $scope.form_products.category=st.category;
        $scope.form_products.image=st.image;
        $scope.vi_tri=index;
       
      };
      $scope.addProduct= function($event){
       $http.post(productAPI,$scope.form_products).then(function(response){
        $scope.products.push(response.data);
        alert("Thêm thành công");
       });
      };

      $scope.updateProduct = function($event){
        $event.preventDefault();
        if($scope.vi_tri == -1){
          alert("Ban chua chon");
        }
        let st = $scope.products[$scope.vi_tri];
        let api = productAPI +"/" + st.id;
        $http.put(api,$scope.form_products).then(function(response){
          $scope.products[$scope.vi_tri] = response.data;
          alert("Cập nhật thành công");
        });      
        };
};