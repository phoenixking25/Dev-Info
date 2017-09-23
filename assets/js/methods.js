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
var result = true;
$(document).ready(function(){
    $("#search").click(function(){
        var id = document.getElementById('userid').value;
        if(id != ''){
            for(var i in urls){
                provider = i;
                idChecker(provider, urls[i] + id);
                
            }
        }
        else{
            alert('Enter UserId');
        }
    });
});

function idChecker(provider, url){    
    var xmlhttp = new XMLHttpRequest();
    fetch(url)
        .then(resp => {
            console.log(resp)
            createButton(provider, url);            
        });
    xmlhttp.withCredentials = true;
    xmlhttp.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.status, provider);
            createButton(provider, url);
        }
      });
    xmlhttp.open("GET", url);
    xmlhttp.send();
}

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

