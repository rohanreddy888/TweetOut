
    var textArea = document.querySelector("#text-area");
    //Returns the element which matches id #text and stores in pText
    var btnClicked = document.querySelector('#generate');
    //Returns the element which matches id #btn and stores in pBtn
    

    //pBtn will listen for any clicks and calls the function 
    btnClicked.addEventListener("click",function(){
    //sends random elements from the set
    var randomTweet = tweets[Math.floor(Math.random()*tweets.length)];
    textArea.innerHTML = randomTweet;
    });

