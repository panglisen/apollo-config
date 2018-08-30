login_module.controller('LoginController',
                       ['$scope', '$window', '$location', 'toastr', 'AppUtil',
                        LoginController]);

function LoginController($scope, $window, $location, toastr, AppUtil) {
    console.log($location.$$url);
    if ($location.$$url) {
        var params = AppUtil.parseParams($location.$$url);
        console.log("====="+params);
        if (params.error) {
            $scope.info = "用户名或密码错误";
        }
        if (params.logout) {
            $scope.info = "登出成功";
        }
    }

}
