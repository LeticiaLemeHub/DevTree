
function modoEscuro() {
    const root = document.documentElement;
    const current = getComputedStyle(root).getPropertyValue('--cor-container-botoes-icon').trim();
    const texto = getSelection('a');
    const buttomModo = document.getElementById('toggle-theme');

    if (current === '#7a6a53') {
        root.style.setProperty('--cor-container-botoes-icon', '#094855');
        root.style.setProperty('--cor-borda', '#ffffff');
        root.style.setProperty('--cor-conteudo-desenho-icon', '#61818a');
        root.style.setProperty('--cor-titulo-nome-botoes-sombra-clara', '#000000');
        root.style.setProperty('--sombras-escura', '#ffffff');
        root.style.setProperty('--cor-paragrafo-hover', '#ffffff');
        root.style.setProperty('--cor-fundo', '#1e1e1e');
        buttomModo.style.color = '#094855';
        buttomModo.className = 'fa-solid fa-sun';

    } else {
        root.style.setProperty('--cor-container-botoes-icon', '#7a6a53');
        root.style.setProperty('--cor-borda', '#5e5140');
        root.style.setProperty('--cor-conteudo-desenho-icon', '#e0d3b8');
        root.style.setProperty('--cor-titulo-nome-botoes-sombra-clara', '#ffffff');
        root.style.setProperty('--sombras-escura', '#000000');
        root.style.setProperty('--cor-paragrafo-hover', '#363027');
        root.style.setProperty('--cor-fundo', '#d6c1a6');
        buttomModo.style.color = '#5e5140';
        buttomModo.className = 'fa-solid fa-moon';

    }
}

