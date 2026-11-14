// js/form.js
import { renderComments } from './render.js'
import { postComment } from './metodPost.js'
import { getToken } from './api.js'
import { fetchComments } from './metodGet.js'

export function initForm({ container, button, nameInput, textInput }) {
  button.addEventListener('click', async () => {
    const token = getToken()

    // если не залогинен — отправляем на страницу входа
    if (!token) {
      alert('Войдите, чтобы оставить комментарий')
      return
    }

    const author = nameInput.value.trim()
    const text = textInput.value.trim()

    if (!author || !text) return

    if (author.length <= 2) {
      alert('В поле имя должно быть не менее 3-х символов')
      return
    }

    if (text.length <= 2) {
      alert('В поле имя должно быть не менее 3-х символов')
      return
    }

    // если хоть одно поле пустое,
    // выходим из обработчика, ничего не отправляем

    button.disabled = true
    // Блокируем кнопку от двойной отправки
    try {
      // Отправка ожидание и в случае успеха делаем все что ниже
      // токен уходит внутрь postComment — там добавим заголовок Authorization
      await postComment({ name: author, text, token })

      //  заново запрашиваем список с сервера (источник правды),
      //  а не пушим в закешированный промис
      const list = await fetchComments()

      // Перерисовываем весь список
      renderComments(container, list)

      nameInput.value = ''
      textInput.value = ''
      location.reload() // ← main.js перезапустится, лайки на месте
    } catch (err) {
      // обрабока ошибок
      console.error('Ошибка:', err.message)
      alert(err.message || 'Не удалось отправить комментарий')
    } finally {
      //  FINALLY — срабатывает ВСЕГДА: и при успехе,
      //  и при ошибке. Разблокируем кнопку
      button.disabled = false
    }
  })
}
