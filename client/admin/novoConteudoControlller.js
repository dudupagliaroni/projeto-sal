const btnSalvar = document.getElementById("btn-salvar");
const tituloInput = document.getElementById("titulo");
const contentInput = document.getElementById("content");

btnSalvar.addEventListener("click", salvar);

async function salvar() {
  const data = {
    titulo: tituloInput.value,
    conteudo: contentInput.value,
  };
  console.log(data);
  try {
    const req = await axios.post("http://localhost:3000/conteudos", data);
    console.log(req.create());
  } catch (error) {
    console.error(error);
  }
}
