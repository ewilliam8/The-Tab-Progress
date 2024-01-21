import {
    AlertDialogRoot,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from './AlertDialog'
import { ReactNode } from 'react'

type AlertDialogProps = {
    trigger: ReactNode,
    title: string,
    description: string,
    onSubmit: () => void,
    submitText?: string,
    cancelText?: string,
}

export function AlertDialogCompound({
    trigger, title, description, submitText = 'Submit', cancelText = 'Cancel', onSubmit }: AlertDialogProps) {
    return (
        <AlertDialogRoot>
            <AlertDialogTrigger asChild>
                {trigger}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>{title}</AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>{cancelText}</AlertDialogCancel>
                    <AlertDialogAction onClick={onSubmit}>{submitText}</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogRoot>
    )
}
