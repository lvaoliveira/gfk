const util = require('../util/util.js');
util.ajax('./api/chart', 'GET').then(function(result) {
    const chart = new Highcharts.chart('main', {
        title: {
            text: 'Percentage of YES answers',
        },
        xAxis: {
            categories: result.categories
        },
        yAxis: {
            title: {
                text: 'Percentage %'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Yes',
            data: result.serie
        }]
    });
  });