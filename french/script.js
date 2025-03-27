document.addEventListener('DOMContentLoaded', function() {
    // Investment Chart
    const investmentCtx = document.getElementById('investmentChart').getContext('2d');
    new Chart(investmentCtx, {
        type: 'bar',
        data: {
            labels: ['2023', '2024', '2025', '2026', '2027'],
            datasets: [{
                label: 'Investissement en Technologie Éducative (Millions €)',
                data: [200, 250, 300, 350, 400],
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Investissement (Millions €)'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Chronologie des Investissements en Technologie Éducative'
                }
            }
        }
    });

    // Digital Adoption Rate Chart
    const adoptionCtx = document.getElementById('adoptionChart').getContext('2d');
    new Chart(adoptionCtx, {
        type: 'radar',
        data: {
            labels: ['Digital Literacy', 'AI Integration', 'Virtual Learning', 'Smart Classrooms', 'Online Assessment'],
            datasets: [{
                label: '2023 Current',
                data: [30, 20, 40, 35, 45],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: '#3498db',
                borderWidth: 2
            }, {
                label: '2027 Target',
                data: [85, 70, 90, 95, 88],
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: '#27ae60',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});