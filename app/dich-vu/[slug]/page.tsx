import { services } from '@/data/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) notFound()

  return (
    <div style={{ paddingTop: 100, background: '#F9F3E8', minHeight: '100vh' }}>
      <style>{`
        .other-svc { border-bottom: 3px solid transparent; transition: border-color 0.3s; }
        .other-svc:hover { border-bottom-color: #C9A84C !important; }
        .btn-primary { transition: all 0.3s; }
        .btn-primary:hover { background: #E8C97A !important; }
        .btn-outline { transition: all 0.3s; }
        .btn-outline:hover { background: #C9A84C !important; color: #2A1A0A !important; }
      `}</style>

      <div style={{ padding: '16px 60px', background: '#EDE0C8', fontSize: '0.78rem', color: '#8B6F55', display: 'flex', gap: 8 }}>
        <Link href="/" style={{ color: '#C9A84C' }}>Trang chủ</Link><span>›</span>
        <Link href="/dich-vu" style={{ color: '#C9A84C' }}>Dịch vụ</Link><span>›</span>
        <span style={{ color: '#4A3020' }}>{service.name}</span>
      </div>

      <div style={{ position: 'relative', height: 360, overflow: 'hidden' }}>
        <img src={service.image} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(42,26,10,0.6)', display: 'flex', alignItems: 'center', padding: '0 60px' }}>
          <div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 16 }}>◆ Dịch vụ</div>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 300, color: '#F9F3E8', lineHeight: 1.15, maxWidth: 700 }}>{service.name}</h1>
          </div>
        </div>
      </div>

      <div style={{ padding: '56px 60px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 64 }}>
        <div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.6rem', fontWeight: 300, color: '#2A1A0A', marginBottom: 20 }}>Giới thiệu dịch vụ</h2>
          <p style={{ fontSize: '0.95rem', color: '#4A3020', lineHeight: 1.9, fontWeight: 300, marginBottom: 36 }}>{service.description}</p>
          {service.items && (
            <>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.4rem', fontWeight: 300, color: '#2A1A0A', marginBottom: 20 }}>Chúng tôi cung cấp</h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {service.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 18px', background: '#fff', borderLeft: '3px solid #C9A84C' }}>
                    <span style={{ color: '#C9A84C', fontWeight: 700, flexShrink: 0 }}>✦</span>
                    <span style={{ fontSize: '0.9rem', color: '#4A3020', lineHeight: 1.65, fontWeight: 300 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div>
          <div style={{ background: '#2A1A0A', padding: '36px 32px', position: 'sticky', top: 120 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.5rem', fontWeight: 300, color: '#F9F3E8', marginBottom: 16 }}>Nhận tư vấn <em style={{ color: '#E8C97A' }}>miễn phí</em></h3>
            <p style={{ fontSize: '0.85rem', color: 'rgba(249,243,232,0.6)', lineHeight: 1.75, fontWeight: 300, marginBottom: 28 }}>Nghệ nhân Đại Lộc sẵn sàng tư vấn và báo giá chi tiết theo yêu cầu.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link href="/lien-he" className="btn-primary" style={{ textAlign: 'center', background: '#C9A84C', color: '#2A1A0A', padding: '13px 20px', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}>Gửi yêu cầu tư vấn</Link>
              <a href="tel:0967103934" className="btn-outline" style={{ textAlign: 'center', border: '1px solid #C9A84C', color: '#C9A84C', padding: '13px 20px', fontSize: '0.82rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Nunito',sans-serif", fontWeight: 600 }}>📞 0967 103 934</a>
            </div>
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(201,168,76,0.2)', fontSize: '0.83rem', color: 'rgba(249,243,232,0.65)', lineHeight: 1.9, fontWeight: 300 }}>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 12 }}>Thông tin liên hệ</div>
              <div>📍 Cát Đằng, Yên Tiến, Ý Yên, Nam Định</div>
              <div>✉️ dailocdotho@gmail.com</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '40px 60px 80px', background: '#EDE0C8' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.6rem', fontWeight: 300, color: '#2A1A0A', marginBottom: 28, textAlign: 'center' }}>Dịch vụ khác</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {services.filter(s => s.slug !== service.slug).map(s => (
            <Link key={s.slug} href={`/dich-vu/${s.slug}`} className="other-svc" style={{ background: '#fff', padding: '24px 22px', display: 'block' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.2rem', fontWeight: 600, color: '#2A1A0A', marginBottom: 8 }}>{s.name}</div>
              <div style={{ fontSize: '0.82rem', color: '#8B6F55', fontWeight: 300, lineHeight: 1.65 }}>{s.shortDesc}</div>
              <div style={{ marginTop: 14, fontSize: '0.72rem', color: '#C9A84C', fontWeight: 700 }}>Xem thêm →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
