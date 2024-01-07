import { Heading, Separator, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

interface Props {
    name: string,
    email: string,
    description: string,

}
const ShowActor = ({ name, email, description }: Props) => {
    return (
        <div className='flex flex-col gap-3'>
            <div>
                <Heading>{name}</Heading>
                <Separator size="4" />
            </div>
            <Text color='blue'><Link href={`mailto:${email}`}>{email}</Link></Text>
            <Text>{description}</Text>
        </div>

    )
}

export default ShowActor