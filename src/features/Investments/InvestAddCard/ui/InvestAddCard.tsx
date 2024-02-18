'use client'

import { Button, Input, Select } from '@/shared/ui'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { insertItem } from '@/entities/Investments'
import { useSelector } from 'react-redux'
import { getSessionUserId } from '@/entities/Session'

const selectCurrencyData = [
    {
        label: 'USD',
        value: 'USD',
    },
    {
        label: 'RUB',
        value: 'RUB',
    },
]

const selectInvestType = [
    {
        label: 'STOCK',
        value: 'STOCK',
    },
    {
        label: 'CRYPTO',
        value: 'CRYPTO',
    },
]

export const InvestAddCard = () => {
    const userId = useSelector(getSessionUserId)
    const [n, setN] = useState<string>('')
    const [currency, setCurrency] = useState('')
    const [type, setType] = useState('')

    const onSubmit = () => {
        n && insertItem(+n, currency, userId, type)
            .then(() => {
                setN('')
            })
            .catch(e => console.error(e))
    }

    return <div className='flex gap-4'>
        <Input
            placeholder="Input your value"
            value={n}
            onChange={(val) => setN(val.target.value)}
        />
        <Select data={selectCurrencyData} onValueChange={setCurrency} placeholder="Currency" />
        <Select data={selectInvestType} onValueChange={setType} placeholder="Type"/>
        <Button
            onClick={onSubmit}
            variant={'secondary'}
            size={'icon'}
            className="shrink-0"
        >
            <Plus width={14} height={14}/>
        </Button>
    </div>
}
