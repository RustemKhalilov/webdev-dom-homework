import { escapeHtml } from './escape.js'

/**
 * Добавляет один комментарий в контейнер.
 * @param {HTMLElement} container - элемент <ul class="comments">
 * @param {{name: string, date: string, text: string, likes?: number}} data
 */
export function addComment(container, { name, date, text, likes = 0 }) {
  container.insertAdjacentHTML(
    'beforeend',
    `
        <li class="comment">
            <div class="comment-header">
                <div>${escapeHtml(name)}</div>
                <div>${escapeHtml(date)}</div>
            </div>
            <div class="comment-body">
                <div class="comment-text">${escapeHtml(text)}</div>
            </div>
            <div class="comment-footer">
                <div class="likes">
                    <span class="likes-counter">${Number(likes)}</span>
                    <button class="like-button"></button>
                </div>
            </div>
        </li>
        `,
  )
}
