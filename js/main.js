// js/main.js
import { renderComments } from './render.js'
import { fetchComments } from './metodGet.js'
import { initLikes } from './likes.js'
import { initForm } from './form.js'
import { initQuote } from './quote.js'
import { showLoading, hideLoading, showEmpty } from './loader.js'
import { renderLogin } from './renderLogin.js'
import { renderRegistration } from './renderRegistration.js'

const commentBox = document.querySelector('.comments')
const button = document.querySelector('.add-form-button')
const nameInput = document.querySelector('.add-form-name')
const textInput = document.querySelector('.add-form-text')
//Делеаем кноку только для чтения

const currentUserName = localStorage.getItem('userName')
if (currentUserName) {
  nameInput.value = currentUserName
}
nameInput.readOnly = true

//получили объект из DOM
const loginBtn = document.querySelector('.login')
//навесили обработчик события клик на кнопку
const registrationBtn = document.querySelector('.registration')

//получили объект из DOM
loginBtn.addEventListener('click', renderLogin)
//навесили обработчик события клик на кнопку
registrationBtn.addEventListener('click', renderRegistration)

//Показываем loader
showLoading(commentBox)

const loadedComments = await fetchComments() //тут получаем массив комментариев с сервера

hideLoading(commentBox)

// Первичный рендер из массива
console.log(loadedComments)

if (loadedComments.length === 0) {
  showEmpty(commentBox)
} else {
  renderComments(commentBox, loadedComments)
  // Обработчики событий — передаём массив, чтобы лайки работали с реальными данными
  initLikes(commentBox, loadedComments)
  initQuote({ container: commentBox, textInput })
}
// далее блок отображения формы отправки комментария он не зависит от комментариев
initForm({ container: commentBox, button, nameInput, textInput })
