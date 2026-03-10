export const IMG_BASE = 'https://image.tmdb.org/t/p'

export const imgUrl = (path, size = 'w500') =>
  path ? `${IMG_BASE}/${size}${path}` : '/placeholder.jpg'

export const backdropUrl = (path) =>
  path ? `${IMG_BASE}/original${path}` : null

export const formatRuntime = (minutes) => {
  if (!minutes) return 'Bilinmiyor'
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h > 0 ? `${h}s ${m}dk` : `${m}dk`
}

export const formatDate = (dateStr) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('tr-TR', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

export const formatYear = (dateStr) =>
  dateStr ? new Date(dateStr).getFullYear() : ''

export const ratingColor = (rating) => {
  if (rating >= 7.5) return '#4ade80'
  if (rating >= 6) return '#facc15'
  return '#f87171'
}