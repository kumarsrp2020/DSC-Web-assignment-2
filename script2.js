let category = "top";

function clicker(headingText) {
    document.querySelectorAll("aside > a").forEach(function(el)
    {
        el.classList.remove("selected");
    });

    document.querySelector(`aside > a.${headingText.toLowerCase()}`).classList.add("selected")

    let heading = document.querySelector('#newsList > h2');
    heading.innerText = headingText + ' Photos';
    category = headingText.toLowerCase();
    fetcher();
}
async function fetcher()
{
    document.querySelector("#imageList").innerHTML = "";

    const resp = await fetch(`https://api.unsplash.com/search/photos/?per_page=20&query=${category}&client_id=HNm2-hzXuzXhDIRNxXk6kSjvAE9ioIjPkaqPGDgKVws`);
    const resp_ids = await resp.json();
    const ids = resp_ids.results
    for(let i = 0 ; i < 20 ; i++)
    {
        const resp=ids[i];
        let description;
        if(resp.alt_description==null)
        {
            description="Nothing to describe";
        }
        else
        {
            description=resp.alt_description
        }
        const inserter =
        `<div><p style="font-size: 0.8rem">${i+1}) ${description}</p></div>` +
        `<div><img src="${resp.urls.full}" width="200" style="margin: 1rem; border-radius: 5px;"></img></div>`;

        document.querySelector("#imageList").insertAdjacentHTML("beforeend", inserter);
    }
}

fetcher();
main();

function planet(){
    clicker("Planet");
}

function music(){
    clicker("Music");
}

function sports(){
    clicker("Sports");
}

function flowers(){
    clicker("Flowers");
}
function cars(){
    clicker("Cars");
}
function monuments(){
    clicker("Monuments");
}
