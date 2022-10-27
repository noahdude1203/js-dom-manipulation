console.log("== document.body:", document.body)

var body = document.body
console.log("== body.childNodes:", body.childNodes)

var nav = body.childNodes[3]
console.log("== nav.parentNode:", nav.parentNode)

var photoCardContainer = document.getElementById("photo-card-container")
console.log("== photoCardContaine:", photoCardContainer)

var photoCards = document.getElementsByClassName("photo-card")
console.log("== photoCards:", photoCards)
for(var i = 0; i < photoCards.length; i++){
    console.log(photoCards[i])
}