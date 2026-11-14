const host = 'https://wedev-api.sky.pro/api/v2/todos'
const authHost = 'https://wedev-api.sky.pro/api/user'

const TOKEN_KEY = 'token'

export const updateToken = (newToken) => {
  localStorage.setItem(TOKEN_KEY, newToken) // ← кладём в localStorage
}

export const getToken = () => localStorage.getItem(TOKEN_KEY) // ← читаем оттуда же

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

export function getTodos() {
  const token = getToken()
  return fetch(host, {
    method: 'GET',
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  }).then((response) => response.json())
}

export function login({ login, password }) {
  return fetch(`${authHost}/login`, {
    method: 'POST',
    //headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ login, password }),
  }).then(async (response) => {
    const data = await response.json()
    if (!response.ok) throw new Error(data.error || `Ошибка ${response.status}`)
    return data
  })
}

export function registration({ login, name, password }) {
  return fetch(authHost, {
    method: 'POST',
    //headers: { 'Content-Type': 'application/json' }, // ← тоже
    body: JSON.stringify({ login, name, password }),
  }).then(async (response) => {
    const data = await response.json()
    if (!response.ok) throw new Error(data.error || `Ошибка ${response.status}`)
    return data
  })
}
