const dayFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
})

export const formatDayLabel = (isoDate: string): string =>
  dayFormatter.format(new Date(isoDate))
