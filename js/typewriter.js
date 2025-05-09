document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = ["Desenvolvimento de Software",
    "Soluções Empresariais",
    "Design UX/UI",
    "Power BI para análise de dados e criação de relatórios",
    "Power Apps para criação de aplicativos sem a necessidade de codificação avançada.",
    "Automação",
    "Gestor de Tráfego",];
    
    
    function typeWriter(text, i, fnCallback) {
     
      if (i < (text.length)) {
       
       document.querySelector("h2").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 120);
      }
    
      else if (typeof fnCallback == 'function') {
       
        setTimeout(fnCallback, 700);
      }
    }
   
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 200);
       }
       
      if (i < dataText[i].length) {
        
       typeWriter(dataText[i], 0, function(){
        
         StartTextAnimation(i + 1);
       });
      }
    }
  
    StartTextAnimation(0);
  });