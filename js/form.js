import { comments } from './render.js'
import { renderComments } from './render.js'
import { postComment } from './metodPost.js'

export function initForm({ container, button, nameInput, textInput }) {
  button.addEventListener('click', async () => {
    const author = nameInput.value.trim()
    const text = textInput.value.trim()

    if (!author || !text) return

    if (author.length <= 1) {
      alert('В поле имя должно быть более одного символа')
      return
    }

    if (text.length <= 1) {
      alert('В поле текст должно быть более одного символа')
      return
    }

    // если хоть одно поле пустое,
    // выходим из обработчика, ничего не отправляем

    button.disabled = true
    // Блокируем кнопку от двойной отправки
    try {
      // Отправка ожидание и в случае успеха делаем все что ниже
      const result = await postComment({ name: author, text })

      const list = await comments //  comments — промис, ждём массив

      list.push({
        author: { name: author },
        date: new Date().toISOString(),
        text,
        likes: 0,
        isLiked: false,
      })
      // Перерисовываем весь список
      renderComments(container, list)

      nameInput.value = ''
      textInput.value = ''
    } catch (err) {
      // обрабока ошибок
      console.error('Ошибка:', err.message)
    } finally {
      //  FINALLY — срабатывает ВСЕГДА: и при успехе,
      //  и при ошибке. Разблокируем кнопку
      button.disabled = false
    }
  })
}
