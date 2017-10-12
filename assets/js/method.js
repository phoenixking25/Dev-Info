var urls = {
    LinkedIn:'https://www.linkedin.com/in/',
    Github: 'https://github.com/',
    Facebook: 'https://www.facebook.com/',
    Hackerrank: 'https://www.hackerrank.com/',
    Codechef: 'https://www.codechef.com/users/',
    SPOJ: 'http://www.spoj.com/users/',
    Angellist: 'https://angel.co/',
    Twitter: 'https://twitter.com/'
};

$(document).ready(function() {
    $('#search').click(function() {
        var foo = document.getElementById('link-buttons');
        while (foo.firstChild) foo.removeChild(foo.firstChild);
        var id = document.getElementById('userid').value;
        for (var i in urls){
            provider = i;
            checkStatus(provider ,urls[i] + id);
        }
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

function checkStatus(provider, siteurl) {
    $.ajax({
        type: 'GET',
        url: siteurl,
        data: '',
        dataType: 'json',
        complete: function(xhr) {
            if (xhr.status != 404)
            {
                createButton(provider, siteurl);
            }
        } 
      });
}