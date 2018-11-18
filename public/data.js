'use strict'
window.addEventListener('load', function(){

    var socket = io();
    let counter = 0;
    socket.on('sending', function(degrees){
        console.log(degrees);
        var datos = document.querySelector('#datos');
        //datos.append(data);
        myChart.data.labels.push(counter);
        myChart.data.datasets.forEach(element => {
            element.data.push(degrees);
        });
        counter++;
        myChart.update();
     });

    var ctx = document.getElementById("chart").getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Temperature"],
        datasets: [{
            label: 'Temperature',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

});