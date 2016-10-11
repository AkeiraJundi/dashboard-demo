/**
 *  Dashboard Service
 *  @author: Shayne Weerakoon 
 *  Service to get and format data to be displayed on the dashboard
 */
app.factory('DashboardService', function() {
    var colors = ['#A13030', '#E4882B', '#56932A', '#1D5F8A', '#317C73', '#6E5282'];
    var options = {
        legend: {
            display: true,
            position: 'bottom',
        }
    };
    var primaryDataModel = {
        header: "",
        labels: [],
        data: [],
        colors: colors,
        options: options,
    };
    var drilldownDataModel = {
        header: "",
        labels: [],
        data: [],
        colors: colors,
        options: options,
    };
    var chartModel = {
        uid: "",
        primary: null, //obj of primaryDataModel
        drilldown: null
    };

    function allCharts(callback) {
        var primaryData = {
            header: "Popular Vehicle's 2016",
            labels: ["Car", "Jeep", "SUV", "Van"],
            data: [10, 15, 10, 25],
            colors: colors,
            options: options,
        };
        var drilldownData1 = {
            header: "Car Colours",
            labels: ["Red", "Grey", "Orange", "Black"],
            data: [
                100, 100, 200, 250
            ],
            colors: colors,
            options: options,
        };
        var drilldownData2 = {
            header: "Jeep Colours",
            labels: ["Green", "Grey", "Mixed", "Blue", "Yellow"],
            data: [125, 130, 120, 53, 240],
            colors: colors,
            options: options,
        };
        var drilldownData3 = null;
        var drilldownData4 = {
            header: "Van Colours",
            labels: ["White", "Black"],
            data: [130, 220],
            colors: colors,
            options: options,
        };
        var chart1 = {
            uid: "chart1",
            primary: primaryData, //obj of primaryDataModel
            drilldown: [drilldownData1,drilldownData2,drilldownData3,drilldownData4],
            temp:null
        };
        callback(chart1)
    }
    return {
        getChartData: allCharts
    };
});
//pie model
//    var chartData4 = {
//     uid: "uid1",
//     type: "pie",
//     header: "Trading Partner Profile",
//     labels: ["New", "Registered", "Onboarded", "Pending Registration", "Pending Onboarding", "Active"],
//     data: [40, 40, 50, 40, 40, 50],
//     colors: colors,
//     options: options,
// }
//bar model for bar chart with 3 datasets
//    var chartData2 = {
//         uid: "uid3",
//         hasMore: true,
//         type: "bar",
//         header: "Questionnaire Completion Due Date",
//         labels: ["20/09", "21/09", "22/09", "23/09", "24/09", "25/09", "26/09"],
//         data: [
//             [10, 50, 30, 20, 35, 15, 35],
//             [20, 10, 20, 50, 15, 35, 35],
//             [40, 30, 20, 10, 15, 25, 30]
//         ],
// options:optionsBar,
//         series: [
//             ['New'],
//             ['Pending Completion'],
//             ['Pending Review']
//         ]
//     }
//pie with drill down model
// var chartData4 = {
//     uid: "uid1",
//     type: "pie",
//     header: "Trading Partner Profile",
//     labels: ["New", "Registered", "Onboarded", "Pending Registration", "Pending Onboarding", "Active"],
//     data: [40, 40, 50, 40, 40, 50],
//     colors: colors,
//     options: options,
//     drilldown: {
//         display: false, //set to true when displaying
//         data: [
//             [10, 10, 50, 10, 10, 50],
//             null,
//             null, [20, 30, 50],
//             null, [45, 15, 30]
//         ],
//         labels: [
//             ["AA", "BA", "CA", "DA", "FA", "GA"],
//             null,
//             null, ["AB", "BB", "CB"],
//             null, ["AC", "BC", "CC"]
//         ],
//         header: ["AD 1", "AD 2", "AD 3"],
//         colors: ['#0000ff', '#f5ff31', '#ff00ff']
//     },
//     primary: {
//         header: "Trading Profile",
//         labels: ["New", "Registered", "Onboarded", "Pending Registration", "Pending Onboarding", "Active"],
//         data: [40, 40, 50, 40, 40, 50],
//         colors: colors,
//     }
// }
// 
//     // function prepareFordisplay(chart, callback) {
//     var chartToDisplay = {
//         uid: "uid1",
//         type: chart.config.type,
//         header: chart.config.header,
//         labels: [],
//         data: [],
//         colors: $config.colors,
//         options: $config.options,
//     }
//     for (var i = 0; i < chart.data.length; i++) {
//         chartToDisplay.labels.push(chart.data[i].status);
//         chartToDisplay.data.push(chart.data[i].count);
//         chartToDisplay.uid += chart.data[i].uid;
//     }
//      callback(chartToDisplay)
// }
// function processData(data, callback) {
//     var allCharts = $config.charts
//     var dataCharts = data.result;
//     for (var i = 0; i < allCharts.length; i++) {
//         var currentChart = {
//             config: allCharts[i],
//             data: []
//         };
//         for (var j = 0; j < dataCharts.length; j++) {
//             if (dataCharts[j].moduleName == allCharts[i].moduleName) {
//                 if (dataCharts[j].displayModuleStatistics !== undefined) {
//                     if (dataCharts[j].displayModuleStatistics == 'true') {
//                         currentChart.data.push(dataCharts[j]);
//                     }
//                 }
//             }
//         }
//         prepareFordisplay(currentChart, callback);
//     }
// }
// 
//