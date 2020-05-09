import { parseISO, format } from 'date-fns'

export default function DateFormater({ dateString, emoji }) {
  const date = parseISO(dateString)
  return <p><time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time> - Feeling {emoji}</p>
}
