"use client"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface NavItem {
  title: string
  href?: string
  children?: { title: string; href: string }[]
}

const navigation: NavItem[] = [
  {
    title: "主頁",
    href: "#",
  },
  {
    title: "最新優惠",
    children: [
      { title: "AEON", href: "#" },
      { title: "Alipay HK - 享受4倍積分", href: "#" },
      { title: "東亞銀行", href: "#" },
      { title: "中國建設銀行 - 亞洲", href: "#" },
      { title: "大新銀行", href: "#" },
      { title: "利嘉閣", href: "#" },
      { title: "中原", href: "#" },
      { title: "GoGoX", href: "#" },
      { title: "國泰", href: "#" },
      { title: "匯豐銀行", href: "#" },
      { title: "富邦銀行", href: "#" },
      { title: "PrimeCredit 安信", href: "#" },
      { title: "美聯物業", href: "#" },
      { title: "香港置業", href: "#" },
      { title: "美聯工商舖", href: "#" },
      { title: "GoGoX Energy油卡", href: "#" },
    ],
  },
  {
    title: "回贈計算器",
    href: "#",
  },
  {
    title: "支援",
    children: [
      { title: "常見問題", href: "#" },
      { title: "聯絡我們", href: "#" },
      { title: "安全", href: "#" },
    ],
  },
]

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 4H8V8H4V4ZM10 4H14V8H10V4ZM16 4H20V8H16V4ZM4 10H8V14H4V10ZM10 10H14V14H10V10ZM16 10H20V14H16V10ZM4 16H8V20H4V16ZM10 16H14V20H10V16ZM16 16H20V20H16V16Z"
              fill="currentColor"
            />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[300px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          {navigation.map((item) => (
            <div key={item.title} className="border-b last:border-b-0">
              {item.children ? (
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between p-4 text-left">
                    <span>{item.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-gray-50">
                    {item.children.map((child) => (
                      <a key={child.title} href={child.href} className="block px-8 py-3 hover:bg-gray-100">
                        {child.title}
                      </a>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <a href={item.href} className="block p-4 hover:bg-gray-50">
                  {item.title}
                </a>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

