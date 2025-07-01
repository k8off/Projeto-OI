document.addEventListener('DOMContentLoaded', function() {
    // Lógica para o botão de alternar tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');

            // Salva a preferência do usuário no localStorage
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    // Carrega o tema salvo quando a página é carregada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Lógica para o dropdown de Linguagens
    const dropdownMenuItem = document.querySelector('li.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');

    if (dropdownMenuItem && dropdownContent) {
        // Evento para mostrar o dropdown ao passar o mouse sobre o item 'Linguagens'
        dropdownMenuItem.addEventListener('mouseenter', function() {
            dropdownContent.classList.add('show');
        });

        // Evento para esconder o dropdown ao tirar o mouse do item 'Linguagens'
        dropdownMenuItem.addEventListener('mouseleave', function() {
            setTimeout(() => {
                if (!dropdownContent.matches(':hover')) {
                    dropdownContent.classList.remove('show');
                }
            }, 50);
        });

        // Garante que o dropdown não suma se o mouse entrar no conteúdo dele
        dropdownContent.addEventListener('mouseenter', function() {
            dropdownContent.classList.add('show');
        });

        // Esconde o dropdown quando o mouse sai do conteúdo dele
        dropdownContent.addEventListener('mouseleave', function() {
            dropdownContent.classList.remove('show');
        });

        // Opcional: Esconder o dropdown ao clicar fora dele
        document.addEventListener('click', function(event) {
            if (!dropdownMenuItem.contains(event.target) && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }

    // Lógica para o Gráfico de Linhas de Popularidade das Linguagens
    const ctx = document.getElementById('linguagensChart');
    if (ctx) {
        // Dados extraídos do gráfico de referência (GitHub Top 10)
        // Onde 'null' significa que a linguagem não estava no top 10 naquele ano.
        const labels = ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
        const datasets = [
            {
                label: 'JavaScript',
                data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                borderColor: 'red',
                backgroundColor: 'red',
                tension: 0.1
            },
            {
                label: 'Python',
                data: [4, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1],
                borderColor: '#ffc107', // Laranja/Amarelo
                backgroundColor: '#ffc107',
                tension: 0.1
            },
            {
                label: 'Java',
                data: [2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4],
                borderColor: '#fd7e14', // Laranja
                backgroundColor: '#fd7e14',
                tension: 0.1
            },
            {
                label: 'TypeScript',
                data: [null, null, null, 10, 7, 5, 4, 4, 4, 3, 3],
                borderColor: '#0dcaf0', // Azul claro
                backgroundColor: '#0dcaf0',
                tension: 0.1
            },
            {
                label: 'C#',
                data: [8, 7, 6, 6, 6, 7, 5, 5, 5, 5, 5],
                borderColor: '#d63384', // Rosa
                backgroundColor: '#d63384',
                tension: 0.1
            },
            {
                label: 'C++',
                data: [6, 6, 5, 5, 5, 6, 7, 7, 6, 6, 6],
                borderColor: '#6f42c1', // Roxo
                backgroundColor: '#6f42c1',
                tension: 0.1
            },
            {
                label: 'PHP',
                data: [3, 4, 4, 4, 4, 4, 6, 6, 7, 7, 7],
                borderColor: '#198754', // Verde
                backgroundColor: '#198754',
                tension: 0.1
            },
            {
                label: 'Shell',
                data: [9, 9, 9, 8, 9, 9, 9, 8, 8, 9, 8],
                borderColor: '#e994b7', // Rosa
                backgroundColor: '#e994b7',
                tension: 0.1
            },
            {
                label: 'C',
                data: [7, 8, 8, 7, 8, 8, 8, 9, 9, 8, 9],
                borderColor: '#6c757d', // Cinza
                backgroundColor: '#6c757d',
                tension: 0.1
            },
            {
                label: 'Ruby',
                data: [5, 5, 7, 9, 10, 10, 10, 10, 10, 10, 10],
                borderColor: '#90EE90', // Verde claro
                backgroundColor: '#90EE90',
                tension: 0.1
            }
        ];

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Evolução do Ranking de Linguagens de Programação (2014-2024)'
                    }
                },
                scales: {
                    y: {
                        reverse: true,
                        min: 1,
                        max: 10,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }
});