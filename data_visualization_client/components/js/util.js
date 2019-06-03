export function formatDate(iso8601DateString) {
  const myDate = new Date(iso8601DateString)
  return myDate.toLocaleString()
}
