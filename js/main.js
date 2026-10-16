import { comments } from './data.js'
import { renderComments } from './render.js'
import { initLikes } from './likes.js'
import { initForm } from './form.js'

const commentBox = document.querySelector('.comments')
const button = document.querySelector('.add-form-button')
const nameInput = document.querySelector('.add-form-name')
const textInput = document.querySelector('.add-form-text')

renderComments(commentBox, comments)

initLikes(commentBox)
initForm({ container: commentBox, button, nameInput, textInput })
