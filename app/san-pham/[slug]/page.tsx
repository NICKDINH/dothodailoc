import { products } from '@/data/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug)
  if (!product) notFound()
  const related = products.filter(p => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, 4)

  return (
    <div style={{ paddingTop: 100, background: '#F9F3E8', minHeight: '100vh' }}>
      <style>{`
        .product-card { transition: transform 0.3s; }
        .product-card:hover { transform: translateY(-4px); }
        .btn-primary:hover { background: #E8C97A !important; transform: translateY(-2px); }
        .btn-outline:hover { background: #C9A84C !important; color: #2A1A0A !important; }
      `}</style>

      <div style={{ padding: '18px 60px', background: '#EDE0C8', fontSize: '0.78rem', color: '#8B6F55', display: 'flex', gap: 8, alignItems: 'center' }}>
        <Link href="/" style={{ color: '#C9A84C' }}>Trang chủ</Link><span>›</span>
        <Link href="/san-pham" style={{ color: '#C9A84C' }}>Sản phẩm</Link><span>›</span>
        <Link href={`/san-pham?cat=${product.categorySlug}`} style={{ color: '#C9A84C' }}>{product.category}</Link><span>›</span>
        <span style={{ color: '#4A3020' }}>{product.name}</span>
      </div>

      <div style={{ padding: '48px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
        <div>
          <div style={{ background: '#EDE0C8', overflow: 'hidden', aspectRatio: '4/3' }}>
            <img src={product.images[0]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ marginTop: 12, padding: '16px 20px', background: '#2A1A0A', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600 }}>Ảnh minh hoạ — liên hệ xem ảnh thực tế</span>
            <a href="tel:0967103934" style={{ fontSize: '0.78rem', color: '#E8C97A', fontWeight: 700 }}>📞 0967 103 934</a>
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 12 }}>
            <Link href={`/san-pham?cat=${product.categorySlug}`} style={{ color: '#C9A84C' }}>{product.category}</Link>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 600, color: '#2A1A0A', lineHeight: 1.15, marginBottom: 20 }}>{product.name}</h1>
          <p style={{ fontSize: '0.95rem', color: '#4A3020', lineHeight: 1.9, fontWeight: 300, marginBottom: 28 }}>{product.description}</p>

          <div style={{ padding: '18px 24px', background: '#EDE0C8', marginBottom: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8B6F55', fontWeight: 600 }}>Giá</span>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.6rem', fontWeight: 700, color: '#C9A84C' }}>{product.price === 'Liên hệ' ? 'Liên hệ báo giá' : product.price}</span>
          </div>

          <div style={{ display: 'flex', gap: 12, marginBottom: 36 }}>
            <Link href="/lien-he" className="btn-primary" style={{ flex: 1, textAlign: 'center', background: '#C9A84C', color: '#2A1A0A', padding: '13px 20px', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Nunito',sans-serif", fontWeight: 700, transition: 'all 0.3s' }}>Đặt hàng / Tư vấn</Link>
            <a href="tel:0967103934" className="btn-outline" style={{ flex: 1, textAlign: 'center', border: '1px solid #C9A84C', color: '#C9A84C', padding: '13px 20px', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Nunito',sans-serif", fontWeight: 600, transition: 'all 0.3s' }}>📞 Gọi ngay</a>
          </div>

          {product.specs && product.specs.length > 0 && (
            <div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B6F55', fontWeight: 700, marginBottom: 14 }}>Thông số</div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #EDE0C8' }}>
                      <td style={{ padding: '10px 0', fontSize: '0.83rem', color: '#8B6F55', fontWeight: 600, width: '40%' }}>{s.label}</td>
                      <td style={{ padding: '10px 0', fontSize: '0.83rem', color: '#2A1A0A', fontWeight: 300 }}>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {product.process && product.process.length > 0 && (
        <div style={{ padding: '48px 60px', background: '#2A1A0A' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.8rem', fontWeight: 300, color: '#F9F3E8', marginBottom: 36, textAlign: 'center' }}>
            Quy trình <em style={{ color: '#E8C97A' }}>chế tác</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(product.process.length, 3)}, 1fr)`, gap: 2 }}>
            {product.process.map((step, i) => (
              <div key={i} style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', padding: '28px 24px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2rem', fontWeight: 700, color: '#C9A84C', opacity: 0.3, marginBottom: 12, lineHeight: 1 }}>0{i + 1}</div>
                <div style={{ fontSize: '0.88rem', color: '#EDE0C8', lineHeight: 1.7, fontWeight: 300 }}>{step}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div style={{ padding: '60px 60px 80px', background: '#F9F3E8' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.8rem', fontWeight: 300, color: '#2A1A0A', marginBottom: 32, textAlign: 'center' }}>
            Sản phẩm <em style={{ color: '#8B5E3C' }}>cùng danh mục</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: '#EDE0C8' }}>
            {related.map(p => (
              <Link key={p.slug} href={`/san-pham/${p.slug}`} className="product-card" style={{ background: '#fff', display: 'block' }}>
                <div style={{ height: 180, overflow: 'hidden', background: '#EDE0C8' }}>
                  <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1rem', fontWeight: 600, color: '#2A1A0A', marginBottom: 6 }}>{p.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#C9A84C', fontWeight: 700 }}>Xem chi tiết →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
