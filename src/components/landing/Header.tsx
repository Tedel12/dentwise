import { SignInButton, SignUpButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/20 backdrop-blur-md h-16'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <Link href="/" className='flex items-center gap-2'>
          <Image src={"/logo.png"} alt='dentwise logo' width={32} height={32} className='w-11' />
          <span className='font-semibold text-lg'>DentWise</span>
        </Link>

        <div className='hidden md:flex items-center gap-8'>
          <a href="#" className='text-muted-foreground hover:text-foreground'>Comment ça marche ?</a>
          <a href="#" className='text-muted-foreground hover:text-foreground'>Tarification</a>
          <a href="#" className='text-muted-foreground hover:text-foreground'>A propos</a>
        </div>

        <div className='flex items-center gap-3 cursor-pointer'>
          <SignUpButton mode='modal'>
            <Button className='cursor-pointer' variant={"ghost"} size={"sm"}>
              Se connecter
            </Button>
          </SignUpButton>
          <SignUpButton mode='modal'>
            <Button className='cursor-pointer' size={"sm"}>
              S'inscrire
            </Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  )
}

export default Header
