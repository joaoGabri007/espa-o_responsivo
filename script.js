document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const botaoTema = document.getElementById('botao-tema');
  
    // Se por acaso o botão não for encontrado, encerra para evitar erros
    if (!botaoTema) return;
  
    // VERIFICA O TEMA SALVO
    const temaSalvo = localStorage.getItem('tema');
  
    if (temaSalvo === 'escuro') {
        body.classList.add('escuro');
        botaoTema.textContent = '☀️ Tema';
    } else {
        body.classList.remove('escuro');
        botaoTema.textContent = '💡 Tema';
    }
  
    // BOTÃO TEMA
    botaoTema.addEventListener('click', function(evento) {
        evento.preventDefault();
  
        body.classList.toggle('escuro');
  
        if (body.classList.contains('escuro')) {
            botaoTema.textContent = '☀️ Tema';
            localStorage.setItem('tema', 'escuro');
        } else {
            botaoTema.textContent = '💡 Tema';
            localStorage.setItem('tema', 'claro');
        }
    });
  });