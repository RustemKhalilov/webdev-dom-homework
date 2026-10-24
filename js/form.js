import { comments } from './render.js'
import { renderComments } from './render.js'
import { postComment } from './metodPost.js'

/**
 * Навешивает обработчик на кнопку «Написать».
 * @param {Object} refs
 * @param {HTMLElement} refs.container - список комментариев
 * @param {HTMLButtonElement} refs.button
 * @param {HTMLInputElement} refs.nameInput
 * @param {HTMLTextAreaElement} refs.textInput
 */
export function initForm({ container, button, nameInput, textInput }) {
  button.addEventListener('click', () => {
    const author = nameInput.value.trim()
    const text = textInput.value.trim()

    if (!author || !text) return

    // 1. Меняем массив
    comments.push({
      author: { name: author },
      date: new Date().toISOString(),
      text,
      likes: 0,
      isLiked: false,
    })

    // 2. Отправляем на сервер

    postComment({ name: author, text })
    console.log(author)
    console.log(text)

    // 2. Перерисовываем весь список из массива
    renderComments(container, comments)

    // 3. Чистим форму
    nameInput.value = ''
    textInput.value = ''
  })
}
