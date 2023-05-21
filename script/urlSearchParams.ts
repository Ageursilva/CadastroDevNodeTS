// Recupera os dados da URL
// exemplo: ?name=Ageu&surname=Silva

const params = new URLSearchParams(window.location.search);
const nameParam = params.get('name');
const surname = params.get('surname');
const cpfCnpj = params.get('cpfCnpj');
const email = params.get('email');
const telephone = params.get('telephone');
const cep = params.get('cep');
const rua = params.get('rua');
const number = params.get('number');
const bairro = params.get('bairro');
const cidade = params.get('cidade');
const uf = params.get('uf');

const nameInput = document.getElementById('name') as HTMLInputElement;
const surnameInput = document.getElementById('surname') as HTMLInputElement;
const cpfCnpjInput = document.getElementById('cpfCnpj') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const telephoneInput = document.getElementById('telephone') as HTMLInputElement;
const cepInput = document.getElementById('cep') as HTMLInputElement;
const ruaInput = document.getElementById('rua') as HTMLInputElement;
const numberInput = document.getElementById('number') as HTMLInputElement;
const bairroInput = document.getElementById('bairro') as HTMLInputElement;
const cidadeInput = document.getElementById('cidade') as HTMLInputElement;
const ufInput = document.getElementById('uf') as HTMLInputElement;

nameInput.value = nameParam || '';
surnameInput.value = surname || '';
cpfCnpjInput.value = cpfCnpj || '';
emailInput.value = email || '';
telephoneInput.value = telephone || '';
cepInput.value = cep || '';
ruaInput.value = rua || '';
numberInput.value = number || '';
bairroInput.value = bairro || '';
cidadeInput.value = cidade || '';
ufInput.value = uf || '';