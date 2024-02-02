'use client'

import { Button } from '@/shared/ui'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    error && console.error(error)

    return (
        <div>
            <h2>Something went wrong!</h2>
            <Button
                onClick={
                    () => reset()
                }
            >
                Try again
            </Button>
        </div>
    )
}
