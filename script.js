var themeColors = Array.from(document.querySelectorAll('[name = "theme"]'));
const storeTheme = function(theme) {
    localStorage.setItem('theme',theme);
}

const applyTheme = function() {
    const activeTheme = localStorage.getItem('theme');
    document.getElementById(activeTheme).checked = true;
}
themeColors.forEach((themeOption) => {
    themeOption.addEventListener('click',() => {
        storeTheme(themeOption.id);
    })  
})
document.onload = applyTheme();

const xhr = new XMLHttpRequest;

xhr.onload = function(){
    var data = JSON.parse(this.response);
    const movie_grid = document.getElementById('show');
    console.log(data);
    movie_grid.innerHTML = ``;
    for(var i = 0; i < data.length; i++) {
        var newItem = document.createElement('img')
        newItem.src = data[i].show.image.medium;
        movie_grid.appendChild(newItem);
    }
    console.log(data);
}


document.getElementById('search-bar-btn').addEventListener('click',(e) => {
    let movie = document.getElementById('search-bar').value;
    const url = " https://api.tvmaze.com/search/shows?q=" + movie;
    xhr.open("GET",url);
    e.preventDefault();
    xhr.send();
})