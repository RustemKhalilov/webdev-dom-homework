export async function postComment({ name, text }) {
  try {
    const response = await fetch(
      'https://wedev-api.sky.pro/api/v1/Khalilov-Rustem/comments',
      {
        method: 'POST',
        body: JSON.stringify({ name, text }),
      },
    )

    if (!response.ok) {
      const errorBody = await response.text()
      console.error('Тело ответа сервера:', errorBody)
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const commentJSON = await response.json()
    return commentJSON
  } catch (error) {
    console.error('Не удалось отправить комментарий:', error.message)
    throw new Error(error.message) // ← null, а не [], чтобы вызывающий код отличил успех от провала
  }
}
