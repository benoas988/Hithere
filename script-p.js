document.getElementById("home").addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = "home.html"
  });

  document.getElementById("ex").addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = "experience.html"
  });

  document.getElementById("tentang").addEventListener("click", function(event){
      event.preventDefault();
      window.location.href = "home.html"
      
      var tentang = document.getElementById("tentang");
      var target = document.querySelector("#about-me");

      tentang.addEventListener("click", function(event){    
      event.preventDefault();
      target.scrollIntoView ({behavior:"smooth"});
});
  });

  document.getElementById("con").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "contact.html"
});
