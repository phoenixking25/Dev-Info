var urls = [
    'https://www.linkedin.com/in/',
    'https://github.com/', 
    'https://www.facebook.com/', 
    'https://www.hackerrank.com/', 
    'https://www.codechef.com/users/',
    'http://www.spoj.com/users/',
    'https://angel.co/',
    'https://twitter.com/'
];

$(document).ready(function() {
    $('#search').click(function() {
        var id = document.getElementById('userid').value;
        for (var i = 0; i < urls.length; i++) 
        checkStatus(urls[i] + id);
    });
});

function createButton(provider, url) {
    var div = document.getElementById('link-buttons');
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode(provider);
    btn.className = "btn btn-success";
    btn.style.margin = '1%';
    btn.addEventListener('click', function(){ window.open(url); });
    btn.appendChild(t);
    div.appendChild(btn);
}

function checkStatus(siteurl) {
    $.ajax({
        type: 'POST',
        url: siteurl,
        data: '',
        dataType: 'json',
        complete: function(xhr) {
            console.log(xhr.status);
        } 
      });
}