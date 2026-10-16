// js/likes.js
import { comments } from './data.js'
import { renderComments } from './render.js'

/**
 * Навешивает делегированный обработчик кликов по лайкам.
 * @param {HTMLElement} container - список комментариев
 */
export function initLikes(container) {
  container.addEventListener('click', (event) => {
    const btn = event.target.closest('.like-button')
    if (!btn) return

    const li = btn.closest('.comment')
    const index = Number(li.dataset.index)
    const comment = comments[index]

    // 1. Меняем массив
    comment.isLiked = !comment.isLiked
    comment.likes += comment.isLiked ? 1 : -1

    // 2. Перерисовываем весь список
    renderComments(container, comments)
  })
}
