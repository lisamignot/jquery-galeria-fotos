$(document).ready(function(){
    //alert("Olá mundo!") -- testando a integração do Jquery

    //console.log(document.querySelector('header button')) -- encontra botão que está no header

    //console.log($('#botao-cancelar')) -- encontra o elemento vinculado à id="botao-cancelar"

    $('header button').click(function() {       
        $('form').slideDown()
    })  //encontra o botão no header e atribui a função: ao clicar o formnulário aparecerá deslizando para baixo na tela 

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })   //encontra o botao-cancelar e atribui a função de retirar o formulário da tela (deslizando para cima)


    $('form').on('submit', function(e) {
        e.preventDefault()
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val() //cria constante para receber o valor inserido no input
        const novoItem = $('<li style="display: none"></li>') //cria constante para receber novos itens, que serão aqueles inseridos dentro das tags <li>

        $(`<img src="${enderecoDaNovaImagem}"/>`).appendTo(novoItem) //chama o elemento imagem e vincula ele à constante criada pelo input, e adiciona essa imagem dentro do <li>

        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" tittle="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem)

        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(3000) //define o tempo de aparecimento da nova imagem na tela do navegador (foi adicionado à constante acima um style inline none para que ela não apareça automaticamente assim que inserida)

        
        $('#endereco-imagem-nova').val('') //limpa formulário após inserir imagem nova
    })    
    
    
    
    
    //encontra botão submit dentro do form e retira a atividade padrão de resetar o formulário e atualizar a página
})