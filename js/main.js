/**
 * Created by applesyl on 2016/11/14.
 *
 */
var app =angular.module("app",[]);
    app.controller("SignUpCtrl",function($scope){
        $scope.userData = {};

        $scope.submitForm = function(){
            //console.log("表单提交了。")
            console.log($scope.userData)
            if($scope.signUpForm.$invalid){
                alert("请查询您的信息.")
            } else{
                alert("提交成功.")
            }
        }

    })
    .directive('compare',function(){
        {
            var  o = {};
            o.strict = 'AE';
            o.scope = {
                orgText : '=compare'
            };
            o.require = 'ngModel';
            o.link = function(sco,ele,att,con){
                con.$validators.compare = function (v) {
                    return v == sco.orgText;
                }
                sco.$watch('orgText',function(){
                    con.$validate();
                })
            }
            return o ;
        }
    })