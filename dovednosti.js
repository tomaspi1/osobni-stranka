const ctx = document.getElementById('experienceChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JS', 'PHP', 'SQL', 'HTML/CSS', 'Git', 'TypeScript'],
        datasets: [{
            label: '',  // Prázdný popisek
            data: [4, 3, 1, 5, 3, 2],
            backgroundColor: ['rgba(255, 255, 0, 0.6)', '#f66', '#fc6', '#36afdb', '#9966ff', '#ff9f40'],
            borderColor: 'rgba(0, 0, 0, 0)',  // Průhledná barva rámečku
            borderWidth: 0,  // Nulová tloušťka rámečku
            barPercentage: 0.8,
            categoryPercentage: 0.6  // Zvětšení výšky sloupce
        }]
    },
    options: {
        scales: {
            x: {
                ticks: { stepSize: 1 },
                grid: { display: false },  // Skryje mřížku
            },
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { display: false }  // Skryje legendu
        }
    }
});