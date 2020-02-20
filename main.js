// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const errorBar = document.querySelector('#modal')

const hearts = document.querySelectorAll('.like-glyph')

hearts.forEach( function(heart) {
  heart.addEventListener('click', function(e) {
    mimicServerCall()
    .then( function(response) {
      if (heart.className === 'like-glyph') {
        heart.className = "activated-heart"
        heart.innerText = FULL_HEART
      } else {
        heart.className = "like-glyph"
        heart.innerText = EMPTY_HEART
      }
    })
    .catch(() => {
      errorBar.className = ""
      setTimeout(function() {
        errorBar.className = "hidden"
      }, 5000)
    })
  })
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
