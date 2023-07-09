document.addEventListener("DOMContentLoaded", async function () {
  try {
    await preecherCard();
  } catch (error) {
    console.error(error);
  }
});

const createCard = (titulo, autor, data) => {
  let cardsContainer = document.getElementById("cards-container");
  let card = document.createElement("div");
  card.className = "card";
  let cardImg = document.createElement("div");
  cardImg.className = "card-img";
  let cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  let autorDateBox = document.createElement("div");
  autorDateBox.className = "autor-date-box";
  let autorLabel = document.createElement("label");
  autorLabel.textContent = autor;
  let dateLabel = document.createElement("label");
  dateLabel.textContent = data;
  let tituloCard = document.createElement("h2");
  tituloCard.textContent = titulo;

  autorDateBox.appendChild(autorLabel);
  autorDateBox.appendChild(dateLabel);

  cardInfo.appendChild(autorDateBox);
  cardInfo.appendChild(tituloCard);

  card.appendChild(cardImg);
  card.appendChild(cardInfo);

  cardsContainer.appendChild(card);
};

const getConteudosData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/conteudos");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const preecherCard = async () => {
  const responseData = await getConteudosData();
  responseData.map((item) => {
    createCard(item.titulo, item.Autor.nome, formatDate(item.createdAt));
  });
};

function formatDate(inputDate) {
  const date = new Date(inputDate);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
}
