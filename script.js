const photos = [
    'photos/Edited/Couple Toast.jpg',
    'photos/Edited/Altar Mom.jpg',
    'photos/Edited/BBQ2.jpg',
    'photos/Edited/Birth Announcement2.jpg',
    'photos/Edited/Bonnie & Micki REV.png',
    'photos/Edited/Bonnie & Rick.jpg',
    'photos/Edited/Bonnie Senior Photo.jpg',
    'photos/Edited/Bonnie Young.jpg',
    'photos/Edited/Church View BW.jpg',
    'photos/Edited/Cutting Grooms Cake.jpg',
    'photos/Edited/Eating Brides Cake.jpg',
    'photos/Edited/Exotic Mom.jpg',
    'photos/Edited/Exotic Trip.jpg',
    'photos/Edited/Getaway Car.jpg',
    'photos/Edited/Hawaii 1985.jpg',
    'photos/Edited/Hide & Seek.jpg',
    'photos/Edited/Kissing.jpg',
    'photos/Edited/Lake Fun.jpg',
    'photos/Edited/Morris 50 Anniversary.jpg',
    'photos/Edited/Nanny Aisle.jpg',
    'photos/Edited/Off to Work.jpg',
    'photos/Edited/Parent Portrait.jpg',
    'photos/Edited/Pawpaw Aisle.jpg',
    'photos/Edited/Smiling at Altar.jpg',
    'photos/Edited/Wedding Invitation.jpg',
    'photos/Edited/Young Dad.jpg',
    'photos/Edited/Young Family.jpg'
]

let photoIndex = 0

const nextPhoto = () => {
    photoIndex = calcIndex(photoIndex + 1)
    setImages()
}

const prevPhoto = () => {
    photoIndex = calcIndex(photoIndex - 1)
    setImages()
}

const setImages = () => {
    document.getElementById('bigPhoto').src = photos[photoIndex]
    document.getElementById('photo').src = photos[photoIndex]
    document.getElementById('photo1').src = photos[calcIndex(photoIndex + 1)]
    document.getElementById('photo2').src = photos[calcIndex(photoIndex + 2)]
    document.getElementById('photo3').src = photos[calcIndex(photoIndex + 3)]
    document.getElementById('photo4').src = photos[calcIndex(photoIndex + 4)]
    document.getElementById('photo5').src = photos[calcIndex(photoIndex + 5)]
    document.getElementById('photo-1').src = photos[calcIndex(photoIndex - 1)]
    document.getElementById('photo-2').src = photos[calcIndex(photoIndex - 2)]
    document.getElementById('photo-3').src = photos[calcIndex(photoIndex - 3)]
    document.getElementById('photo-4').src = photos[calcIndex(photoIndex - 4)]
    document.getElementById('photo-5').src = photos[calcIndex(photoIndex - 5)]
    
}

const openZoomPhoto = indexChange => {
    photoIndex = calcIndex(photoIndex + indexChange)
    setImages()
    document.getElementById('zoomPhoto').style.display = 'block'
}

const closeZoomPhoto = () => {
    document.getElementById('zoomPhoto').style.display = 'none'
}

const calcIndex = input => {
    let result = input
    if (input < 0) {
        result += photos.length
    }
    if (input >= photos.length) {
        result -= photos.length
    }
    return result
}