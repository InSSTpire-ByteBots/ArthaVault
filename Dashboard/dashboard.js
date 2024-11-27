document.addEventListener("DOMContentLoaded", function () {
    const graph = document.querySelector('#myPieChart').getContext('2d');
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Colors Distribution',
          data: [12, 19, 3, 5, 2, 20], // Data values
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)'
          ],
          borderWidth: 1
        }]
      };
      const config = {
        type: 'pie', // Type of the chart
        data: data
      };

      new Chart(graph,config);

})