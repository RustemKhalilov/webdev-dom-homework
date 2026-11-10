import { renderComments } from './render.js'

export function initLikes(container, comments) {
  container.addEventListener('click', (event) => {
    const btn = event.target.closest('.like-button')
    if (!btn) return

    const li = btn.closest('.comment')
    const index = Number(li.dataset.index)
    const comment = comments[index]
    if (!comment) return

    comment.isLiked = !comment.isLiked
    comment.likes += comment.isLiked ? 1 : -1

    renderComments(container, comments)
  })
}
