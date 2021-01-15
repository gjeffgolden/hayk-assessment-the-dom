document.querySelector("h1").textContent = "HACKED!"

let links = document.getElementsByTagName("a")
links[0].href = "https://thebadguys.com"
links[1].href = "https://thebadguys.com"
links[2].href = "https://thebadguys.com"
//REFACTOR: use forEach

let newImage = document.createElement("img")
document.body.prepend(newImage)
newImage.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png"

let removeMain = document.querySelector("main");
removeMain.removeChild(removeMain.querySelector("p"[0])) 
removeMain.removeChild(removeMain.querySelector("p"[0])) 
//REFACTOR

let compromised = document.createElement("p")
document.body.append(compromised)
compromised.textContent = "Your account has been compromised."

document.querySelector("span").textContent = "0"