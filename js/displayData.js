export function displayData(jsonData) {
    const data = jsonData.data.MediaListCollection;
    const user = data.user;
    const lists = data.lists;

    console.log(data);

    const element = document.getElementById("user");
    element.innerHTML = '';

    const userName = document.createElement("h2");
    userName.setAttribute("class", "user-name");
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
    const title = document.createElement("h2");
    title.setAttribute("class", "list-title");
    title.textContent = `${list.name} (${list.entries.length})`;
    listItem.appendChild(title);
    return listItem;
}

function createMediaElement(media) {
    return `
    <a href="${media.media.siteUrl}" style="text-decoration:none;" target="_blank">
      <article class="media">
        <img class="media-image" src="${media.media.coverImage.extraLarge}" alt="Cover Image">
        <h3 class="media-title">${media.media.title.english || media.media.title.romaji || media.media.title.native} <span class="score">${media.media.averageScore}%</span></h3>
        <h4 class="media-tags">${formatMediaTags(media)}</h4>
        <hr class="divider" />
        <p class="media-description">${media.media.description}</p>
      </article>
    </a>
  `;
}

function formatMediaTags(media) {
    return `${media.media.season} | ${media.media.seasonYear} | ${media.media.genres.join(' | ')}`;
}