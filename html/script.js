document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const body = document.body;

    // Função para aplicar o tema salvo e atualizar ícones
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
            sunIcon.style.opacity = '0'; // Esconde o sol
            moonIcon.style.opacity = '1'; // Mostra a lua
        } else {
            body.classList.remove('dark-theme');
            sunIcon.style.opacity = '1'; // Mostra o sol
            moonIcon.style.opacity = '0'; // Esconde a lua
        }
    };

    // Aplica o tema salvo ao carregar a página
    applySavedTheme();

    // Adiciona o evento de clique ao botão
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme'); // Alterna a classe 'dark-theme' no body

        // Salva a preferência do usuário no localStorage e alterna os ícones
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
            sunIcon.style.opacity = '0';
            moonIcon.style.opacity = '1';
        } else {
            localStorage.setItem('theme', 'light');
            sunIcon.style.opacity = '1';
            moonIcon.style.opacity = '0';
        }
    });
});