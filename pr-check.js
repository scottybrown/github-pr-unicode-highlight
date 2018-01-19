const elems = document.getElementsByClassName("blob-code-addition");
const unicodeRegex = /([^\x00-\x7F])+/g;

for (var i = 0; i < elems.length; i++) {
    elems[i].innerHTML = elems[i].innerHTML.replace(unicodeRegex, "<span style=\"background-color: red;\">$&</span>"); 
}