import * as React from 'react'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from './Select'
import { cn } from '@/shared/lib/cn'
import { ComponentProps } from 'react'

type SelectCompound = {
    data: {value: string; label: string}[]
    className?: string
    placeholder?: string
} & ComponentProps<typeof Select>

export function SelectCompound({ data, className, placeholder, ...props }: SelectCompound) {
    return (
        <Select {...props}>
            <SelectTrigger className={cn('w-[180px]', className)}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {data.map(element =>
                        <SelectItem key={element.value} value={element.value}>{element.label}</SelectItem>
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
