const getElemById = (id) => document.getElementById(id)

const BASE_DIR = '../img/bot-img/'

let loadedImages = []

const characterFrames = ['1.png','2.png','3.png','4.png','5.png']

function loadFrames(characterFrames) {
  return new Promise((resolve, reject) => {

    let imagesToLoad = characterFrames.length

    characterFrames.forEach((frameSrc) => {
      const img = new Image()
      img.src = frameSrc
      img.onload = () => {
        loadedImages.push(img)
        imagesToLoad--

        if (imagesToLoad === 0) {
          resolve(loadedImages)
        }
      }
      img.onerror = (error) => {
        imagesToLoad--
        console.error(`Image loading error: ${error}`)
      }
    })
  })
}


loadFrames(characterFrames).then((loadedImages) => { })
.catch((error) => {
  console.error("Image loading failed:",
    error)
})

