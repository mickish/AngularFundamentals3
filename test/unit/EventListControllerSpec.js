'use strict';

describe('EventListController', function() {
    var scope, $controllerConstructor, mockEventData;

    beforeEach(angular.mock.module("eventsApp"));

    // inject() comes from test/lib/angular/angular-mocks.js
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mockEventData = sinon.stub( {getAllEvents: function() {}});
        $controllerConstructor = $controller;
    }));

    it('should set the scope events to the result of eventData.getAllEvents', function() {
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);

        // The EventListController takes 3 parameters: ($scope, $location, eventData)
        var ctrl = $controllerConstructor("EventListController",
            {$scope: scope, $location: {}, eventData: mockEventData});

        expect(scope.events).to.equal(mockEvents);
    })
});

