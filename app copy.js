function pesquisar() {
    // Seleciona o elemento HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o termo de pesquisa digitado pelo usuário e converte para minúsculas
    let campo_pesquisa = document.getElementById("campo-pesquisa").value;
  
    // Torna possivel a leitura de caracteres minúsculos pelo campo de pesquisa, facilitando a comparação
    let pesquisa_minusculo = campo_pesquisa.toLowerCase();
    console.log(pesquisa_minusculo);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item (dado) da lista de dados
    for (let dado of dados) {
      // Variáveis com propriedades dos objetos para minúsculas para facilitar a comparação e uso
      let dado_titulo = dado.titulo.toLowerCase();
      let dado_descricao = dado.descricao.toLowerCase();
      let dado_link = dado.link
      let dado_tag = dado.tag
      
      // Verifica se o título, a descrição, o link ou a tag do dado contém o termo de pesquisa (ignorando maiúsculas e minúsculas)
      // No caso do link, ele é case-sensitive. Então vai usar campo_pesquisa e as tags dos objetos já estão minúsculas
      if (dado_titulo.includes(pesquisa_minusculo) || dado_descricao.includes(pesquisa_minusculo) || dado_link.includes(campo_pesquisa) || dado_tag.includes(campo_pesquisa)) {
        // Cria um elemento HTML para exibir o resultado da pesquisa
        resultados += `
          <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
          </div>
        `;
      }
      if (pesquisa_minusculo == 'todos'){
        resultados += `
          <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais Informações</a>
          </div>
        `;
      }
    }
  
    // Limpa os resultados caso o usuário não tenha digitado nada
    if (!pesquisa_minusculo) {
        section.innerHTML ="<p>Nenhum cientista encontrado. Digite o nome com a acentuação própria ou informações. Tente pesquisar por 'todos' e veja todas as personalidades!!</p>"
        return
    }


    if (!resultados){
        resultados = "<p>Nada foi encontrado. Não se esqueça de acentuar as palavras. Tente pesquisar por 'todos' e veja todas as personalidades!!</p>"
    }
  
    // Atualiza a seção de resultados com os novos dados
    section.innerHTML = resultados;
  }
