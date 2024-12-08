export function displayData(jsonData) {
    const data = jsonData.data.MediaListCollection;
    const user = data.user;
    const lists = data.lists;

    const element = document.getElementById("user");
    element.innerHTML = '';

    const userName = document.createElement("h2");
    userName.setAttribute("class", "userName");
    userName.textContent = user.name;
    element.appendChild(userName);

    lists.forEach((list) => {
        const listItem = document.createElement("li");
        listItem.textContent = list.name;
        element.appendChild(listItem);
    })
}