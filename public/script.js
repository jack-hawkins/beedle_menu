async function loadJson(file)
{
    const res = await fetch(file); 
    return await res.json();
}

async function buildIcons()
{
    let icons = await loadJson("/icons");
    console.log(icons);

    let container = document.querySelector(".container");

    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    
    for(var i of icons)
        row.appendChild(buildCard(i));
}

function buildCard(column)
{
    let col = document.createElement("div");
    col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-2", "mt-4", "d-flex");

    let link = document.createElement("a");
    link.classList.add("text-decoration-none");
    link.href = column.link.startsWith("http") ? column.link : "https://" + column.link;
    link.target = "_blank";
    col.appendChild(link);

    let card = document.createElement("div");
    card.classList.add("card", "text-center", "h-100");
    link.appendChild(card);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "align-content-center");
    card.appendChild(cardBody);

    let image = document.createElement("img");
    image.classList.add("card-img-top");
    image.src = column.image ? column.image : `https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/${column.name}.png`;
    cardBody.appendChild(image);

    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer", "fs-3");
    cardFooter.innerText = column.display;
    card.appendChild(cardFooter);

    return col;
}

buildIcons();
