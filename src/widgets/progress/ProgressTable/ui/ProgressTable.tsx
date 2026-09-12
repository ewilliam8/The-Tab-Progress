import { formatDayLabel } from '../lib/formatDayLabel'
import { ProgressTableSkeleton } from './ProgressTableSkeleton'
import {
  aggregateEventsToDayRows,
  useEventsLast30Days,
  type ProgressDayEntry,
  type ProgressDayRow,
} from '@/entities/progress'
import { formatMinutesToHm } from '@/shared/lib/formatMinutesToHm'
import { formatSecondsToTime } from '@/shared/lib/formatSecondsToTime'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/Card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/ui/Table'

type ActivityCellProps = {
  entries: ProgressDayEntry[]
}

const ActivityCell = ({ entries }: ActivityCellProps) => {
  if (entries.length === 0) {
    return <span className="text-muted-foreground">—</span>
  }

  return (
    <ul className="space-y-1">
      {entries.map((entry) => (
        <li key={entry.id} className="whitespace-pre-line">
          {entry.text ?? 'No note'}{' '}
          <span className="tabular-nums text-muted-foreground">
            ({formatMinutesToHm(entry.durationSeconds / 60)})
          </span>
        </li>
      ))}
    </ul>
  )
}

type ProgressTableRowProps = {
  row: ProgressDayRow
}

const ProgressTableRow = ({ row }: ProgressTableRowProps) => {
  return (
    <TableRow>
      <TableCell className="whitespace-nowrap font-medium">
        {formatDayLabel(row.dayStart)}
      </TableCell>
      <TableCell className="whitespace-nowrap font-mono tabular-nums">
        {formatSecondsToTime(row.totalSeconds)}
      </TableCell>
      <TableCell className="whitespace-nowrap tabular-nums text-muted-foreground">
        {row.entries.length}
      </TableCell>
      <TableCell className="text-muted-foreground">
        <ActivityCell entries={row.entries} />
      </TableCell>
    </TableRow>
  )
}

export const ProgressTable = () => {
  const { events, isLoading, error } = useEventsLast30Days()
  const rows = aggregateEventsToDayRows(events)

  const renderBody = () => {
    if (isLoading) return <ProgressTableSkeleton />

    if (error) {
      return (
        <p className="py-6 text-center text-sm text-muted-foreground">
          Failed to load progress days. Try reloading the page.
        </p>
      )
    }

    if (rows.length === 0) {
      return (
        <p className="py-6 text-center text-sm text-muted-foreground">
          No records for the last 30 days yet.
        </p>
      )
    }

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[160px]">Day</TableHead>
            <TableHead className="w-[120px]">Progress</TableHead>
            <TableHead className="w-[90px]">Records</TableHead>
            <TableHead>Activity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <ProgressTableRow key={row.dayKey} row={row} />
          ))}
        </TableBody>
      </Table>
    )
  }

  return (
    <Card>
      <CardHeader className="space-y-1.5">
        <CardTitle>Days</CardTitle>
        <CardDescription>
          Daily progress and activity for the last 30 days
        </CardDescription>
      </CardHeader>
      <CardContent>{renderBody()}</CardContent>
    </Card>
  )
}
