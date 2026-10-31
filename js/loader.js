export function showLoading(container) {
  container.innerHTML = `
    <div class="loader">Загрузка комментариев…</div>
  `
}

export function hideLoading(container) {
  container.innerHTML = ''
}

export function showEmpty(container) {
  container.innerHTML = `<div class="empty">Комментариев пока нет</div>`
}
