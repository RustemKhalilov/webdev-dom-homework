export function formatDate(isoString) {
  const date = new Date(isoString)

  if (Number.isNaN(date.getTime())) {
    return '' // или '—', если строка битая
  }

  const pad = (n) => String(n).padStart(2, '0')

  const day = pad(date.getDate())
  const month = pad(date.getMonth() + 1) // месяцы с 0
  const year = date.getFullYear()
  const hours = pad(date.getHours())
  const minutes = pad(date.getMinutes())

  return `${day}.${month}.${year} ${hours}:${minutes}`
}
