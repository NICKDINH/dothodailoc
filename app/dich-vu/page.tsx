import Link from 'next/link'
import { services } from '@/data/data'

export default function DichVuPage() {
  return (
    <div style={{ paddingTop: 100, background: '#F9F3E8', minHeight: '100vh' }}>
      <style>{`
        .svc-card { transition: transform 0.3s, box-shadow 0.3s; }
        .svc-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(42,26,10,0.12); }
        .svc-card img { transition: transform 0.5s; }
        .svc-card:hover img { transform: scale(1.05); }
      `}</style>
      <div style={{ background: '#2A1A0A', padding: '60px 60px 50px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 14 }}>◆ Dịch vụ</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 300, color: '#F9F3E8' }}>
          Trọn gói từ <em style={{ color: '#E8C97A' }}>thiết kế đến lắp đặt</em>
        </h1>
      </div>
      <div style={{ padding: '60px 60px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {services.map((s, i) => (
            <Link key={s.slug} href={`/dich-vu/${s.slug}`} className="svc-card" style={{ background: '#fff', display: 'block', border: '1px solid #EDE0C8', overflow: 'hidden' }}>
              <div style={{ height: 240, overflow: 'hidden', background: '#EDE0C8' }}>
                <img src={s.image} alt={s.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '30px 28px 34px' }}>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 12 }}>0{i + 1}</div>
                <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.6rem', fontWeight: 600, color: '#2A1A0A', marginBottom: 12, lineHeight: 1.2 }}>{s.name}</h2>
                <p style={{ fontSize: '0.88rem', color: '#8B6F55', lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>{s.shortDesc}</p>
                {s.items && (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
                    {s.items.slice(0, 3).map((item, j) => (
                      <li key={j} style={{ fontSize: '0.82rem', color: '#4A3020', display: 'flex', gap: 10, alignItems: 'flex-start', fontWeight: 300 }}>
                        <span style={{ color: '#C9A84C', fontWeight: 700, flexShrink: 0 }}>✦</span>{item}
                      </li>
                    ))}
                    {s.items.length > 3 && <li style={{ fontSize: '0.78rem', color: '#8B6F55', fontStyle: 'italic' }}>+ {s.items.length - 3} dịch vụ khác...</li>}
                  </ul>
                )}
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5C3D1E', fontWeight: 700 }}>Xem chi tiết →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
