// clickCounter();
window.onload = function()
{
        /* var img = document.getElementsByTagName('img')[0];
         var sound = document.createElement('audio');
         sound.setAttribute('src', "{{ url_for('static', filename='meow.ogg')}}");
         document.body.appendChild(sound);
       var play = function()
       {
         sound.play();
       }
img.onclick = play();

*/
      var clickCounter = function()
{
         alert('hi');
        var test = document.getElementById('img').style.left;
        alert(test);
if(typeof(Storage)!=="undefined")
  {
  if (localStorage.clickcount)
    {
    localStorage.clickcount=Number(localStorage.clickcount)+1;
    }
  else
    {
    localStorage.clickcount=1;
    }
  document.getElementById("result").innerHTML="You have clicked the button " + localStorage.clickcount + " time(s).";
  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
  }
};
  
    var butt = document.getElementById('but'); 
    butt.addEventListener('click',clickCounter(), false);
};  


