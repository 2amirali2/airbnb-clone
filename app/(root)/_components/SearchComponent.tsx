"use client"

import { Search } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const SearchComponent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center gap-x-2 font-bold border rounded-full w-fit px-4 py-2">
          <p>Anywhere</p>
          <p className="border-r border-l px-2">Any Weeks</p>
          <p>Any Guests</p>
          <Search className="bg-rose-600 p-0.5 text-white rounded-full" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
export default SearchComponent
