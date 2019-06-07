onload = function() {

  var e, i = 0;
  e = document.getElementById('carousel').getElementsByTagName ('div');
      while (e[i++]) {
       e.onmouseover = function () {
       clearTimeout(t);
       }

       e.onmouseout = function () {
       t=setTimeout("timedCount()",timeOut);
       }
}
}

c=0;
timeOut = 5000;
var t;
t=setTimeout("timedCount()",timeOut);

function timedCount() {
var getImage = document.getElementById('carousel').getElementsByTagName('div');
img = getImage.length-1;
   for (var a=0; a<getImage.length; a++) {
       if (getImage[a].className.indexOf("active") == 0) {
           getImage[a].className = 'inactive';
           c = a;
       }
  }
c++;
if (c>img) {c=0;}
getImage[c].className = 'active';
t=setTimeout("timedCount()",timeOut);
}