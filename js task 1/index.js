let comment = document.getElementById("comment");
function f1()
{
    if(comment.style.fontWeight== "900" )
    {
        comment.style.fontWeight = "100" ;
    }
    else
    {
        comment.style.fontWeight = "900" ;
    
    }
}
function f2()
{
    
    if(comment.style.fontstyle == "italic")
    {
        comment.style.fontStyle = "normal" ;
    }
    else
    {
        comment.style.fontStyle = "italic";
    }
}
function f3() { 
    
    if(comment.style.textDecoration == "none")
    {
        comment.style.textDecoration = "underline"; 
    }
    else{
        comment.style.textDecoration = "none";
    }
} 
function f4()
{
    comment.value=comment.value.toUpperCase();
    // let a=comment;
    // for(var b=a.length;b>=0;b--)
    // {
    //     if(a[b]>=65 || a[b]<=90)
    //     {
    //         a[b]+=32;
    //     }
    //     else
    //     {
    //         continue;
    //     }
    // }
}
function f5()
{
    comment.value= comment.value.toLowerCase();
    // let a=comment;
    // for(var b=a.length;b>=0;b--)
    // {
    //     if(a[b]>=97 || a[b]<=122)
    //     {
    //         a[b]-=32;
    //     }
    //     else
    //     {
    //         continue;
    //     }
    // }
}
var f6=function (font){
    comment.style.fontFamily = font.value;
}
function f7(){
    comment.style.color = document.getElementById("color").value;
}
function f8(){
    comment.style.fontSize = document.getElementById("font-size").value + 'px';
}
function f9(){
let a = 0,
    b=0,
    c=0,
    ar = [];
ar = comment.value.split(/\s+/);

a = ar.length;
let ar2 = comment.value.trim().split(".");
b = ar2.length;
c = ar.join().length;

document.getElementById("wordcount").innerHTML ='words:'+ a;
document.getElementById("sencount").innerHTML = 'characters:'+c;
document.getElementById("charcount").innerHTML = 'sentences:'+b;


let wordsPerMinute = 200;
let readingTime =  a / wordsPerMinute;

document.getElementById("time").innerHTML = 'time:' + readingTime;
}

function f10() {
    var searchTerm = document.getElementById("text").value;
    var paraP = document.getElementById("para-print");
    var inputValue = comment.value;
    console.log(comment);

    const pattern = new RegExp(searchTerm,'g');
    const highlightedText = inputValue.replace(pattern, match => `<span class="highlight">${match}</span>`);
    console.log(highlightedText);
    paraP.innerHTML = highlightedText;
}

