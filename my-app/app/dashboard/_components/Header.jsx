import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px', borderBottom: '1px solid lightgray' }}>
        <div>
            {/* <Image src={'/file.svg'} width={40} height={40}/> */}
            <UserButton />
        </div>
    </div>
)
}

export default Header
