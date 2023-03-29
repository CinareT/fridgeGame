
var meyve=document.querySelectorAll('.meyve');
var box=document.querySelector('.box');
var btn=document.querySelector('button');
for(var i=0; i<meyve.length; i++){
   

    
}
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];


     
      for (var i = 0; i < letters.length; i++) {

       
        var letterBtn = $("<button>");

        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);

      }


$(".meyve").on("click", function() {

   
    var fridgeMagnet = $("<div>");

    fridgeMagnet.addClass("letter fridge-color");

   
    fridgeMagnet.text($(this).attr("data-letter"));

    $(".box").append(meyve);

  });
btn.onclick=function(){
    $(".box").empty();
}
meyve[i].onclick=function(){
    var newDiv=document.createElement('div');
    $(newDiv).css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '20%'
    })
    box.append(this)
}