let nesButton = document.querySelector("#nes");
nesButton.addEventListener("click", nesInfo);

function nesInfo(response) {
  response.preventDefault();
  let nesImage = document.querySelector("#nesImage");
  nesImage.classList.add("bigger");
  nesImage.classList.remove("smaller");

  let snesImage = document.querySelector("#snesImage");
  snesImage.classList.remove("bigger");
  snesImage.classList.add("smaller");

  let gbImage = document.querySelector("#gbImage");
  gbImage.classList.remove("bigger");
  gbImage.classList.add("smaller");

  let psImage = document.querySelector("#psImage");
  psImage.classList.remove("bigger");
  psImage.classList.add("smaller");

  let nesText = document.querySelector("#text");
  nesText.innerHTML = `<div id="textBox" ><p><strong>Nintendo Entertainment System (NES)</strong> was first released in Japan in 1983 and entered the American market 2 years later. It is on of the best-selling consoles of its time and featured a number of groundbreaking games that are still considered classic games today. These are games as Super Mario Bros (1985), The Legend of Zelda and Metroid(1986). The console was available from 1983-1995.</p>Learn more <a href="https://en.wikipedia.org/wiki/Nintendo_Entertainment_System">Wikipedia</a></div>`;
}

let snesButton = document.querySelector("#snes");
snesButton.addEventListener("click", snesInfo);

function snesInfo(response) {
  response.preventDefault();
  let snesImage = document.querySelector("#snesImage");
  snesImage.classList.add("bigger");
  snesImage.classList.remove("smaller");

  let nesImage = document.querySelector("#nesImage");
  nesImage.classList.remove("bigger");
  nesImage.classList.add("smaller");

  let gbImage = document.querySelector("#gbImage");
  gbImage.classList.remove("bigger");
  gbImage.classList.add("smaller");

  let psImage = document.querySelector("#psImage");
  psImage.classList.remove("bigger");
  psImage.classList.add("smaller");

  let snesText = document.querySelector("#text");
  snesText.innerHTML = `<p><div id="textBox" ><p><strong>Super Nintendo Entertainment System (SNES)</strong> was released in 1990 in Japan and a year later in North America. Though being released relatively late compared to other consoles with same  graphic and sound capabilities, it managed to become the best-selling console of the 16-bit era (Sega Genesis being the biggest competitor). SNES was available in stores from 1990-2003.</p>Learn more <a href="https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System">Wikipedia</a></div>`;
}

let gbButton = document.querySelector("#gb");
gbButton.addEventListener("click", gbInfo);

function gbInfo(response) {
  response.preventDefault();
  let gbImage = document.querySelector("#gbImage");
  gbImage.classList.add("bigger");
  gbImage.classList.remove("smaller");

  let nesImage = document.querySelector("#nesImage");
  nesImage.classList.remove("bigger");
  nesImage.classList.add("smaller");

  let snesImage = document.querySelector("#snesImage");
  snesImage.classList.remove("bigger");
  snesImage.classList.add("smaller");

  let psImage = document.querySelector("#psImage");
  psImage.classList.remove("bigger");
  psImage.classList.add("smaller");

  let snesText = document.querySelector("#text");
  snesText.innerHTML = `<p><div id="textBox" ><p><strong>Game Boy</strong> was first released in 1989. It was Nintendo´s second handheld game console. Sadly it was considered technologically inferior to its competitor as it lacked features as backlight and had a bulky design. Nonetheless it outsold the competition. Production of the Game Boy continued until 2003, which is well after the release of the Game Boy Advanced (2001).</p>Learn more <a href="https://en.wikipedia.org/wiki/Game_Boy">Wikipedia</a></div>`;
}

let psButton = document.querySelector("#ps");
psButton.addEventListener("click", psInfo);

function psInfo(response) {
  response.preventDefault();
  let psImage = document.querySelector("#psImage");
  psImage.classList.add("bigger");
  psImage.classList.remove("smaller");

  let nesImage = document.querySelector("#nesImage");
  nesImage.classList.remove("bigger");
  nesImage.classList.add("smaller");

  let gbImage = document.querySelector("#gbImage");
  gbImage.classList.remove("bigger");
  gbImage.classList.add("smaller");

  let snesImage = document.querySelector("#snesImage");
  snesImage.classList.remove("bigger");
  snesImage.classList.add("smaller");

  let snesText = document.querySelector("#text");
  snesText.innerHTML = `<p><div id="textBox" ><p><strong>PlayStation</strong> was first released in 1994, and worldwide the year after. The console was popular for its large game library and low retail price. Its use of compact discs was the first step in transitioning from the traditional cartridges. Production was continued until 2006.</p>Learn more <a href="">Wikipedia</a></div>`;
}

let themeButton = document.querySelector("#theme");
themeButton.addEventListener("click", changeTheme);

function changeTheme(response) {
  response.preventDefault();
  let theme = document.querySelector("#container");
  theme.classList.add("backgroundPicture");
}
