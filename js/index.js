import state from "./state.js";

const aside = {
    open: document.getElementsByClassName('open')[0],
    container: document.getElementsByTagName('aside')[0],
    close: document.getElementsByClassName('close')[0],
    openAside(e) {
        //console.log(e.target)
        this.container.style.display = 'block';
        //this.container.style.backgroundColor='#FFFFFF'
        //console.log(this.container.style);
    },
    closeAside() {
        this.container.style.display = 'none';
    },
    render() {
        //console.log(this.open)
        this.open.addEventListener('click', (e) => this.openAside(e))
        this.close.addEventListener('click', () => this.closeAside())
    }
}
aside.render()
const modalobj = {
    modalContainer: document.getElementsByClassName('modalContainer')[0],
    sendbutton: document.getElementById('sendbutton'),
    closeModal(e) {
        this.modalContainer.style.display = 'none';
    },
    render() {
        //console.log(this.modalContainer)
        this.modalContainer.addEventListener('click', (e) =>
            e.target === e.currentTarget && this.closeModal());
        this.sendbutton.addEventListener('click', () => this.closeModal());
        //this.orderButton.addEventListener('click', () => this.openModal());
    }
}
modalobj.render()

function dispatch(action, container, data = state) {
    switch (action) {
        case 'aside':
            data.aside.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                    <li class="menu"><a>${item.title}</a></li>
                `))
            break;
        case 'section4':
            data.section3.forEach(item =>
                container.insertAdjacentHTML('beforeend', `
                            <div class="flex">
                    <img src="./img/content/section4/${item.url}" alt="">
                    <div class="column">
                        <h5>${item.title}</h5>
                        <p>${item.text}</p>
                    </div>
                </div>
                        `))
            break;
        case 0:

            break;

        default:
            break;
    }
}
const nav = document.getElementsByClassName('nav')[0];
dispatch('aside', nav);
const section4 = document.getElementsByClassName('section4_wrap')[0];
dispatch('section4', section4)

const open = document.getElementsByClassName('open')[0]
//const aside = document.getElementsByTagName('aside')[0]
//function modalNew(element, container, data) {
//    element.addEventListener('click', () => container.style.display = data)
//}
//modalNew(open, aside, 'block')
//* Прокручування до елемента
//targetElement.scrollIntoView({
//    behavior: 'smooth', // Плавне прокручування
//    block: 'start' // Вирівнювання: 'start', 'center', 'end', 'nearest'
//});
//scroll
const menu = Array.from(document.getElementsByClassName('menu'))
const footer = Array.from(document.getElementsByClassName('footerli'))
const section1 = Array.from(document.getElementsByClassName('blok'))
const scroll = Array.from(document.getElementsByClassName('scroll'))
//console.log(scroll)
menu.forEach((item, index) => {
    item.addEventListener('click', () =>
        scroll[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }))

})
footer.forEach((item, index) => {
    item.addEventListener('click', () =>
        scroll[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        }))

})