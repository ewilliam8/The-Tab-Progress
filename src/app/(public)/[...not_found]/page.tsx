import Image from 'next/image';

export default function Custom404() {
    return <div className={'mx-auto flex flex-col gap-8 items-center pt-24'}>
        <Image
            priority
            src='/images/not_found.svg'
            alt="Not Found"
            width={400}
            height={400}
        />
        <h2>Page Not Found</h2>
    </div>
}
