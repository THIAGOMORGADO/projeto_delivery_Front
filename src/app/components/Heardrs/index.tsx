import { Link, UserCircle, List } from 'lucide-react'
import React, { useState } from 'react'

export default function Headers() {
  const [loggend, setLoggend] = useState(false)
  return (
    <div className="w-max-[600px] h-screen ">
       <header className="bg-slate-400 w-full font-bold flex justify-between h-[8%] items-center px-5 text-white">
        <h1>Restaurante do fulando</h1>
        {!loggend ?  
            <Link href="/signin"> 
              <UserCircle size={32} color="#fff"/>
            </Link> : 
          <List size={32} color="#fff"/>
        } 
       </header>
      </div>
  )
}
