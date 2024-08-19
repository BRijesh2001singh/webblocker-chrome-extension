const generateSTYLES = () => {
  return `<style>@import url(https://fonts.googleapis.com/css?family=opensans:500);
  body {
    background-color:black;
    background-image:url("https://asset.gecdesigns.com/img/wallpapers/starry-night-sky-reflection-background-hd-wallpaper-sr10012425-1705222416280-cover.webp");
    background-size:cover;
    background-repeat:no-repeat;
    color:white;
    font-family: "Open Sans", sans-serif;
    max-height: 700px;
    overflow: hidden;
    opacity:.9;
  }
  .c {
    display: flex;
    flex-direction:column;
    justify-content:start;
    align-items:center;
    width: 80%;
    margin: 100px auto;
  }
  ._404 {
    
    font-size: 220px;
    position: relative;
    display: inline-block;
    z-index: 2;
    height: 250px;
    letter-spacing: 15px;
      text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;

  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
      text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;


  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
      text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;

  }
  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    /* top: 256.301px; */
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
      text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;

  }


  .right {
    float: right;
    width: 60%;
  }

  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }

  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }

.credits>a {
  font-weight:bolder;
  color:red;
  font-size:15px;
  text-decoration:none;
    text-shadow: 
    -1px -1px 0 #000,  
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
}
   </style>`;
};

const generateHTML = (pageName) => {
  return `

  <div class='c'>
      <div class='_404'>WEBSITE</div>
      <hr>
      <div class='_1'>GET BACK TO WORK</div>
      <div class='_2'>SUCCESS FEELS BETTER THAN ${pageName}</div>
      <div class='credits'><a href="https://main--dreamy-dieffenbachia-d0ddc8.netlify.app/">About</a></div>
      <hr>
       <div class='_404'>BLOCKED</div>
  </div>
   `;
};

switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ENJOYING YOUTUBE");
    break;
  case "www.facebook.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ENJOYING FACEBOOK");
    break;
  case "www.netflix.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ENJOYING NETFLIX");
    break;
  case "www.roblox.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ENJOYING ROBLOX");
    break;
  case "discord.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ENJOYING DISCORD");
    break;
  case "www.spotify.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ENJOYING SPOTIFY");
    break;
  case "www.instagram.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ENJOYING INSTAGRAM");
    break;
  case "www.primevideo.com":
    document.head.innerHTML = generateSTYLES();
    document.body.innerHTML = generateHTML("ENJOYING MOVIES");
    break;
}
