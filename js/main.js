import { comments } from './data.js'
import { renderComments } from './render.js'
import { initLikes } from './likes.js'
import { initForm } from './form.js'
import { initQuote } from './quote.js'

const commentBox = document.querySelector('.comments')
const button = document.querySelector('.add-form-button')
const nameInput = document.querySelector('.add-form-name')
const textInput = document.querySelector('.add-form-text')

// 1. Первичный рендер из массива
renderComments(commentBox, comments)

// 2. Обработчики событий
initLikes(commentBox)
initQuote({ container: commentBox, textInput })
initForm({ container: commentBox, button, nameInput, textInput })
