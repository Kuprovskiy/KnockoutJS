// Main viewmodel class
define(['scripts/knockout-3.0.0'], function(ko) {
    return function appViewModel() {
        this.firstName = ko.observable('Bert');
        this.firstNameCaps = ko.computed(function() {
            return this.firstName().toUpperCase();
        }, this);
    };
});