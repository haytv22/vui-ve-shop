const register = document.querySelector('.register_js')
const login = document.querySelector('.login_js')
const modal = document.querySelector('.modal')
const modal__overlay = document.querySelector('.modal__overlay')
const back_buttons = document.querySelectorAll('.back_js')
const modal_login_button = document.querySelector('.auth-form__switch-btn__login')
const modal_register_button = document.querySelector('.auth-form__switch-btn_register')
const modal_register= document.querySelector('.auth-form_register')
const modal_login= document.querySelector('.auth-form_login')




function addOpen_register() {
    modal.classList.add('open')
}

function removeOpen() {
    modal.classList.remove('open')
}
function remove_active() {
    document.querySelector('.active').classList.remove('active')
}
function active_1() {
    modal_register.classList.add('active')
}
function active_2() {
    modal_login.classList.add('active')
}

register.addEventListener('click',function(){
    addOpen_register(),remove_active(),active_1()
})
login.addEventListener('click',function(){
    addOpen_register(),remove_active(),active_2()
})
modal_login_button.addEventListener('click',function(){
    remove_active(),active_2()
})
modal_register_button.addEventListener('click',function(){
    remove_active(),active_1()
})
modal__overlay.addEventListener('click',removeOpen)
back_buttons.forEach(function(back_button){
    back_button.addEventListener('click',removeOpen)
})
