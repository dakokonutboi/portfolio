const works = document.querySelectorAll(".jumbotron")

works.forEach((work, index) => {
    if (work.querySelectorAll(".sneakpeak").length > 0) {
        work.innerHTML = work.innerHTML.replace(`<hr class="my4">`, `<hr class="my4"><button type="button" class="btn btn-warning hideshot" style="display: none;" onclick="hideshot(${index})">Hide screenshots</button><button type="button" class="btn btn-primary showshot" onclick="showshot(${index})">Show screenshots</button><br><br>`)
        work.innerHTML = work.innerHTML.replace(`<p class="lead">Technologies used : </p>`, `<button type="button" class="btn btn-warning hideshot" style="display: none;" onclick="hideshot(${index})">Hide screenshots</button><p class="lead">Technologies used :</p>`)
    }
    work.id = `project${index}`
})

function showshot(index){
    works[index].querySelectorAll(".sneakpeak").forEach(img => {
        img.style = "display: block;"
    })
    works[index].querySelector(".showshot").style = "display: none;"
    works[index].querySelectorAll(".hideshot").forEach(button => {
        button.style = "display: block;"
    })
}

function hideshot(index){
    works[index].querySelectorAll(".sneakpeak").forEach(img => {
        img.style = "display: none;"
    })
    works[index].querySelector(".showshot").style = "display: block;"
    works[index].querySelectorAll(".hideshot").forEach(button => {
        button.style = "display: none;"
    })
    window.location = `#project${index}`
}