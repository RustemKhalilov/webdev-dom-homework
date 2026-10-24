export async function fetchComments() {
  try {
    const response = await fetch(
      'https://wedev-api.sky.pro/api/v1/Khalilov-Rustem/comments',
    )

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const commentJSON = await response.json()
    return commentJSON.comments // ← возвращаем, а не только логируем
  } catch (error) {
    console.error('Не удалось загрузить комментарии:', error.message)
    return [] // чтобы вызывающий код не получил undefined
  }
}

// { status: 'ok', method: 'GET' }
