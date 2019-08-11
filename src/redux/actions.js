export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export function saveSelectedCategory(data) {
  return { type: SELECT_CATEGORY, data}
}
