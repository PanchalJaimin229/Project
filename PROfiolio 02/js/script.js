pro1 = document.getElementById('progress-bar-1');
pro2 = document.getElementById('progress-bar-2');
pro3 = document.getElementById('progress-bar-3');
pro4 = document.getElementById('progress-bar-4');
pro5 = document.getElementById('progress-bar-5');
pro6 = document.getElementById('progress-bar-6');
head = document.getElementById('head');


        function test()
        {
            if(document.documentElement.scrollTop > 900)
            {
                pro1.style.background = "conic-gradient(#7d2a7d 320deg, #ededed 0deg)";
                pro2.style.background = "conic-gradient(#7d2a7d 300deg, #ededed 0deg)";
                pro3.style.background = "conic-gradient(#7d2a7d 280deg, #ededed 0deg)";
                pro4.style.background = "conic-gradient(#7d2a7d 260deg, #ededed 0deg)";
                pro5.style.background = "conic-gradient(#7d2a7d 250deg, #ededed 0deg)";
                pro6.style.background = "conic-gradient(#7d2a7d 180deg, #ededed 0deg)";
                head.style.background = "#004773";

            }
            else
            {
                x.style.background = "conic-gradient(#7d2a7d 0deg, #ededed 0deg)";
            }
        }
// side bar script
        function openNav() {
            document.getElementById("mySidebar").style.width = "200px";
            document.getElementById("main").style.marginLeft = "200px";
          }
          
          function closeNav() {
            document.getElementById("mySidebar").style.width = "0";
            document.getElementById("main").style.marginLeft= "0";
          }
