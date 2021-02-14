//N0gGSre32HbnqqqSAOnVRXuMM2mCfGRz


async function getGiphy(search) {     
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=N0gGSre32HbnqqqSAOnVRXuMM2mCfGRz&limit=1`);
    addGiphy(res.data.data);
    return res;
}

const button = document.getElementById('button');
const remove = document.getElementById('delete');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let value = document.getElementById('input').value;
    getGiphy(value);
    document.getElementById('input').value = "";
    return null;
});

remove.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.getElementById('answers');
    section.innerHTML = "";
    return null;
});

function addGiphy(results) {
    const section = document.getElementById('answers');
    let giphy = document.createElement('img');
    let url = results[0].images.downsized_medium.url;
    giphy.className = 'giphy';
    giphy.setAttribute('src', url);
    section.append(giphy);
    return;
}