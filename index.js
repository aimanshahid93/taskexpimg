const panels = document.querySelectorAll('.imgbox')

panels.forEach(imgbox => {
    imgbox.addEventListener('click', () => {
        removeActiveClasses()
        imgbox.classlist.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(imgbox => {
        imgbox.classlist.remove('active')
    })
}