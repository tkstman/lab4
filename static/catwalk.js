        var assig;        
        var assign = function(v)
        {
            assig= v;
        }

        var clickCounter = function()
        {  
           alert('hello');
           var test = document.getElementsByTagName('img')[0];//.style.left;
           alert(test);
           if(typeof(Storage)!=="undefined")
           {
              if (localStorage.clickcount)
              {
                  localStorage.location = 'its right here';
                  localStorage.thisbal = assig;
                  alert(localStorage.location);
                  alert('hey tks');
                  localStorage.clickcount=Number(localStorage.clickcount)+1;
                  localStorage.myval=Number(localStorage.myval)+1;
                  alert('local storage');
              }
              else
              {
                  localStorage.clickcount=1;
                localStorage.myval="8";
              }
               document.getElementById("result").innerHTML="You have clicked the button " + localStorage.clickcount + " time(s).";
            }
            else
            {
                document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
            }
        };










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

  
        var butt = document.getElementById('but'); 
        butt.addEventListener('click',clickCounter, false);
        
        
};  




