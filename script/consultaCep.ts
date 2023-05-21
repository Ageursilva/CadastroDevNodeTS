function limpa_formulario_cep() {
  // Limpa valores do formulário de cep.
  (document.getElementById('rua') as HTMLInputElement).value = '';
  (document.getElementById('bairro') as HTMLInputElement).value = '';
  (document.getElementById('cidade') as HTMLInputElement).value = '';
  (document.getElementById('uf') as HTMLInputElement).value = '';
}

function meu_callback(conteudo: any) {
  if (!('erro' in conteudo)) {
    // Atualiza os campos com os valores.
    (document.getElementById('rua') as HTMLInputElement).value = conteudo.logradouro;
    (document.getElementById('bairro') as HTMLInputElement).value = conteudo.bairro;
    (document.getElementById('cidade') as HTMLInputElement).value = conteudo.localidade;
    (document.getElementById('uf') as HTMLInputElement).value = conteudo.uf;
  } else {
    // CEP não Encontrado.
    limpa_formulario_cep();
    document.getElementById('cepInex')!.innerHTML = 'CEP não encontrado';
    setTimeout(function () {
      document.getElementById('cepInex')!.innerHTML = '';
    }, 2000);
  }
}

function pesquisacep(valor: string) {
  // Nova variável "cep" somente com dígitos.
  const cep = valor.replace(/\D/g, '');

  // Verifica se campo cep possui valor informado.
  if (cep !== '') {
    // Expressão regular para validar o CEP.
    const validacep = /^[0-9]{8}$/;

    // Valida o formato do CEP.
    if (validacep.test(cep)) {
      // Preenche os campos com "..." enquanto consulta webservice.
      (document.getElementById('rua') as HTMLInputElement).value = '...';
      (document.getElementById('bairro') as HTMLInputElement).value = '...';
      (document.getElementById('cidade') as HTMLInputElement).value = '...';
      (document.getElementById('uf') as HTMLInputElement).value = '...';

      // Cria um elemento javascript.
      const script = document.createElement('script');

      // Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

      // Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);
    } else {
      // CEP é inválido.
      limpa_formulario_cep();
      document.getElementById('cepInvalido')!.innerHTML = 'Formato do CEP inválido';
      setTimeout(function () {
        document.getElementById('cepInvalido')!.innerHTML = '';
      }, 2000);
    }
  } else {
    // CEP sem valor, limpa formulário.
    limpa_formulario_cep();
  }
}