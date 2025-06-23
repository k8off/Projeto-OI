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
            dropdownContent.classList.add('show'); // Adiciona a classe 'show'
        });

        // Evento para esconder o dropdown ao tirar o mouse do item 'Linguagens'
        dropdownMenuItem.addEventListener('mouseleave', function() {
            // Pequeno atraso para que a transição de saída seja notável
            setTimeout(() => {
                // Remove a classe 'show' apenas se o mouse não estiver mais sobre o conteúdo
                if (!dropdownContent.matches(':hover')) {
                    dropdownContent.classList.remove('show');
                }
            }, 50); // Atraso menor para a saída
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
});