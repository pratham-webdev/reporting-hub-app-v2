const chartJStemplate = `<div id="chartJS" class="d-flex justify-content-between flex-wrap py-2">
<div class="position-relative" style="height:30vh; width:20vw; margin:auto;"><canvas id="myChart"></canvas></div>
<div class="position-relative" style="height:30vh; width:20vw; margin:auto;"><canvas id="myChart2"></canvas></div>
<div class="position-relative" style="height:30vh; width:25vw; margin:auto;"><canvas id="myChart3"></canvas></div>
</div>`;

$('#card-4').prepend(chartJStemplate);

// simultaneous declaration
const backgroundColors = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
    'rgba(255, 159, 64, 0.5)'
],

borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
],

Dataset1 = [
    {
        name:`Product 1`,
        val:2000.00,
    },
    {
        name:`Product 2`,
        val:1650.00,
    },
    {
        name:`Product 3`,
        val:1400.00,
    },
    {
        name:`Product 4`,
        val:1400.00,
    },
],
Dataset2 = [
    {
        name:`Product 1`,
        val:2000.00,
    },
    {
        name:`Product 2`,
        val:1650.00,
    },
    {
        name:`Product 3`,
        val:1400.00,
    },
    
],
Dataset3 = [
    {
        name:`Product 1`,
        val:2000.00,
    },
    {
        name:`Product 2`,
        val:1650.00,
    },
    {
        name:`Product 3`,
        val:1400.00,
    },
    {
        name:`Product 4`,
        val:1400.00,
    },
    {
        name:`Product 5`,
        val:500.00,
    },
    {
        name:`Product 6`,
        val:1050.00,
    },
],

 chartData1=  {
    labels: Dataset1.map(el => `${el.name} : ${el.val}`),
    datasets: [{
        label: '# of Votes',
        data: Dataset1.map(el => el.val),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 0
    }]
},

chartData2=  {
    labels: Dataset2.map(el => `${el.name} : ${el.val}`),
    datasets: [{
        label: '# of Votes',
        data: Dataset2.map(el => el.val),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 0
    }]
},

chartData3=  {
    labels: Dataset3.map(el => `${el.name} : ${el.val}`),
    datasets: [{
        label: '# of Votes',
        data: Dataset3.map(el => el.val),
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 0
    }]
},

optionsChart1={
    responsive:true,
    maintainAspectRatio:false,
    plugins: {
        legend: {
          position: 'left',
        },
        title: {
          display: true,
          text: 'Total Spend by Category'
        }
      },
},
optionsChart2={
    responsive:true,
    maintainAspectRatio:false,
    plugins: {
        legend: {
          position: 'left',
        },
        title: {
          display: true,
          text: 'Store Sales Trend'
        }
      },
},
optionsChart3={
    responsive:true,
    maintainAspectRatio:false,
    plugins: {
        legend: {
          position: 'left',
        },
        title: {
          display: true,
          text: 'Proportion of Sales'
        }
      },
};

const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data:chartData1,
    options: optionsChart1
});

const ctx2 = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data:chartData2,
    options: optionsChart2
});

const ctx3 = document.getElementById('myChart3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data:chartData3,
    options: optionsChart3
});