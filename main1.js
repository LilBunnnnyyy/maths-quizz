z=localStorage.getItem("p1");
w=localStorage.getItem("p2");
p1s=0
p2s=0
document.getElementById("pl1").innerHTML=z+":";
document.getElementById("pl2").innerHTML=w+":";
document.getElementById("pl1s").innerHTML=p1s;
document.getElementById("pl2s").innerHTML=p2s;
document.getElementById("q").innerHTML="Question Turn: "+z;
document.getElementById("a").innerHTML="Answer Turn: "+w;

function s(){
    h=document.getElementById("word").value;
    h1=document.getElementById("word1").value;
    ans=h*h1;
    console.log(ans);
question_word = "<h4>"+h+"x"+h1+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
document.getElementById("word1").value = "";
}

qt="player1";
at="player2";
function check(){
    x=document.getElementById("input_check_box").value;
    if(x==ans){
if(at=="player1"){
    p1s=p1s+1;
    document.getElementById("pl1s").innerHTML=p1s;
}
else{
    p2s=p2s+1;
    document.getElementById("pl2s").innerHTML=p2s;
}
    }

    if(qt=="player1"){
qt="player2";
document.getElementById("q").innerHTML="Question Turn: "+w;
    }
    else{
        qt="player1";
document.getElementById("q").innerHTML="Question Turn: "+z;
    }

    if(at=="player1"){
        at="player2";
        document.getElementById("a").innerHTML="Answer Turn: "+w;
            }
            else{
                at="player1";
        document.getElementById("a").innerHTML="Answer Turn: "+z;
            }  
document.getElementById("output").innerHTML="";
        }

