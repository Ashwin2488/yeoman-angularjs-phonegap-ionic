
angular.module('ajoslin.scrolly')
.config(['$scrollerProvider', function($scrollerProvider) {
    //If we support desktop in docs, it blocks mousewheel on everything
    $scrollerProvider.supportDesktop(false);
}]);
