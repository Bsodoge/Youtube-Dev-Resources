let resourceContainer = document.querySelector('#resource-container');
const loadVideos = async () => {
    let videosJSON = await fetch('./videos.json');
    let videos = await videosJSON.json();
    videos.forEach(video => {
        let card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
                <div class ="yt-container">
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