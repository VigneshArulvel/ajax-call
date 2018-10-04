'use strict'

var globalData ;   


function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
              alert('response came'); 
              var parseJson = JSON.parse(xmlhttp.responseText)
              globalData = parseJson
              notifyResponse(parseJson)
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "http://starlord.hackerearth.com/movieslisting", true);
    xmlhttp.send();
}

function notifyResponse(data){
    console.log(data[1]);
    var div5 = document.createElement("div");
    var p5 = document.createElement("p");
    var txt5 = document.createTextNode("List of movies")
    var name = []
    div5.className = "heading2";
    p5.appendChild(txt5);
    div5.appendChild(p5);
    document.getElementById("main").appendChild(div5);
    for (i = 0; i < data.length; i++)
    {
        var div = document.createElement("div");
        // console.log(div.getElementsByTagName("p"));
        name.push(data[i].movie_title);
        var div1 = document.createElement("div");
        var div2 = document.createElement("div"); 
        var body = document.createElement("body");
        var p = document.createElement("p");
        var txt = document.createTextNode(data[i].movie_title + data[i].title_year +" Rating : "+data[i].content_rating)
        div.style.width  = "600px";
        div.style.height = "200px";
        div1.style.cssFloat = "left";
        div1.style.width = "50%";
        div2.style.cssFloat = "right";
        div2.style.width = "50%";
        div.style.marginLeft = "375px";
        div.style.background = "red";
        div.style.color = "white";
        p.className = "ptag";
        p.appendChild(txt);
        var p1 = document.createElement("p");
        p1.className = "ptag1";
        p1.textContent = "Directed by " +  data[i].director_name;
        var p2 = document.createElement("p");
        p2.className = "ptag1";
        p2.textContent = "Starring:";
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        li.textContent = data[i].actor_1_name;
        var li2 = document.createElement("li");
        li2.textContent = data[i].actor_2_name;
        ul.className = "ptag1";
        ul.appendChild(li);
        ul.appendChild(li2);
        div.appendChild(p);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(ul);
        var p3 = document.createElement("p");
        p3.textContent = "Language: "+ data[i].language;
        div2.appendChild(p3); 
        var p4 = document.createElement("p");
        p4.textContent = "Country: "+ data[i].country;
        div2.appendChild(p4);
        var p5 = document.createElement("p");
        p5.textContent = "Genres: "+ data[i].genres;
        div2.appendChild(p5); 
        div.appendChild(div1)
        div.appendChild(div2)
        document.getElementById("main").appendChild(div);
    }
    console.log(name);
}
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    console.log("***************in***********");
    console.log(name);
    // console.log(div);
    // for (i = 0; i < div.length; i++) {
    //     a = div[i].getElementsByTagName("a")[0];
    //     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //         div[i].style.display = "";
    //     } else {
    //         div[i].style.display = "none";
    //     }
    // }
}

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
           if (xmlhttp.status == 200) {
              alert('response came'); 
              var parseJson = JSON.parse(xmlhttp.responseText)
              notifyResponse(parseJson)
           }
           else if (xmlhttp.status == 400) {
              alert('There was an error 400');
           }
           else {
               alert('something else other than 200 was returned');
           }
        }
    };

    xmlhttp.open("GET", "http://starlord.hackerearth.com/movieslisting", true);
    xmlhttp.send();
}

function notifyResponse(data){
    console.log(data[1]);
    var div5 = document.createElement("div");
    var p5 = document.createElement("p");
    var txt5 = document.createTextNode("List of movies")
    var name = []
    div5.className = "heading2";
    p5.appendChild(txt5);
    div5.appendChild(p5);
    document.getElementById("main").appendChild(div5);
    for (let i = 0; i < data.length; i++)
    {
        var div = document.createElement("div");
        // console.log(div.getElementsByTagName("p"));
        name.push(data[i].movie_title);
        var div1 = document.createElement("div");
        var div2 = document.createElement("div"); 
        var body = document.createElement("body");
        var p = document.createElement("p");
        var txt = document.createTextNode(data[i].movie_title + data[i].title_year +" Rating : "+data[i].content_rating)
        div.style.width  = "600px";
        div.style.height = "200px";
        div1.style.cssFloat = "left";
        div1.style.width = "50%";
        div2.style.cssFloat = "right";
        div2.style.width = "50%";
        div.style.marginLeft = "375px";
        div.style.background = "red";
        div.style.color = "white";
        p.className = "ptag";
        p.appendChild(txt);
        var p1 = document.createElement("p");
        p1.className = "ptag1";
        p1.textContent = "Directed by " +  data[i].director_name;
        var p2 = document.createElement("p");
        p2.className = "ptag1";
        p2.textContent = "Starring:";
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        li.textContent = data[i].actor_1_name;
        var li2 = document.createElement("li");
        li2.textContent = data[i].actor_2_name;
        ul.className = "ptag1";
        ul.appendChild(li);
        ul.appendChild(li2);
        div.appendChild(p);
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(ul);
        var p3 = document.createElement("p");
        p3.textContent = "Language: "+ data[i].language;
        div2.appendChild(p3); 
        var p4 = document.createElement("p");
        p4.textContent = "Country: "+ data[i].country;
        div2.appendChild(p4);
        var p5 = document.createElement("p");
        p5.textContent = "Genres: "+ data[i].genres;
        div2.appendChild(p5); 
        div.appendChild(div1)
        div.appendChild(div2)
        document.getElementById("main").appendChild(div);
    }
    console.log(name);
}
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    console.log("***************in***********");
    console.log(name);
    // console.log(div);
    // for (i = 0; i < div.length; i++) {
    //     a = div[i].getElementsByTagName("a")[0];
    //     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //         div[i].style.display = "";
    //     } else {
    //         div[i].style.display = "none";
    //     }
    // }
}