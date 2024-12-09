export function displayData(jsonData) {
    const data = jsonData.data.MediaListCollection;
    const user = data.user;
    const lists = data.lists;

    console.log(data);

    const element = document.getElementById("user");
    element.innerHTML = '';

    const userName = document.createElement("h2");
    userName.setAttribute("class", "userName");
    userName.textContent = user.name;
    element.appendChild(userName);

    lists.forEach((list) => {
        const listItem = createListItem(list);
        listItem.innerHTML += list.entries.map(createMediaElement).join('');
        element.appendChild(listItem);
    })
}

function createListItem(list) {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "list");
    listItem.innerHTML = `<h2 class="list-title">${list.name} (${list.entries.length})</h2>`;
    return listItem;
}

function createMediaElement(media) {
    return `
    <article class="media">
      <img class="media-image" src="${media.media.coverImage.extraLarge}" alt="Cover Image">
      <h3 class="media-title">${media.media.title.english || media.media.title.romaji || media.media.title.native} <span class="score">${media.media.averageScore}%</span></h3>
      <h4 class="media-tags">${formatMediaTags(media)}</h4>
      <hr class="divider" />
      <p class="media-description">${media.media.description}</p>
    </article>
  `;
}

function formatMediaTags(media) {
    return `${media.media.season} | ${media.media.seasonYear} | ${media.media.genres.join(' | ')}`;
}