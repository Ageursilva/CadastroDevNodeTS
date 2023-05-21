function gerarJSON(event: Event) {
  event.preventDefault();
  const form = document.querySelector('.cadastro') as HTMLFormElement;
  const json = {
    nome: (form.querySelector('#name') as HTMLInputElement).value,
    sobrenome: (form.querySelector('#surname') as HTMLInputElement).value,
    cpfCnpj: (form.querySelector('#cpfCnpj') as HTMLInputElement).value,
    email: (form.querySelector('#email') as HTMLInputElement).value,
    telefone: (form.querySelector('#telephone') as HTMLInputElement).value,
    cep: (form.querySelector('#cep') as HTMLInputElement).value,
    rua: (form.querySelector('#rua') as HTMLInputElement).value,
    numero: (form.querySelector('#number') as HTMLInputElement).value,
    bairro: (form.querySelector('#bairro') as HTMLInputElement).value,
    cidade: (form.querySelector('#cidade') as HTMLInputElement).value,
    uf: (form.querySelector('#uf') as HTMLInputElement).value
  };

  const jsonString = JSON.stringify(json);

  const jsonDownload = document.createElement('a');
  jsonDownload.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonString);
  jsonDownload.download = `${json.nome}${json.sobrenome}_${json.cpfCnpj}.txt`;
  jsonDownload.style.display = 'none';
  document.body.appendChild(jsonDownload);

  jsonDownload.click();

  document.getElementById('CadastroRealizado')!.innerHTML = 'Cadastro realizado com sucesso!';
  setTimeout(function () {
    document.getElementById('CadastroRealizado')!.innerHTML = '';
  }, 2000);

  form.reset();
}