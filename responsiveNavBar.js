
// Primary nav

const nav = document.querySelector('.listener')

nav.addEventListener("click", (e) => {

    const featuresDropdown = document.getElementById('features-dropdown')
    const companyDropdown = document.getElementById('company-dropdown')
    const changeImage = e.target.childNodes[3]

    if(e.target.classList.contains('features')){
        featuresDropdown.classList.toggle('active')
        changeImage.classList.toggle('active')
    }

    if(e.target.classList.contains('company')){
        companyDropdown.classList.toggle('active')
        changeImage.classList.toggle('active')
    }

})

// secondary nav

const secondaryNav = document.getElementById('nav-dialog')

secondaryNav.addEventListener("click", (e) => {

    const dropdown = e.target.parentNode.parentNode
    const changeImage = e.target.childNodes[3]

    if (e.target.classList.contains('for-arrow')) {
        dropdown.classList.toggle('active');
        changeImage.classList.toggle('active');
    }
})


// ==================================================================

const close = document.getElementById('close')
const navDialog = document.getElementById('nav-dialog')
const burger = document.querySelector('.burger')


// why is the modal removing an element???!!!

burger.addEventListener('click', () => {
    navDialog.showModal();                                            
})

close.addEventListener('click', () => {

    const feature = document.getElementById('feature');
    const arrow = feature.childNodes[1].childNodes[1].childNodes[3]

    if (!feature.classList.contains('active') && !arrow.classList.contains('active')) {
        feature.classList.add('active')
        arrow.classList.add('active')
    }

    navDialog.close();

})



