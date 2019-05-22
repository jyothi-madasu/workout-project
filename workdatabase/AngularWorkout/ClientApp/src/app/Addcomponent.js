(function () {
    'use strict';

    angular
        .module('app')
        .controller('Addcomponent', Addcomponent);

    Addcomponent.$inject = ['$location'];

    function Addcomponent($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Addcomponent';

        activate();

        function activate() { }
    }
})();
