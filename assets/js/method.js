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
        console.log(urls.length);
        if(id != ''){
            var xhr = [];
            for(var i = 0; i < urls.length; i++){
                xhr[i] = new XMLHttpRequest();
                url = urls[i] + id;
                xhr[i].open("GET", url, true);
                xhr[i].onreadystatechange = function () {
                    console.log(xhr[i].status); 
                    if (xhr[i].readyState == 4 && xhr[i].status == 200) {
                        console.log('working'); 
                    }
                };
                xhr[i].setRequestHeader( 'Access-Control-Allow-Origin', '*');
                xhr[i].send();
            }
        }
    });
});