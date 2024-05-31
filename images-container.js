const images = [
    { 
        url: "Images/8e76f5d1-03bb-4d5d-ad25-cf12b6c1e8f0_redigert.jpg"
        description: "steinstrand"

    },
]

// images.forEach((value, index, array) => {})

images.forEach (image, index) {
    const imageElement = document.createElement("img")
    imageElement.src = image.url 
    imageElement.alt = image.description
    imageElement.width = "200"

    const container = document.getElementById("image-container")
    container.appendChild(imageElement)

    const navButton = document.createElement("button")
    navButton.textContent = index + 1

    navButton.addEventListener("click", () => {
        console.log("moving to image: " + index)

    })

    const controlContainer = document.getElementById("controls")
    controlContainer.appendChild(navButton)

}