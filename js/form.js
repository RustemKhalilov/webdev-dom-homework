import { addComment } from './render.js'

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
    addComment(container, {
      name: nameInput.value,
      date: new Date().toLocaleString(),
      text: textInput.value,
      likes: 0,
    })

    nameInput.value = ''
    textInput.value = ''
  })
}
