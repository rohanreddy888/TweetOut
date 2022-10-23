
    


    var tweets = ["hi","hello","yo","bitch","f"];

    var textArea = document.querySelector("#text");
    //Returns the element which matches id #text and stores in pText
    var btnClicked = document.querySelector('#btn');
    //Returns the element which matches id #btn and stores in pBtn
    

    //pBtn will listen for any clicks and calls the function 
    btnClicked.addEventListener("click",function(){
    //sends random elements from the set
    var len = tweets[Math.floor(Math.random()*tweets.length)];
    textArea.innerHTML = len;
    });

