$(document).ready(function () {
    // Tooltip Initialization
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    $('.input-group.date').datepicker({
        autoclose: true
    });

    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "My First dataset",
            data: [50, 85, 56, 50, 60, 70, 80],
            yAxisID: "y-axis-1",
            borderColor: "#0ad4e6"
        }, {
            label: "My Second dataset",
            data: [35, 45, 75, 40, 55, 73, 82],
            yAxisID: "y-axis-2",
            borderColor: "#f6c63e"
        }]
    }


    var ctx = document.getElementById('myChart').getContext('2d');
    window.myLine = Chart.Line(ctx, {
        data: lineChartData,
        options: {
            responsive: true,
            hoverMode: 'label',
            stacked: false,
            title: {
                display: false,
                text: 'Chart.js Line Chart - Multi Axis'
            },
            animation: {
                duration: 0
            },
            legend: {
                display: false,
                position: 'top',
            },
            scales: {
                xAxes: [{
                    display: true,
                    gridLines: {
                        offsetGridLines: false
                    }
                }],
                yAxes: [{
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                    scaleLabel: {
                        display: true,
                        labelString: "Cost"
                    }
                }, {
                    type: "linear", // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
                    display: true,
                    position: "right",
                    id: "y-axis-2",
                    scaleLabel: {
                        display: true,
                        labelString: "Students",
                    },
                    // grid line settings
                    gridLines: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }],
            }
        }
    })
})