"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, Facebook, Instagram, Mail } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MobileMenu } from "@/components/mobile-menu"
import { AutoScrollCarousel } from "@/components/auto-scroll-carousel"

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* Top Navigation */}
        <nav className="fixed w-full top-0 z-50">
          <div className="container mx-auto">
            <div className="flex items-center justify-between px-4 py-3 bg-white/95 my-4 mx-4 rounded-full">
              <div className="flex items-center space-x-2">
                <div className="text-[#FF4D4F]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RentSmart-Logo_3-lc0yry16ENC57yK8YMKaBJriDN8Lsg.svg"
                    alt="RentSmart Logo"
                    width={24}
                    height={24}
                    className="text-[#FF4D4F]"
                  />
                </div>
                <span className="font-semibold text-[#FF4D4F]">RENTSMART</span>
              </div>
              <div className="flex items-center space-x-8">
                <div className="hidden md:block">
                  <NavigationMenu>
                    <NavigationMenuList className="space-x-8">
                      <NavigationMenuItem>
                        <NavigationMenuLink href="#" className="text-gray-800 hover:text-gray-600">
                          主頁
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-gray-800 hover:text-gray-600">
                          最新優惠
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute top-full w-[400px] bg-white rounded-lg shadow-lg">
                          <div className="grid grid-cols-2 gap-3 p-4">
                            <div className="space-y-2">
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                AEON
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                Alipay HK - 享受4倍積分
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                東亞銀行
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                中國建設銀行 - 亞洲
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                大新銀行
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                利嘉閣
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                中原
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                GoGoX
                              </NavigationMenuLink>
                            </div>
                            <div className="space-y-2">
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                國泰
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                匯豐銀行
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                富邦銀行
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                PrimeCredit 安信
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                美聯物業
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                香港置業
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                美聯工商舖
                              </NavigationMenuLink>
                              <NavigationMenuLink
                                href="#"
                                className="block hover:bg-gray-100 rounded px-3 py-2 transition-colors duration-200"
                              >
                                GoGoX Energy油卡
                              </NavigationMenuLink>
                            </div>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuLink href="#" className="text-gray-800 hover:text-gray-600">
                          回贈計算器
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-gray-800 hover:text-gray-600">
                          支援
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute top-full w-[200px] bg-white rounded-lg shadow-lg">
                          <div className="p-2">
                            <NavigationMenuLink href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
                              常見問題
                            </NavigationMenuLink>
                            <NavigationMenuLink href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
                              聯絡我們
                            </NavigationMenuLink>
                            <NavigationMenuLink href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
                              安全
                            </NavigationMenuLink>
                          </div>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-gray-800">繁體中文</NavigationMenuTrigger>
                      <NavigationMenuContent
                        className="absolute top-full w-[200px] bg-white rounded-lg shadow-lg"
                        align="end"
                      >
                        <div className="p-2">
                          <NavigationMenuLink href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
                            繁體中文
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
                            English
                          </NavigationMenuLink>
                          <NavigationMenuLink href="#" className="block px-4 py-2 rounded hover:bg-gray-100">
                            简体中文
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Button
                  variant="secondary"
                  size="sm"
                  className="hidden md:flex bg-pink-50 hover:bg-pink-100 text-[#FF4D4F]"
                >
                  下載App
                </Button>
                <MobileMenu />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-[#FF4D4F] min-h-[400px] flex items-center px-5">
          <div className="container mx-auto px-10 lg:px-[100px]">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="space-y-8 md:w-1/2">
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  從此
                  <br />
                  每個月交租
                  <br />
                  都有賺
                </h1>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white border-none text-lg px-8 py-6">
                  立即下載
                </Button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end items-end">
                <div>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Header-0770-oEYo5e4gdQGYDpwTjx2Gdvo201IT5E.png"
                    alt="Smiling young woman in white blazer and striped shirt"
                    width={200}
                    height={400}
                    className="w-full h-400"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Auto-scroll Carousel Section */}
        <section className="relative">
          <AutoScrollCarousel />
        </section>

        {/* Features Grid Section */}
        <section className="py-16 bg-[#f6f7fb]">
          <div className="container mx-auto px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Large Card */}
              <div className="rounded-3xl overflow-hidden bg-white shadow-lg">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-3Us0fiQonaJPbN8Cx4Aszho2pV6oW1.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Top Cards Row */}
                <div className="grid grid-cols-2 gap-6">
                  {/* RentSmart Card */}
                  <div className="rounded-3xl overflow-hidden bg-white shadow-lg relative group cursor-pointer">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sofakv-gxcaLmgiQvgyMJ1Czf1PNtdfEIXHNN.png"
                      alt="Person using RentSmart app on couch"
                      width={250}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="text-white">
                        <div className="font-medium">RentSmart交租</div>
                        <div className="flex items-center">
                          簡單快捷
                          <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rewards Card */}
                  <div className="rounded-3xl overflow-hidden bg-white shadow-lg relative group cursor-pointer">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sofakv-gxcaLmgiQvgyMJ1Czf1PNtdfEIXHNN.png"
                      alt="Comfortable RentSmart experience"
                      width={250}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="text-white">
                        <div className="font-medium">多重禮遇</div>
                        <div className="flex items-center">
                          立即行動
                          <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Large Card */}
                <div className="rounded-3xl overflow-hidden bg-white shadow-lg relative group cursor-pointer">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sofakv-gxcaLmgiQvgyMJ1Czf1PNtdfEIXHNN.png"
                    alt="Long term benefits of using RentSmart"
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="text-white">
                      <div className="font-medium text-lg">長期交租</div>
                      <div className="flex items-center text-lg">
                        租住賺里數
                        <ChevronRight className="w-6 h-6 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RentSmart Promo Section */}
        <section className="relative min-h-[600px] overflow-hidden bg-[#f6f7fb]">
          {/* Background Image */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iStock-1362328147%20(1)%201-yBCfoe01I2AtMwHqQhOgg1SA0uOOLz.png"
            alt="Person using RentSmart app with laptop"
            width={1920}
            height={800}
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />

          {/* Content Container */}
          <div className="relative container mx-auto px-4 lg:px-[60px] py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Phone Mockup */}
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%202025-02-03_235401-yUsp6kyI9Rr8vSMUFmkHu48WWSjio3.png"
                  alt="RentSmart App interface showing housing options"
                  width={300}
                  height={600}
                  className="w-full max-w-[300px] mx-auto transform rotate-[-5deg] shadow-2xl rounded-[2.5rem]"
                />
              </div>

              {/* Text Content */}
              <div className="space-y-6 text-black md:max-w-xl">
                <Image
                  src="/placeholder.svg?height=40&width=160"
                  alt="RentSmart Logo"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">將交租變成網上消費</h2>
                <p className="text-2xl md:text-3xl text-white">從此交租都可以賺里數同回贈</p>
              </div>
            </div>
          </div>
        </section>

        {/* Asia Miles Banner Section */}
        <section className="my-16">
          <div className="container relative h-[400px] md:h-[300px] overflow-hidden">
            {/* Background Image */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dreamstime_319117175-uhi72Bc7mCj2KA00ir9R6sXv029m4t.png"
              alt="Happy couple playing with moving boxes in their new home"
              width={1200}
              height={300}
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="w-full md:w-1/2 p-6 md:p-8 space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-teal-700">每月交租直接兌換「亞洲萬里通」里數</h2>
                <p className="text-gray-700 font-medium">租金兌換里數每 $HK6 = 1里</p>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800">渣打國泰MasterCard專享</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">• 迎新賺高達100,000里</li>
                    <li className="flex items-center gap-2">• 迎新期間更低至 $HK1 = 1里 !!</li>
                    <li className="flex items-center gap-2">• 優惠服務費低至1.5%</li>
                  </ul>
                </div>
                <p className="font-medium text-gray-800">
                  立即經RentSmart用渣打國泰MasterCard交租
                  <br />
                  專享更多禮遇!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Card Info Section */}
        <section className="container mx-auto px-4 lg:px-[60px] py-16 bg-[#f6f7fb]">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700">用信用卡都可以交租?</h2>
              <div className="space-y-4 text-gray-700">
                <p>只要透過RentSmart平台，租客就可以用信用 卡交租，賺取等同於網上消費的里數獎賞及現金 回贈！</p>
                <p className="font-semibold">實行一份租金，多重享受！</p>
                <p>從此無須額外消費，一樣月月賺里數， 密密去旅行，話時快就飛。</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sofakv-CUMxGEAYTHC21tn0ASpvbLOdYlyjcD.png"
                alt="Woman relaxing on couch while using RentSmart app"
                width={600}
                height={500}
                className="rounded-3xl w-full h-auto"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20250123-standard%20-shooting-KV0828-R_2%201-nFv219LmbXmNSrehjnkwo4s19ZuI38.png"
                alt="Woman in white blazer demonstrating RentSmart app interface on phone"
                width={600}
                height={500}
                className="rounded-3xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700">
                只需簡單步驟 開始
                <br />
                將租金換成獎賞
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>• 前往下載RentSmart 應用程式</li>
                <li>• 完成簡單身份驗證並上傳租約</li>
              </ul>
              <p className="font-medium text-gray-700">即可使用RentSmart以信用卡交租！</p>
            </div>
          </div>
        </section>

        {/* Action Rewards Section */}
        <section className="container mx-auto px-4 lg:px-[60px] py-16 bg-[#f6f7fb]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700">立即行動 多重禮遇</h2>
              <div className="space-y-4 text-gray-700">
                <p>推廣期內，註冊並使用渣打國泰MasterCard進 行首次租金交易即享豁免首月服務費。</p>
                <p>
                  即日起至2025年5月31日，RentSmart新用戶 連續使用渣打國泰MasterCard交租達3個月，
                  更享額外2,000里獎賞，並可參加抽獎有機會贏 取現金回贈達$HK 20,000。
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%20iStock-974241730_S.jpg-wWhqka6WWJ5MpvOnfcfgSW9WG1R0oy.jpeg"
                alt="Happy couple using RentSmart app together on couch"
                width={600}
                height={500}
                className="rounded-3xl w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Standard Chartered Section */}
        <section className="container mx-auto px-4 lg:px-[60px] py-16 bg-[#f6f7fb]">
          {/* Top Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center mb-24">
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Download%20PNG%20derivative-sc_lock-up_t-chinese_grey_rgb-1CPGSm8Qw1ANXHiBALHI1KNEuSDGMo.png"
                alt="Standard Chartered Bank logo with English and Chinese text"
                width={400}
                height={100}
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-700">用渣打出糧服務享更多優惠</h2>
              <p className="text-gray-700">
                推廣期內，合資格Rentsmart用戶使用渣打自動轉賬出糧服
                務，及維持自動轉賬出糧服務直至相關獎賞存入銀行戶口，即可 獲享額外3,000里。
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">立即了解更多</Button>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              經RentSmart用渣打國泰MasterCard交租
              <br />
              幫您更快賺取飛行里數
            </h2>
          </div>
        </section>

        {/* Tokyo Promo Section */}
        <section className="container mx-auto px-4 lg:px-[60px] py-16 bg-[#f6f7fb]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iStock-1322041119%20-%20S%201%20(1)-9ENtsU65HInEBbFsmKrZ4Z5CMdnXCk.png"
                alt="Tokyo Tower framed by beautiful pink cherry blossoms against a bright blue sky"
                width={600}
                height={800}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-teal-700">想去東京睇櫻花?</h2>
              <div className="space-y-4">
                <p className="text-gray-700">租金兌換機票實例:</p>
                <div className="border rounded-xl overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="bg-teal-700 text-white p-4 w-1/2">目的地:</td>
                        <td className="p-4">東京</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-teal-700 text-white p-4">來回經濟客位所需里數:</td>
                        <td className="p-4">50,000里</td>
                      </tr>
                      <tr className="border-b">
                        <td className="bg-teal-700 text-white p-4">每月租金:</td>
                        <td className="p-4">HK$30,000</td>
                      </tr>
                      <tr>
                        <td className="bg-teal-700 text-white p-4">使用的信用卡:</td>
                        <td className="p-4">渣打國泰 Mastercard®</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mt-4">選用RentSmart交租10個月，即可兌換來回東京的機票</p>
              </div>
            </div>
          </div>
        </section>

        {/* Credit Card Application Section */}
        <section className="container mx-auto px-4 lg:px-[60px] py-16 bg-[#f6f7fb]">
          <div className="space-y-12">
            {/* Credit Cards Display */}
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-30 h-44 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCB_CXcard_T1-wPEAy9nJxn8yoJI4oJA3kWT5jrXY4S.png"
                  alt="Cathay Standard Chartered Priority Card"
                  width={288}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-30 h-44 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCB_CXcard_T0-u4JDjGTMnGzzHkVGtU2rDPLKYdl0lC.png"
                  alt="Cathay Standard Chartered Card"
                  width={288}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-30 h-44 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SCB_CXcard_T2-adD5qNABYApCKKZKZk98V00C3SMDny.png"
                  alt="Cathay Standard Chartered Priority Private Card"
                  width={288}
                  height={176}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  仲未有渣打國泰
                  <br />
                  Mastercard?
                </h2>
                <p className="text-gray-700">
                  立即申請，賺取額外迎新獎賞全新信用卡
                  <br />
                  客戶於迎新期內簽賬獎賞
                </p>
                <p className="text-2xl md:text-3xl font-bold text-teal-700">高達100,000里</p>
              </div>
              <Button className="w-full md:w-auto bg-teal-700 hover:bg-teal-800 text-white px-16 py-6 text-xl rounded-full">
                立即申請
              </Button>
            </div>
          </div>
        </section>

        {/* Terms and Conditions Section */}
        <section className="container mx-auto px-4 lg:px-[60px] py-16 bg-[#f6f7fb]">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-center mb-8">重要資訊及細則:</h3>
            <div className="space-y-4 text-gray-700 text-sm">
              <p className="font-semibold">借定唔借？還得到先好借！</p>

              <p className="font-medium">合資格持卡人:</p>
              <ul className="space-y-3 list-disc pl-5">
                <li>於RentSmart APP作合資格簽賬可免一次性1.5%服務費，最高可達HK$300（或等值金額）(獎賞1)。</li>
                <li>
                  於RentSmart
                  APP及推廣期內連續2個月每月累積合資格簽賬滿HK$15,000以上可獲2,000里數(獎賞2)，並可自動參加大 抽獎
                  (獎賞3)。
                </li>
                <li>
                  於推廣期內符合獎賞之條件並透過渣打出糧戶口使用自動轉賬出糧服務，及維持自動轉賬出糧服務直至相關獎賞存入
                  銀行戶口內，即可獲享額外3,000里。自動轉賬出糧服務指每月透過 (a)
                  客戶之僱主經由渣打銀行指定之電子出糧轉賬方式或 (b)
                  發自其他非渣打銀行的本地銀行之指定常行指示（交易說明必須包含「SALARY」、「SALARIES」、「WAGE」、「WAGES」或「PAYROLL」）將薪金自動轉賬於銀行戶口內。自動轉賬出糧服務不包括海外電匯、本地電子付款、支票或現金。若銀行戶口於里數存入時被暫時終止運作或終束、或合資格客戶停止透過銀行戶口使用本行自動轉賬出糧服務，則將不再符合資格獲享此獎賞。
                </li>
                <li>
                  每位合資格持卡人於推廣期內只可享每項獎賞一次，不論符合多少次獎賞要求，亦不論每位合資格持卡人擁有多少合資格卡。
                </li>
                <li>
                  亞洲萬里通及RentSmart保留隨時更改或取消優惠及/或修改或修訂此等條款及細則之權利，而不會作任何事先通知。如有任何爭議，亞洲萬里通有限公司及RentSmart所作的決定為最終及不可推翻
                </li>
                <li>須受其他國泰會員條款及細則約束。</li>
              </ul>

              <p className="text-sm text-gray-600">詳細條款及細則，請參閱:</p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="relative overflow-hidden rounded-3xl mx-4 my-16 p-5">
          {/* Background Image */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/iStock-BEA2.jpg-NjteR0Df2VMMdZdplrpCGYcWLkOdI6.jpeg"
              alt="Woman smiling while using smartphone in comfortable home setting"
              width={1920}
              height={500}
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              priority
            />
            {/* Overlay for better textreadability */}
            <div className="absolute inset-0 " />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
            <div className="max-w-xl space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">下載 RentSmart</h2>
              <p className="text-xl md:text-2xl text-white/90">即時開始交租 即簽即賺</p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="h-[40px] w-auto"
                />
                <Image
                  src="/placeholder.svg?height=40&width=135"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="h-[40px] w-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Terms Section */}
        <section className="container mx-auto px-[50px] pb-16 bg-[#fefbe8]">
          <div className="max-w-4xl mx-auto space-y-6 p-6">
            <div className="space-y-4 text-gray-700 text-sm">
              <p className="font-medium mb-6">
                *適用於指定信用卡首2個月內累積指定合資格簽賬額之全新信用卡客戶，受條款及細則約束。借定唔借？還得到先好借！
              </p>
              <p className="font-medium mb-6">
                *適用於指定信用卡首2個月內累積指定合資格簽賬額之全新信用卡客戶，受條款及細則約束。借定唔借？還得到先好借！
              </p>

              <p className="font-medium mb-6">
                *適用於指定信用卡首2個月內累積指定合資格簽賬額之全新信用卡客戶，受條款及細則約束。借定唔借？還得到先好借！
              </p>

              <p className="font-medium">推廣詳情:</p>
              <p>
                *
                須於登記RentSmart賬戶時輸入指定邀請碼，方可享推廣優惠。如登記時沒有輸入邀請碼將無法再次領取優惠，恕不補發。
              </p>

              <ul className="space-y-3 list-disc pl-5">
                <li>推廣優惠適用於2024年2月1日至2024年12月31日，包括首尾兩日。</li>
                <li>
                  此優惠只適用於合資格簽賬會員並同時為RentSmart註冊用戶。如要登記成為RentSmart註冊用戶，可於
                  RentSmart手機應用程式進行登記。
                </li>
                <li>此優惠只適用於透過RentSmart手機應用程式進行交易。</li>
                <li>
                  須於登記RentSmart賬戶時輸入指定邀請碼，方可享推廣優惠。如登記時沒有輸入邀請碼將無法再次領取優惠，恕不補發。
                </li>
                <li>
                  5000「亞洲萬里通」里數回贈將於成功以Visa或Mastercard信用卡支付單筆HK$3,000或以上之租金後，用戶以由RentSmart提供的網頁或表格提交國泰會員賬號，並於30個工作天內將「亞洲萬里通」里數回贈存入用戶所提供的國泰會員賬戶。
                </li>
                <li>優惠不可兌換現金、轉售/兌換為其他貨品/服務，亦不可與任何其他推廣優惠同時使用。</li>
                <li>
                  亞洲萬里通及RentSmart保留隨時更改或取消優惠及/或修改或修訂此等條款及細則之權利，而不會作任何事先通知。如有任何爭議，亞洲萬里通有限公司及RentSmart所作的決定為最終及不可推翻。
                </li>
                <li>須受其他國泰會員條款及細則約束。</li>
              </ul>

              <p className="mt-8">
                須於登記RentSmart賬戶時輸入指定邀請碼，方可享推廣優惠。如登記時沒有輸入邀請碼將無法再次領取優惠，恕不補發。
              </p>

              <ul className="space-y-3 list-disc pl-5">
                <li>推廣優惠適用於2024年10月27日至2025年1月31日，包括首尾兩日。</li>
                <li>
                  此優惠只適用於合資格簽賬兼註冊泰會員並同時為RentSmart註冊用戶。如要登記成為RentSmart註冊用戶，可於
                  RentSmart手機應用程式進行登記。
                </li>
                <li>此優惠只適用於透過RentSmart手機應用程式進行交易。</li>
                <li>
                  須於登記RentSmart賬戶時輸入指定邀請碼，方可享推廣優惠。如登記時沒有輸入邀請碼將無法再次領取優惠，恕不補發。
                </li>
                <li>
                  用戶成功以Visa或Mastercard信用卡支付單筆HK$3,000或以上之工商租金後，於RentSmart提供的網頁或表格提交國泰會員賬號，1,000「亞洲萬里通」里數將於30個工作天內存入用戶所提供的國泰會員賬戶。
                </li>
                <li>優惠不可兌換現金、轉售/兌換為其他貨品/服務，亦不可與任何其他推廣優惠同時使用。</li>
                <li>
                  亞洲萬里通及RentSmart保留隨時更改或取消優惠及/或修改或修訂此等條款及細則之權利，而不會作任何事先通知。如有任何爭議，亞洲萬里通有限公司及RentSmart所作的決定為最終及不可推翻。
                </li>
                <li>須受其他國泰會員條款及細則約束。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-black text-white pt-16 pb-8">
          <div className="container mx-auto px-4 lg:px-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
              {/* Company Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="text-red-500">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RentSmart-Logo_3-lc0yry16ENC57yK8YMKaBJriDN8Lsg.svg"
                      alt="RentSmart Logo"
                      width={24}
                      height={24}
                      className="text-red-500"
                    />
                  </div>
                  <span className="text-xl text-red-500">RENTSMART</span>
                </div>
                <h3 className="text-xl font-bold">關於RentSmart</h3>
                <p className="text-gray-400">RentSmart是你的租務生活夥伴，讓你輕鬆享受新生活。新智慧。</p>
                <p className="text-gray-400">
                  我們正改變租務市場的固有模式，以嶄新服務為租客及業主突破框架，為你構建全新租務生態系統。時刻帶來獎賞及驚喜。
                </p>
                <p className="text-sm text-gray-500">
                  星期一至五上午9時30分至下午6時30分
                  <br />
                  星期六、日及公眾假期休息
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/85269977887"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <Image
                      src="/placeholder.svg?height=20&width=20"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/rentsmart.hk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/rentsmart_hk/?fbclid=IwZXh0bgNhZW0CMTEAAR2obnBMZDnPTvUqTUsjjYaUakxNl11kWTjtMRkwz0eCsd_AVrCUxHuCjJU_aem_LFRW4xniLAcvfkywwBx2AA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:cs@rentsmart.com.hk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <Image
                  src="/placeholder.svg?height=30&width=120"
                  alt="Cyberport"
                  width={120}
                  height={30}
                  className="h-8 w-auto"
                />
              </div>

              {/* Site Map */}
              <div>
                <h3 className="text-xl font-bold mb-6">網站地圖</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      主頁
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/calculator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      回贈計算器
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/faq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      常見問題
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/safety-security"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      安全
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/contact-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      聯絡我們
                    </a>
                  </li>
                </ul>
              </div>

              {/* Latest Offers Column 1 */}
              <div>
                <h3 className="text-xl font-bold mb-6">最新優惠</h3>
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/aeon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      AEON
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/alipay-hk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Alipay HK - 享受4倍積分
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/bea"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      東亞銀行
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/cathay-pacific"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      國泰
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/dah-sing-bank"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      大新銀行
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/fubon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      富邦銀行
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/gogox"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      GoGoX
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/gogox-energy-insurance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      GoGoX Energy油卡
                    </a>
                  </li>
                </ul>
              </div>

              {/* Latest Offers Column 2 */}
              <div className="pt-[52px]">
                <ul className="space-y-4 text-gray-400">
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/hkp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      香港置業
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/hsbc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      匯豐銀行
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/midlandici"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      美聯工商舖
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/ricacorp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Ricacorp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rentsmart.com.hk/partners-and-promotions/primecredit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      PrimeCredit 安信
                    </a>
                  </li>
                </ul>
              </div>

              {/* Download App */}
              <div>
                <h3 className="text-xl font-bold mb-6">下載 App</h3>
                <div className="flex flex-col gap-4">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                  <Image
                    src="/placeholder.svg?height=40&width=135"
                    alt="Get it on Google Play"
                    width={135}
                    height={40}
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 pt-8 text-sm text-gray-500">
              <div className="container mx-auto flex flex-wrap items-center justify-center space-x-4">
                <div>© 2024 RentSmart. All Rights Reserved.</div>
                <a
                  href="https://www.rentsmart.com.hk/terms-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  使用條款
                </a>
                <a
                  href="https://www.rentsmart.com.hk/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  私隱政策
                </a>
                <a
                  href="https://www.rentsmart.com.hk/disclaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  免責聲明
                </a>
                <a
                  href="https://www.rentsmart.com.hk/cookie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Cookie政策
                </a>
              </div>
            </div>
          </div>
        </footer>
        <a
          href="https://wa.me/85269977887"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg transition-colors z-50"
        >
          <Image src="/placeholder.svg?height=24&width=24" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
        </a>
      </main>
    </>
  )
}

