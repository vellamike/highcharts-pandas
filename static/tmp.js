a = [1, 2, 14,12]

$(function () { 
    $('#container').highcharts({
        chart: {
            type: 'scatter'
        },
        title: {
            text: 'Example plot'
        },
        xAxis: {
            categories: ['A', 'B', 'C']
        },
        yAxis: {
            title: {
                text: 'Y-dim'
            }
        },
        series: [{
            name: 'Series 1',
            data: a
        }, {
            name: 'Series 2',
            data: [5, 7, 3]
        }]
    });
});
