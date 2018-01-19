const elems = document.getElementsByClassName("blob-code-addition");
const unicodeRegex = /([^\x00-\x7F])+/g;

Array.forEach(elems, e => { 
    e.innerHTML = e.innerHTML.replace(unicodeRegex, "<span style=\"background-color: red;\">$&</span>"); 
});