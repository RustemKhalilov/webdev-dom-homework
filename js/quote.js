// js/quote.js
import { comments } from './render.js'

/**
 * Навешивает делегированный обработчик кликов по комментариям.
 * При клике текст комментария попадает в форму, заменяя предыдущую цитату.
 * @param {Object} refs
 * @param {HTMLElement} refs.container - список комментариев
 * @param {HTMLTextAreaElement} refs.textInput - поле, куда вставляем текст
 */
export function initQuote({ container, textInput }) {
  container.addEventListener('click', (event) => {
    // 1. Клик по кнопке лайка — не цитируем
    if (event.target.closest('.like-button')) return

    // 2. Находим карточку комментария
    const li = event.target.closest('.comment')
    if (!li) return

    // 3. Достаём объект из массива по data-index
    const index = Number(li.dataset.index)
    const comment = comments[index]
    if (!comment) return

    // 4. Очищаем поле и вставляем новую цитату
    textInput.value = `${comment.text}\n`

    // 5. Фокус в поле и курсор в конец
    textInput.focus()
    textInput.setSelectionRange(textInput.value.length, textInput.value.length)
  })
}
