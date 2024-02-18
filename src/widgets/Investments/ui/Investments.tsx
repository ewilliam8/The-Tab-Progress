import { InvestAddCard } from '@/features/Investments/InvestAddCard'
import { InvestmentsList } from '@/features/Investments/InvestmentsList'

export const Investments = () => {
    return (
        <div className="flex flex-col gap-8">
            Investments Page
            <InvestAddCard/>
            <InvestmentsList />
        </div>
    )
}
