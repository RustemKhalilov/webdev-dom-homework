import { comments } from './render.js'
import { renderComments } from './render.js'
import { initLikes } from './likes.js'
import { initForm } from './form.js'
import { initQuote } from './quote.js'
import { showLoading, hideLoading, showEmpty } from './loader.js'

const commentBox = document.querySelector('.comments')
const button = document.querySelector('.add-form-button')
const nameInput = document.querySelector('.add-form-name')
const textInput = document.querySelector('.add-form-text')
//Показываем loader
showLoading(commentBox)

const loadedComments = await comments //тут comments (промис) превращается в массив

hideLoading(commentBox)

// Первичный рендер из массива
console.log(comments)

if (loadedComments.length === 0) {
  showEmpty(commentBox)
} else {
  renderComments(commentBox, loadedComments)
  // Обработчики событий
  initLikes(commentBox)
  initQuote({ container: commentBox, textInput })
}
// далее блок отображения формы отправки комментария он не зависит от комментариев
initForm({ container: commentBox, button, nameInput, textInput })
