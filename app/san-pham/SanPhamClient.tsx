'use client'
import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { products, categories } from '@/data/data'

export default function SanPhamClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeCat, setActiveCat] = useState('all')

  useEffect(() => {
    setActiveCat(searchParams.get('cat') || 'all')
  }, [searchParams])

  const handleCatChange = (slug: string) => {
    setActiveCat(slug)
    router.push(slug === 'all' ? '/san-pham' : `/san-pham?cat=${slug}`)
  }

  const filtered = activeCat === 'all' ? products : products.filter(p => p.categorySlug === activeCat)

  return (
    <div style={{ paddingTop: 100 }}>
      <style>{`
        .product-card { transition: transform 0.3s; background: #fff; display: block; }
        .product-card:hover { transform: translateY(-4px); }
        .product-card img { transition: transform 0.5s; }
        .product-card:hover img { transform: scale(1.06); }
        .sp-product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #EDE0C8; }
        @media (max-width: 768px) {
          .sp-product-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .sp-filter { padding: 0 8px !important; }
          .sp-header { padding: 40px 20px 32px !important; }
          .sp-body { padding: 24px 20px 60px !important; }
        }
        @media (max-width: 480px) {
          .sp-product-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="sp-header" style={{ background: '#2A1A0A', padding: '60px 60px 50px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 14 }}>
          {'◆ Danh mục sản phẩm'}
        </div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 300, color: '#F9F3E8' }}>
          {'Đồ thờ '}<em style={{ color: '#E8C97A' }}>{'Đại Lộc'}</em>
        </h1>
        <p style={{ fontSize: '0.92rem', color: 'rgba(249,243,232,0.6)', marginTop: 16, fontWeight: 300, maxWidth: 500, margin: '16px auto 0' }}>
          {'Tất cả sản phẩm được chế tác thủ công từ gỗ quý, bởi nghệ nhân làng nghề Cát Đằng, Nam Định.'}
        </p>
      </div>

      <div className="sp-filter" style={{ background: '#F9F3E8', borderBottom: '1px solid #EDE0C8', padding: '0 60px', display: 'flex', gap: 0, overflowX: 'auto' }}>
        <button onClick={() => handleCatChange('all')} style={{ padding: '16px 18px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Nunito, sans-serif', fontWeight: 600, color: activeCat === 'all' ? '#C9A84C' : '#8B6F55', borderBottom: activeCat === 'all' ? '2px solid #C9A84C' : '2px solid transparent', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
          {`Tất cả (${products.length})`}
        </button>
        {categories.map(cat => (
          <button key={cat.slug} onClick={() => handleCatChange(cat.slug)} style={{ padding: '16px 18px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Nunito, sans-serif', fontWeight: 600, color: activeCat === cat.slug ? '#C9A84C' : '#8B6F55', borderBottom: activeCat === cat.slug ? '2px solid #C9A84C' : '2px solid transparent', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
            {cat.count > 0 ? `${cat.name} (${cat.count})` : cat.name}
          </button>
        ))}
      </div>

      <div className="sp-body" style={{ padding: '40px 60px 80px', background: '#F9F3E8' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: '#8B6F55' }}>
            <div style={{ fontSize: '3rem', marginBottom: 16 }}>🔨</div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', marginBottom: 10 }}>{'Đang cập nhật sản phẩm...'}</div>
            <p style={{ fontSize: '0.9rem', fontWeight: 300, marginBottom: 24 }}>{'Vui lòng liên hệ để được tư vấn trực tiếp.'}</p>
            <Link href="/lien-he" style={{ background: '#C9A84C', color: '#2A1A0A', padding: '13px 32px', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Nunito, sans-serif', fontWeight: 700, display: 'inline-block' }}>
              {'Liên hệ tư vấn'}
            </Link>
          </div>
        ) : (
          <div className="sp-product-grid">
            {filtered.map(p => (
              <Link key={p.slug} href={`/san-pham/${p.slug}`} className="product-card">
                <div style={{ height: 200, overflow: 'hidden', background: '#EDE0C8' }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '18px 18px 22px' }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 7 }}>{p.category}</div>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', fontWeight: 600, color: '#2A1A0A', marginBottom: 8, lineHeight: 1.3 }}>{p.name}</div>
                  <div style={{ fontSize: '0.8rem', color: '#8B6F55', lineHeight: 1.65, fontWeight: 300 }}>{p.shortDesc}</div>
                  <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#5C3D1E' }}>{`Giá: ${p.price}`}</span>
                    <span style={{ fontSize: '0.7rem', color: '#C9A84C', fontWeight: 700 }}>{'Xem →'}</span>
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
