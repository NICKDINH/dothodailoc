import { Suspense } from 'react'
import SanPhamClient from './SanPhamClient'

export default function SanPhamPage() {
  return (
    <Suspense fallback={<div style={{ paddingTop: 100, minHeight: '100vh', background: '#F9F3E8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', color: '#8B6F55' }}>Đang tải...</div>
    </div>}>
      <SanPhamClient />
    </Suspense>
  )
}
