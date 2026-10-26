// js/render.js
import { escapeHtml } from './escape.js'
import { fetchComments } from './metodGet.js'
import { formatDate } from './convertdate.js'

export function renderComment({ author, date, text, likes, isLiked }, index) {
  const li = document.createElement('li')
  li.className = 'comment'
  li.dataset.index = index

  li.innerHTML = `
    <div class="comment-header">
      <div>${escapeHtml(author.name)}</div>
      <div>${escapeHtml(formatDate(date))}</div>
    </div>
    <div class="comment-body">
      <div class="comment-text">${escapeHtml(text)}</div>
    </div>
    <div class="comment-footer">
      <div class="likes">
        <span class="likes-counter">${Number(likes)}</span>
        <button class="like-button${isLiked ? ' -active-like' : ''}"></button>
      </div>
    </div>
  `

  return li
}

export const comments = fetchComments()
console.log(comments)
console.log(comments[0])

export function renderComments(container, comments) {
  console.log(comments)
  container.innerHTML = ''
  comments.forEach((comment, index) => {
    container.appendChild(renderComment(comment, index))
  })
}
