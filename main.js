<script>
 
// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
var bubble1 = document.getElementById('bubbles1')
var bubble2 = document.getElementById('bubbles2')
var fish = document.getElementById('fish')
 
 var scrollheight = document.body.scrollHeight // height of entire document
 var windowheight = window.innerHeight // height of browser window

function parallaxbubbles(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
 var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
 bubble1.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
 bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
 fish.style.left = -100 + scrollamount + '%' // set position of fish in percentage (starts at -100%)
}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)
 
window.addEventListener('resize', function(){ // on window resize
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
 var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
 fish.style.left = -100 + scrollamount + '50%' // set position of fish in percentage (starts at -100%)
}, false)
 
</script>