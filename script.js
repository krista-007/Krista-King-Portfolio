//beginning of navbar code
window.addEventListener("scroll", function() {
  var navbar = document.querySelector(".navbar");
  var content1 = document.querySelector("#content1");
  var navbarOffset = navbar.offsetTop;
  var section2Offset = content1.offsetTop;

  if (window.pageYOffset >= section2Offset) {
    navbar.classList.remove("transparent");
    navbar.classList.add("solid");
  } else {
    navbar.classList.remove("solid");
    navbar.classList.add("transparent");
  }
});
// end of navbar code
function scrollToContent(contentId) {
  const contentElement = document.getElementById(contentId);
  if (contentElement) {
    contentElement.scrollIntoView({ behavior: 'smooth' });
  }
}

const title = document.querySelector(".main-title");
const glitchClass = "glitch-effect";

title.addEventListener("mouseover", function() {
  //mouseover=hover
  if (!title.classList.contains(glitchClass)) {
    title.classList.add(glitchClass);
  }
});

title.addEventListener("mouseout", function() {
  if (title.classList.contains(glitchClass)) {
    title.classList.remove(glitchClass);
  }
});
function buttonClick() {
  // Added desired functionality here
  // For example, you can redirect to a new page
  window.location.href = "https://example.com";
}

function navigateToLink(url) {
  window.location.href = url;
}

var soundButton=document.querySelector(".sound-button");
var githubButton=document.querySelector(".github-button");
var linkedinButton=document.querySelector(".linkedin-button");
var indeedButton=document.querySelector(".indeed-button");
var instagramButton=document.querySelector(".instagram-button");
var facebookButton=document.querySelector(".facebook-button");
var gmailButton=document.querySelector(".gmail-button");
var dribbleButton=document.querySelector(".dribble-button");
var fiverrButton=document.querySelector(".fiverr-button");
var stackButton=document.querySelector(".stack-button");
var beep = document.querySelector("audio");
var noise=false
var sound=0
soundButton.onclick=function(){
  sound += 1;
  if (sound%2 == 0){
    soundButton.innerHTML="Sound Off"
    noise=true
    return noise;
  }
  else{
    soundButton.innerHTML="Sound On"
    noise=false
    return noise;
  }
  return noise;
  return sound;
};

githubButton.onclick=function(){
    if (noise === true){
      beep.play()
    }   
    navigateToLink('https://github.com/')
}
linkedinButton.onclick=function(){
    if (noise === true){
      beep.play()
    }   
    navigateToLink('https://www.linkedin.com/in/krista-king-577505281/')
}

indeedButton.onclick=function(){
    if (noise === true){
      beep.play()
    }   
    navigateToLink('https://profile.indeed.com/?hl=en_US&co=US&from=gnav-homepage&_ga=2.116782918.1358108760.1688584227-671708387.1687912304&_gac=1.159132104.1688584533.CjwKCAjwqZSlBhBwEiwAfoZUIMfwCco1yIF0-Fbjiv73ikjK8wWvagn69w8a1xYKjCNUMwiRj2N7GBoCGSoQAvD_BwE')
}

instagramButton.onclick=function(){
    if (noise === true){
      beep.play()
    }   
navigateToLink('https://www.instagram.com/krista.lynnee/')
}
facebookButton.onclick=function(){
    if (noise === true){
      beep.play()
    }   
navigateToLink('https://www.facebook.com/krista.king.3348')
}
gmailButton.onclick=function(){
    if (noise === true){
      beep.play()
    }   
navigateToLink('mailto:kristakingnexttech@gmail.com')
}
dribbleButton.onclick=function(){
    if (noise === true){
      beep.play()
    }   
navigateToLink('https://dribbble.com/kristaking?onboarding=true')
}
fiverrButton.onclick=function(){
    if (noise === true){
      beep.play()
    }   
navigateToLink('https://www.fiverr.com/kristaking333?up_rollout=true')
}
stackButton.onclick=function(){
    if (noise === true){
      beep.play()
    }   
navigateToLink('https://stackoverflow.com/users/22181884/krista')
}