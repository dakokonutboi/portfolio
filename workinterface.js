function showScreenshots(project){
    const images = document.getElementById("imagesproject" + project)
    const showImagesButton = document.getElementById("showimagesproject" + project)
    images.style = "display: block;"
    showImagesButton.style = "display: none;"
}

function hideScreenshots(project){
    const images = document.getElementById("imagesproject" + project)
    const showImagesButton = document.getElementById("showimagesproject" + project)
    images.style = "display: none;"
    showImagesButton.style = "display: block;"
}