"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { toast } from "sonner"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { contact } from '@/lib/sendMessage'
import { AlignJustify } from 'lucide-react'

const Header = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [wait, setWait] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [sheetOpen,setSheetOpen] = useState(false)

  const handleSend = async (e) => {
    if (!wait) {
      e.preventDefault()
      setWait(true)
      const { success } = await contact(email, message)
      if (success) {
        toast.success("Message Sent!")
      } else {
        toast.error("Something went wrong!")
      }
      setDialogOpen(false)
      setWait(false)
      return
    }
  }

  const data = {
    name: "Saksham"
  }
  return (
    <header className='fixed z-50 backdrop-blur-md bg-white/30 top-0 w-full'>
      <nav className='grid grid-cols-2 lg:grid-cols-3 justify-between px-6 py-4 border-b items-center'>
        <Link href={"#hero"} className='text-2xl font-bold bg-gradient-to-br from-[#8BBEE8] to-black bg-clip-text text-transparent'>{data.name}</Link>

        <div className='col-span-2 hidden lg:flex justify-between items-center'>
          <ul className='hidden lg:flex gap-8 text-lg font-medium'>
            <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#hero"}>Home</Link></li>
            <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#about"}>About</Link></li>
            <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#techstack"}>Tech Stack</Link></li>
            <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#work"}>Projects</Link></li>
            <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#services"}>Services</Link></li>
          </ul>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <form>
              <DialogTrigger asChild>
                <Button className={"rounded-3xl text-lg px-7 py-2 hover:bg-[#2f374a] transition-colors duration-300"}>Contact</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Contact</DialogTitle>
                  <DialogDescription>
                    Fill the form to Contact me!
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" type="email" placeholder="example@example.com" />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="message">Message</Label>
                    <Input value={message} onChange={(e) => { setMessage(e.target.value) }} id="message" name="message" placeholder="Enter" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button disabled={wait} className={"rounded-full"} type="submit" onClick={handleSend}>Send</Button>
                </DialogFooter>
              </DialogContent>
            </form>
          </Dialog>
        </div>

        <div className='lg:hidden flex justify-end'>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger className=""><AlignJustify /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription asChild>
                  <ul onClickCapture={() => setSheetOpen(false)} className='flex flex-col items-center gap-8 font-bold py-8'>
                    <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#hero"}>Home</Link></li>
                    <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#about"}>About</Link></li>
                    <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#techstack"}>Tech Stack</Link></li>
                    <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#work"}>Projects</Link></li>
                    <li><Link className='hover:transition-colors duration-300 hover:text-[#8BBEE8]' href={"#services"}>Services</Link></li>

                    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                      <form>
                        <DialogTrigger asChild>
                          <Button className={"rounded-3xl text-lg px-7 py-2 hover:bg-[#2f374a] transition-colors duration-300"}>Contact</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Contact</DialogTitle>
                            <DialogDescription>
                              Fill the form to Contact me!
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4">
                            <div className="grid gap-3">
                              <Label htmlFor="email">Email</Label>
                              <Input value={email} onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" type="email" placeholder="example@example.com" />
                            </div>
                            <div className="grid gap-3">
                              <Label htmlFor="message">Message</Label>
                              <Input value={message} onChange={(e) => { setMessage(e.target.value) }} id="message" name="message" placeholder="Enter" />
                            </div>
                          </div>
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button disabled={wait} className={"rounded-full"} type="submit" onClick={handleSend}>Send</Button>
                          </DialogFooter>
                        </DialogContent>
                      </form>
                    </Dialog>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}

export default Header
