const bodyElement = document.querySelector("body")
const button = document.createElement("button")

button.append("Remove")
bodyElement.append(button)

button.addEventListener("click", function () {
    mainElement.remove()
    console.log('button clicked')
})


const mainElement = document.createElement("main")
bodyElement.append(mainElement)

const imgElement = document.createElement("img")
mainElement.append(imgElement)

imgElement.className = "image"
imgElement.src = "https://s3.amazonaws.com/files.collageplatform.com.prod/image_cache/2020x1160_fit/5769730d87aa2c756368dbf5/740fda5c5a0858edaf6f3cce4610ad19.jpeg"

let anchorElement = document.createElement("a")
anchorElement.href = "http://www.faheykleingallery.com/artists/matthew-rolston/featured-works?view=slider#33"
anchorElement.className = "a"
mainElement.append(anchorElement)
anchorElement.append("http://www.faheykleingallery.com/artists/matthew-rolston/featured-works?view=slider#33")


