const resourceContainer = document.querySelector('#resource-container');
const searchBar = document.querySelector('#search');
const menu = document.getElementById('menu');

let videoInformation = [];
searchBar.addEventListener('input', (e) => {
    let searchValue = e.target.value.toLowerCase().trim().replace(/\s{2,}/g,' ');
    videoInformation.forEach(video => {
        let isVisible = video.title.toLowerCase().includes(searchValue) || video.tags.some((tag) => tag.toLowerCase().includes(searchValue));
        video.videoCard.classList.toggle('hidden', !isVisible);
    });
});

const toggleMenu = () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

const loadVideos = async () => {
    let videosJSON = await fetch('./videos.json');
    let videos = await videosJSON.json();
    videoInformation = videos.map(video => {
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
                <div class ="video-container">
                    <iframe src="https://youtube.com/embed/${getID(video.url)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="title">${video.title}</div>
        `
        if(video.tags){
            if(video.tags.length > 3) video.tags.splice(3);
            let tagContainer = document.createElement('ul');
            tagContainer.classList.add('tag-container');
            video.tags.forEach(tag => {
                let tagItem = document.createElement('li');
                tagItem.innerText = tag; 
                tagItem.classList.add('tag');
                tagContainer.append(tagItem);
            });
            card.append(tagContainer);
        }
        resourceContainer.append(card);
        return {title : video.title, tags: video.tags, videoCard: card}
    });
}
const getID = (url) => {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    }
}
loadVideos();