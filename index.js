    function cadastrarDica() {
    var material = document.getElementById('material').value;
    var dica = document.getElementById('dica').value;

    if (material && dica) {
    var dicaItem = document.createElement('li');
    dicaItem.textContent = dica;
    dicaItem.classList.add(material);
    document.getElementById('lista-dicas').appendChild(dicaItem);

    // Salva a dica no localStorage
    var dicas = localStorage.getItem('dicas') || '[]';
    dicas = JSON.parse(dicas);
    dicas.push({ material: material, dica: dica });
    localStorage.setItem('dicas', JSON.stringify(dicas));
    } else {
        alert('A campo não pode estar vazio');
    }
}

    function filtrarDicas() {
    var filtro = document.getElementById('filtro').value;
    var dicas = document.getElementById('lista-dicas').getElementsByTagName('li');

    for (var i = 0; i < dicas.length; i++) {
        var dica = dicas[i];
        if (filtro && dica.classList.contains(filtro)) {
            dica.style.display = 'block';
        } else {
            dica.style.display = 'none';
            alert('O material não pertence a nenhum dos materiais cadastrados(Plástico|Metal|Papel|Vidro|Orgânico|Não Reciclável)');
        }
    }
    }

    // Recupera as dicas do localStorage e exibe na lista
    function exibirDicasSalvas() {
        var dicas = localStorage.getItem('dicas');
        if (dicas) {
            dicas = JSON.parse(dicas);
            var listaDicas = document.getElementById('lista-dicas');
            listaDicas.innerHTML = '';

            for (var i = 0; i < dicas.length; i++) {
                (function(index) { // Função anônima imediata para capturar o valor correto de `i`
                var dicaItem = document.createElement('li');
                dicaItem.textContent = dicas[index].dica;
                dicaItem.classList.add(dicas[index].material);

                // Criação do botão de exclusão
                var excluirButton = document.createElement('button');
                excluirButton.textContent = 'X';
                excluirButton.addEventListener('click', function() {
                excluirDica(index);
                });
                dicaItem.appendChild(excluirButton);

                listaDicas.appendChild(dicaItem);
                })(i);
            }
        }
    }

    function excluirDica(index) {
        var dicas = localStorage.getItem('dicas');
        if (dicas) {
        dicas = JSON.parse(dicas);
        dicas.splice(index, 1); // Remove a dica no índice especificado
        localStorage.setItem('dicas', JSON.stringify(dicas));
        exibirDicasSalvas(); // Atualiza a lista de dicas exibidas
        }
    }

    // Chama a função para exibir as dicas salvas ao carregar a página
    window.onload = function() {
    exibirDicasSalvas();
    };

    function exibirHorarios() {
        var bairros = ['Bairro:', 'Nova Esperança', 'Novo Bandeiras', 'Campos Universitarios', 'Dr.João Lima', 'Vale Verde', 'Jose Benedito Catarino'];
        var horarios = ['Horário:', '07:00', '16:00', '07:30', '07:00', '07:30', '16:00'];
        var listaHorarios = document.getElementById('lista-horarios');

        for (var i = 0; i < bairros.length; i++) {
            var horarioItem = document.createElement('li');
            horarioItem.innerHTML = bairros[i] + '<br>' + '<br>' + horarios[i];
            horarioItem.classList.add('bairro'); // Adiciona a classe correspondente ao Bairro
            listaHorarios.appendChild(horarioItem);
        }
    }

