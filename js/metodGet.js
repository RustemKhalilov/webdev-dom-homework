export async function fetchComments() {
  try {
    for (let i = 1; i <= 3; i++) {
      const response = await fetch(
        'https://wedev-api.sky.pro/api/v1/Khalilov-Rustem/comments',
      )

      // успех — возвращаем массив комментариев
      if (response.ok) {
        const commentJSON = await response.json()
        return commentJSON.comments
      }

      // 500 и есть ещё попытки — ждём 2 сек и пробуем снова
      if (response.status === 500 && i < 3) {
        await new Promise((r) => setTimeout(r, 2000))
        continue
      }

      // всё остальное — ошибка
      if (response.status === 500) throw new Error('Сервер сломался')
      if (response.status === 400) throw new Error('Плохой запрос')
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
  } catch (error) {
    if (error instanceof TypeError) {
      // нет сети, сервер недоступен, CORS, блокировка
      alert(
        'Не удалось связаться с сервером. Проверь подключение к интернету и попробуй снова.',
      )
    } else if (error.message === 'Сервер сломался') {
      alert('Сервер сломался, попробуй позже')
    } else if (error.message === 'Плохой запрос') {
      alert('Ошибка в запросе. Попробуй обновить страницу.')
    } else {
      console.error('Ошибка:', error.message)
    }
    throw error // пробрасываем дальше
  }
}
