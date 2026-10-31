export async function fetchComments() {
  try {
    const response = await fetch(
      'https://wedev-api.sky.pro/api/v1/Khalilov-Rustem/comments',
    )

    if (!response.ok) {
      if (response.status === 500) {
        throw new Error('Сервер сломался')
      } else if (response.status === 400) {
        throw new Error('Плохой запрос')
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
    }

    const commentJSON = await response.json()
    return commentJSON.comments
  } catch (error) {
    if (error instanceof TypeError) {
      // сюда попадают: нет сети, сервер недоступен, CORS, блокировка
      alert(
        'Не удалось связаться с сервером. Проверь подключение к интернету и попробуй снова.',
      )
    } else if (error.message === 'Сервер сломался') {
      alert('Сервер сломался, попробуй позже')
    } else if (error.message === 'Плохой запрос') {
      alert('Ты сделал ошибку в запросе, исправь данные и попробуй снова')
    } else {
      console.error('Ошибка:', error.message)
    }
    throw error // Пробрасываем ошибку дальше
  }
}

// { status: 'ok', method: 'GET' }
