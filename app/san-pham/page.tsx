'use client'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { products, categories } from '@/data/data'

export default function SanPhamPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeCat, setActiveCat] = useState(searchParams.get('cat') || 'all')

  useEffect(() => {
    setActiveCat(searchParams.get('cat') || 'all')
  }, [searchParams])

  const handleCatChange = (slug: string) => {
    setActiveCat(slug)
    router.push(slug === 'all' ? '/san-pham' : `/san-pham?cat=${slug}`)
  }

  const filtered = activeCat === 'all' ? products : products.filter(p => p.categorySlug === activeCat)

  return (
    <div style={{ paddingTop: 80, background: '#F9F3E8', minHeight: '100vh' }}>
      <style>{`
        .product-card { transition: transform 0.3s; }
        .product-card:hover { transform: translateY(-4px); }
        .product-card img { transition: transform 0.5s; }
        .product-card:hover img { transform: scale(1.06); }
        .filter-bar { overflow-x: auto; -webkit-overflow-scrolling: touch; }
        .filter-bar::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="page-header" style={{ background: '#2A1A0A' }}>
        <div style={{ fontSize: '0.68rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 12 }}>◆ Danh mục sản phẩm</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 300, color: '#F9F3E8' }}>
          Đồ thờ <em style={{ color: '#E8C97A' }}>Đại Lộc</em>
        </h1>
      </div>

      <div className="filter-bar" style={{ background: '#F9F3E8', borderBottom: '1px solid #EDE0C8', padding: '0 24px', display: 'flex', gap: 0 }}>
        <button onClick={() => handleCatChange('all')} style={{ padding: '14px 18px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.74rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Nunito',sans-serif", fontWeight: 600, color: activeCat === 'all' ? '#C9A84C' : '#8B6F55', borderBottom: activeCat === 'all' ? '2px solid #C9A84C' : '2px solid transparent', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
          Tất cả ({products.length})
        </button>
        {categories.map(cat => (
          <button key={cat.slug} onClick={() => handleCatChange(cat.slug)} style={{ padding: '14px 18px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.74rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Nunito',sans-serif", fontWeight: 600, color: activeCat === cat.slug ? '#C9A84C' : '#8B6F55', borderBottom: activeCat === cat.slug ? '2px solid #C9A84C' : '2px solid transparent', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
            {cat.name} {cat.count > 0 ? `(${cat.count})` : ''}
          </button>
        ))}
      </div>

      <div style={{ padding: '32px 24px 64px', background: '#F9F3E8' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#8B6F55' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>🔨</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.4rem' }}>Đang cập nhật...</div>
            <p style={{ marginTop: 10, fontSize: '0.9rem', fontWeight: 300 }}>Vui lòng liên hệ để được tư vấn trực tiếp.</p>
            <Link href="/lien-he" className="btn-primary" style={{ display: 'inline-block', marginTop: 24 }}>Liên hệ tư vấn</Link>
          </div>
        ) : (
          <div className="product-grid-4">
            {filtered.map(p => (
              <Link key={p.slug} href={`/san-pham/${p.slug}`} className="product-card" style={{ background: '#fff', display: 'block' }}>
                <div style={{ height: 200, overflow: 'hidden', background: '#EDE0C8' }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px 16px 20px' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 6 }}>{p.category}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.05rem', fontWeight: 600, color: '#2A1A0A', marginBottom: 6, lineHeight: 1.3 }}>{p.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#8B6F55', lineHeight: 1.6, fontWeight: 300 }}>{p.shortDesc}</div>
                  <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#5C3D1E' }}>{p.price}</span>
                    <span style={{ fontSize: '0.68rem', color: '#C9A84C', fontWeight: 700 }}>Xem →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
