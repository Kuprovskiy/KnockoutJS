require(['scripts/knockout-3.0.0', 'scripts/appViewModel'], function(ko, appViewModel) {
    ko.applyBindings(new appViewModel());
});