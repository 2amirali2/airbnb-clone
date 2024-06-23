"use client"

import { categoryItems } from "@/lib/categoryItems"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react"

const CategoryShowcase = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const search = searchParams.get("filter")

    const createQueryString = useCallback((name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(name, value)

        return params.toString()
    }, [searchParams])

  return (
    <div className="flex gap-x-8 mt-4 overflow-scroll px-2 sm:px-0 scrollbar-hide">
      {categoryItems.map((category) => (
        <Link
        href={pathname + "?" + createQueryString("filter", category.name)}
          key={category.id}
          className={cn("flex flex-col items-center hover:opacity-100 hover:border-b-2 hover:border-black text-xs opacity-60 text-center transition duration-200 px-2 ", 
            search === category.name && "opacity-100 border-b-2 border-black"
          )}
        >
            <Image
              src={category.imageUrl}
              alt={category.name}
              width={26}
              height={26}
              className="object-contain"
            />
          <span className="py-2 truncate">{category.title}</span>
        </Link>
      ))}
    </div>
  )
}
export default CategoryShowcase
