/**
 * Навешивает делегированный обработчик кликов по лайкам.
 * @param {HTMLElement} container - элемент, внутри которого лежат .like-button
 */
export function initLikes(container) {
  container.addEventListener('click', (event) => {
    if (!event.target.matches('.like-button')) return

    const btn = event.target
    const counter = btn.closest('.likes').querySelector('.likes-counter')
    const isActive = btn.classList.toggle('-active-like')

    counter.textContent = Number(counter.textContent) + (isActive ? 1 : -1)
  })
}
