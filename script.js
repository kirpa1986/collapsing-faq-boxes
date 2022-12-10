// const el = document.querySelector('button').nodeName
// console.log(el)
document.querySelectorAll('.faq-card').forEach(card => {
    card.addEventListener('click', e => {
        if (e.target.nodeName.toLowerCase() === "i" || e.target.nodeName.toLowerCase() === "button") {
            card.classList.toggle('active')
        }
    })
})