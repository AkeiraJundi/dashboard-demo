/**
 *  Dashboard Controller
 *  @author: Shayne Weerakoon 
 *  Controller to handle dashboard actions
 */
app.controller('DashboardController', function($scope, DashboardService) {
    $scope.charts = [];
    DashboardService.getChartData(function(data) {
        $scope.charts.push(data);
        return;
    });
    $scope.onClick = function(points, evt) {
        var chartId = evt.target.id;
        if (points.length != 0) {
            if (evt.ctrlKey) {
                $window.location.href = 'http://www.google.com';
                return;
            }
            var labelName = points[0]._model.label;
            var datasetIndex = points[0]._index;
            changeToDrilldown(chartId, labelName, datasetIndex)
        }
    };
    $scope.backClick = function(evt) {
        var chartId = evt.target.id;
        for (var i = 0; i < $scope.charts.length; i++) {
            if ($scope.charts[i].uid === chartId) {
                if ($scope.charts[i].temp !== null) {
                        $scope.charts[i].primary = $scope.charts[i].temp;
                         $scope.charts[i].temp=null;
                }
            }
        }
    }

    function changeToDrilldown(chartId, labelName, datasetIndex) {
        for (var i = 0; i < $scope.charts.length; i++) {
            if ($scope.charts[i].uid === chartId) {
                if ($scope.charts[i].drilldown.length !== 0) {
                    if ($scope.charts[i].temp === null) {
                        if ($scope.charts[i].drilldown[datasetIndex] !== null) {
                            $scope.charts[i].temp = $scope.charts[i].primary;
                            $scope.charts[i].primary = $scope.charts[i].drilldown[datasetIndex];
                        }
                    }
                }
            }
        }
    }
    $scope.gridsterOpts = {
        margins: [10, 10], // the pixel distance between each widget
        floating: true,
        resizable: {
            enabled: false,
        },
        defaultSizeX: 3,
        defaultSizeY: 2,
    };
});
//all options avaible for the grid
// $scope.gridsterOpts = {
//     columns: 6, // the width of the grid, in columns
//     pushing: true, // whether to push other items out of the way on move or resize
//     floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
//     swapping: false, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
//     width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
//     colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
//     rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
//     margins: [10, 10], // the pixel distance between each widget
//     outerMargin: true, // whether margins apply to outer edges of the grid
//     isMobile: false, // stacks the grid items if true
//     mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
//     mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
//     minColumns: 1, // the minimum columns the grid must have
//     minRows: 2, // the minimum height of the grid, in rows
//     maxRows: 100,
//     defaultSizeX: 2, // the default width of a gridster item, if not specifed
//     defaultSizeY: 1, // the default height of a gridster item, if not specified
//     minSizeX: 1, // minimum column width of an item
//     maxSizeX: null, // maximum column width of an item
//     minSizeY: 1, // minumum row height of an item
//     maxSizeY: null, // maximum row height of an item
//     resizable: {
//        enabled: true,
//        handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
//        start: function(event, $element, widget) {}, // optional callback fired when resize is started,
//        resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
//        stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
//     },
//     draggable: {
//        enabled: true, // whether dragging items is supported
//        handle: '.my-class', // optional selector for drag handle
//        start: function(event, $element, widget) {}, // optional callback fired when drag is started,
//        drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
//        stop: function(event, $element, widget) {} // optional callback fired when item is finished dragging
//     }
//     
//     
//     
//     IF USING DRILLDOWNS
//     
//         function changeToDrilldown(chartId, labelName, datasetIndex) {