document.addEventListener("DOMContentLoaded", function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/repos/d4vss/d4vss.github.io/git/trees/main?recursive=1', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.tree.forEach(file => {
            if (!file.path.includes('.') && !file.path.includes('/')) {
                var projects = document.querySelector('.projects');
                
                var folder = document.createElement('div');
                projects.appendChild(folder);
                folder.classList.add('project');

                var title = document.createElement('h2');
                folder.appendChild(title);
                title.innerHTML = file.path;

                var folderLink = document.createElement('a');
                folder.appendChild(folderLink);
                folderLink.innerHTML = 'View Project';
                folderLink.target = '_blank';
                folderLink.href = 'https://d4vss.github.io/' + file.path;
            }
            });
        }}
    request.send();
});