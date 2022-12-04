import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import axios from 'axios';

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    axios.get('/api').then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <>
    <span>Experimental project</span>
    <ul>
      <li>
        <Link href="/a" as="/a">
          <span className='text-green-500'>a</span>
        </Link>
      </li>
      <li>
        <Link href="/b" as="/b">
          b
        </Link>
      </li>
    </ul> 
    </>
  )
}