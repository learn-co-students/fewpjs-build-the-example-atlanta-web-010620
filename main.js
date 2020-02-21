// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeGlyphs = document.querySelectorAll(".like-glyph"); 
// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const errorBanner = document.querySelector('#modal'); 
  // hide error on load 
  errorBanner.className = "hidden"; 
  likeGlyphs.forEach(function(glyph){
    glyph.addEventListener('click',function(e){
      if (glyph.innerText === FULL_HEART){
        glyph.innerText = EMPTY_HEART; 
        glyph.classList.remove("activated-heart")
      }

      mimicServerCall()
      .then(function(data){
        console.log(data)
        glyph.innerText = FULL_HEART; 
        glyph.className = "activated-heart";
      })
      .catch(function(error){ 
        errorBanner.classList.remove("hidden") 
        errorBanner.innerText = error; 
        console.log(error)
        setTimeout(function(){errorBanner.className = "hidden"}, 5000);
      });
    })
    // debugger;
  })
  
  // end loaded content listener 
})

// variables 
// make a list for the like glyphs that we can iterate through 

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .5
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
