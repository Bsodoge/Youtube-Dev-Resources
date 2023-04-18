let resourceContainer = document.querySelector('#resource-container');
const loadVideos = async () => {
    let videosJSON = await fetch('./videos.json');
    let videos = await videosJSON.json();
    videos.forEach(video => {
        let container = document.createElement('div');
        container.innerHTML = `
            <div class="container">
                <div class ="yt-container">
                    <iframe src="https://youtube.com/embed/${getID(video.url)}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div class="title">${video.title}</div>
            </div>            
        `
        if(video.tags){
            let tagContainer = document.createElement('ul');
            tagContainer.classList.add('tag-container');
            video.tags.forEach(tag => {
                let tagItem = document.createElement('li');
                tagItem.innerText = tag; 
                tagItem.classList.add('tag');
                tagContainer.append(tagItem);
            });
            container.append(tagContainer);
        }

        resourceContainer.append(container);
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