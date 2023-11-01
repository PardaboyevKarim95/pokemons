let elList = document.querySelector(".listt");

pokemons.forEach((item) => {
  let elItem = document.createElement("li");
  elItem.classList = "list-item";

  let elImg = document.createElement("img");
  elImg.src = item.img;
  elImg.alt = "pokemons img";
  elImg.classList = "img";

  let elTitle = document.createElement("h2");
  elTitle.textContent = item.name;
  elTitle.classList = "title";

  let elText = document.createElement("p");
  elText.textContent = `height: ${item.height}`;
  elText.classList = "text";

  let elText2 = document.createElement("p");
  elText2.textContent = `weight: ${item.weight}`;
  elText2.classList = "text2";

  let elWrapper = document.createElement("div");
  elWrapper.append(elText, elText2);
  elWrapper.classList = "wrapper";
  let elMinList = document.createElement("ul");
  elMinList.classList = "min-list";

  item.weaknesses.forEach((minitem) => {
    let elMinItem = document.createElement("li");
    elMinItem.classList = "min-item";
    elMinItem.textContent = minitem;
    elMinList.appendChild(elMinItem);
  });
  elItem.append(elImg, elTitle, elWrapper, elMinList);
  elList.appendChild(elItem);
});
