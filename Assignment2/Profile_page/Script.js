// Settings options
$(document).ready(function () {
    var initialTarget = $('.settings-options li.active').data('target');
    $('#' + initialTarget).addClass('active');
    $('#' + initialTarget).show();
    $('.settings-options li').click(function () {
        $('.settings-options li').removeClass('active');
        $(this).addClass('active');
        var target = $(this).data('target');
        $('.content').removeClass('active');
        $('#' + target).addClass('active');
        $('.content').hide();
        $('#' + target).show();
    });
});

function scrollToEnd() {
    window.scrollTo(0, document.body.scrollHeight);
}

// Piechart
var ctx = document.getElementById('pie-chart').getContext('2d');
var data = {
    labels: ['Netflix', 'PlayStation', 'Xbox', 'Prime', 'YouTube', 'Disney'],
    datasets: [
        {
            data: [30, 25, 15, 10, 12, 8],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'],
        },
    ],
};
var options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: {
                color: 'white',
            },
        },
    },
    plugins: {
        title: {
            display: true,
            text: 'Today Usage',
            color: 'white',
        },
    },
};
var pieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options,
});



var ctx = document.getElementById('bar-chart').getContext('2d');
var data = {
    labels: ['Netflix', 'YouTube', 'PlayStation', 'Prime', 'Xbox', 'Disney'],
    datasets: [
        {
            label: 'Yearly Usage',
            data: [800, 500, 700, 600, 400, 900],
            backgroundColor: '#4bc0c0',
        },
    ],
};

var options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: 'white',
            },
        },
        x: {
            ticks: {
                color: 'white',
            },
        },
    },
    plugins: {
        title: {
            display: true,
            text: 'Yearly Usage',
            color: 'white',
        },
    },
};


// Create the bar chart
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
});
