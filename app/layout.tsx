import type { Metadata } from 'next'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Đồ Thờ & Đồ Gỗ Đại Lộc – Chuẩn Tâm Linh, Đậm Hồn Việt',
  description: 'Hơn 50 năm chế tác đồ thờ, đồ gỗ truyền thống tại làng nghề Cát Đằng, Nam Định. Chuyên bàn thờ, tượng thờ, hoành phi câu đối, thiết kế phòng thờ.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
