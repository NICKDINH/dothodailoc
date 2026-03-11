import Link from 'next/link'
import { products, categories, services } from '@/data/data'

export default function Home() {
  const featuredProducts = products.slice(0, 6)
  return (
    <>
      <style>{`
        .hero-section { min-height: 100vh; background: #2A1A0A; position: relative; overflow: hidden; display: flex; align-items: center; }
        .hero-content { position: relative; z-index: 2; padding: 140px 60px 80px; max-width: 780px; }
        .hero-watermark { position: absolute; right: 80px; bottom: 80px; text-align: right; z-index: 2; }
        .stats-bar { background: #5C3D1E; padding: 26px 60px; display: flex; justify-content: space-around; align-items: center; border-top: 1px solid rgba(201,168,76,0.2); border-bottom: 1px solid rgba(201,168,76,0.2); }
        .cat-section { padding: 80px 60px; background: #2A1A0A; }
        .cat-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 2px; }
        .product-section { padding: 80px 60px; background: #F9F3E8; }
        .product-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: #EDE0C8; }
        .svc-section { padding: 80px 60px; background: #EDE0C8; }
        .svc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: #C9A84C; }
        .about-section { padding: 80px 60px; background: #F9F3E8; display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .cta-section { padding: 70px 60px; background: #2A1A0A; text-align: center; }
        .cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

        .product-card { transition: transform 0.3s; background: #fff; display: block; }
        .product-card:hover { transform: translateY(-4px); }
        .product-card img { transition: transform 0.5s; }
        .product-card:hover img { transform: scale(1.06); }
        .cat-link { transition: background 0.3s; background: rgba(201,168,76,0.06); border: 1px solid rgba(201,168,76,0.15); padding: 32px 20px; text-align: center; display: block; }
        .cat-link:hover { background: rgba(201,168,76,0.14) !important; }
        .svc-link { display: block; padding: 40px 36px; transition: opacity 0.3s; }
        .svc-link:hover { opacity: 0.9; }
        .btn-gold { background: #C9A84C; color: #2A1A0A; padding: 14px 36px; font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase; font-family: 'Nunito', sans-serif; font-weight: 700; display: inline-block; transition: all 0.3s; }
        .btn-gold:hover { background: #E8C97A; transform: translateY(-2px); }
        .btn-outline-gold { border: 1px solid #C9A84C; color: #C9A84C; padding: 14px 36px; font-size: 0.82rem; letter-spacing: 0.12em; text-transform: uppercase; font-family: 'Nunito', sans-serif; font-weight: 600; display: inline-block; transition: all 0.3s; }
        .btn-outline-gold:hover { background: #C9A84C; color: #2A1A0A; }

        @media (max-width: 768px) {
          .hero-content { padding: 110px 20px 60px !important; }
          .hero-watermark { display: none; }
          .stats-bar { flex-wrap: wrap; gap: 20px; padding: 24px 20px; }
          .stats-bar > div { width: 40%; }
          .cat-section { padding: 50px 20px; }
          .cat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .product-section { padding: 50px 20px; }
          .product-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
          .svc-section { padding: 50px 20px; }
          .svc-grid { grid-template-columns: 1fr !important; }
          .about-section { padding: 50px 20px; grid-template-columns: 1fr !important; gap: 40px !important; }
          .cta-section { padding: 50px 20px; }
          .cta-buttons { flex-direction: column; align-items: center; }
          .cta-buttons a { width: 100%; max-width: 300px; text-align: center; }
          .hero-btns { flex-direction: column; }
          .hero-btns a { text-align: center; }
        }
        @media (max-width: 480px) {
          .product-grid-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero-section">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 70% 50%, rgba(201,168,76,0.12) 0%, transparent 60%), linear-gradient(135deg, #1A0E05 0%, #2A1A0A 50%, #3D2410 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: '120%', height: '200%', background: 'repeating-linear-gradient(8deg, transparent, transparent 40px, rgba(201,168,76,0.8) 40px, rgba(201,168,76,0.8) 41px)' }} />
        </div>
        <div className="hero-content">
          <div style={{ color: '#C9A84C', fontSize: '0.7rem', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: 28, fontFamily: "'Nunito',sans-serif" }}>◆ Làng nghề truyền thống Nam Định</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2.6rem,6vw,5.5rem)', fontWeight: 300, lineHeight: 1.05, color: '#F9F3E8', marginBottom: 10 }}>
            Chế tác đồ thờ<br />
            <em style={{ fontStyle: 'italic', fontWeight: 700, color: '#E8C97A' }}>gia truyền tâm linh</em>
          </h1>
          <p style={{ fontSize: 'clamp(0.88rem,2vw,1.05rem)', color: '#EDE0C8', margin: '24px 0 36px', lineHeight: 1.85, fontWeight: 300, maxWidth: 540 }}>
            Hơn 50 năm gìn giữ tinh hoa nghề mộc truyền thống — mỗi sản phẩm là tâm huyết của người thợ lành nghề, đậm hồn Việt, chuẩn phong thủy.
          </p>
          <div className="hero-btns">
            <Link href="/san-pham" className="btn-gold">Xem sản phẩm</Link>
            <Link href="/lien-he" className="btn-outline-gold">Tư vấn ngay</Link>
          </div>
        </div>
        <div className="hero-watermark">
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '8rem', fontWeight: 700, color: '#C9A84C', lineHeight: 1, opacity: 0.15 }}>50+</div>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 300 }}>Năm kinh nghiệm</div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        {[{ num: '50+', label: 'Năm kinh nghiệm' }, { num: '1.000+', label: 'Công trình' }, { num: '4', label: 'Dịch vụ' }, { num: '63', label: 'Tỉnh thành' }].map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 700, color: '#E8C97A', lineHeight: 1 }}>{s.num}</div>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#EDE0C8', fontWeight: 300, marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* DANH MỤC */}
      <section className="cat-section">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 14 }}>◆ Danh mục sản phẩm</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#F9F3E8' }}>Đồ thờ <em style={{ color: '#E8C97A' }}>Đại Lộc</em></h2>
        </div>
        <div className="cat-grid">
          {categories.map(cat => (
            <Link key={cat.slug} href={`/san-pham?cat=${cat.slug}`} className="cat-link">
              <div style={{ fontSize: '2rem', marginBottom: 14 }}>{cat.icon}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1rem', fontWeight: 600, color: '#F9F3E8', marginBottom: 6 }}>{cat.name}</div>
              {cat.count > 0 && <div style={{ fontSize: '0.65rem', color: '#C9A84C', letterSpacing: '0.15em' }}>{cat.count} sản phẩm</div>}
            </Link>
          ))}
        </div>
      </section>

      {/* SẢN PHẨM */}
      <section className="product-section">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 14 }}>◆ Sản phẩm tiêu biểu</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#2A1A0A' }}>Tinh hoa nghề mộc <em style={{ color: '#8B5E3C' }}>gia truyền</em></h2>
        </div>
        <div className="product-grid-3">
          {featuredProducts.map(p => (
            <Link key={p.slug} href={`/san-pham/${p.slug}`} className="product-card">
              <div style={{ height: 220, overflow: 'hidden', background: '#EDE0C8' }}>
                <img src={p.images[0]} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px 18px 24px' }}>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 8 }}>✦ {p.category}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', fontWeight: 600, color: '#2A1A0A', marginBottom: 8, lineHeight: 1.3 }}>{p.name}</div>
                <div style={{ fontSize: '0.82rem', color: '#8B6F55', lineHeight: 1.7, fontWeight: 300 }}>{p.shortDesc}</div>
                <div style={{ marginTop: 14, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5C3D1E', fontWeight: 700 }}>Xem chi tiết →</div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <Link href="/san-pham" className="btn-gold">Xem toàn bộ sản phẩm</Link>
        </div>
      </section>

      {/* DỊCH VỤ */}
      <section className="svc-section">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 14 }}>◆ Dịch vụ</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#2A1A0A' }}>Trọn gói từ <em style={{ color: '#8B5E3C' }}>thiết kế đến lắp đặt</em></h2>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/dich-vu/${s.slug}`} className="svc-link" style={{ background: i % 2 === 0 ? '#F9F3E8' : '#2A1A0A' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 16 }}>0{i + 1}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.2rem,2.5vw,1.5rem)', fontWeight: 600, color: i % 2 === 0 ? '#2A1A0A' : '#F9F3E8', marginBottom: 12 }}>{s.name}</div>
              <div style={{ fontSize: '0.88rem', color: i % 2 === 0 ? '#8B6F55' : 'rgba(249,243,232,0.65)', lineHeight: 1.75, fontWeight: 300 }}>{s.shortDesc}</div>
              <div style={{ marginTop: 24, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700 }}>Tìm hiểu thêm →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* GIỚI THIỆU */}
      <section className="about-section">
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80" alt="Xưởng Đại Lộc" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
          </div>
          <div style={{ position: 'absolute', bottom: -20, right: -20, width: 120, height: 120, background: '#C9A84C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.6rem', fontWeight: 700, color: '#2A1A0A', lineHeight: 1 }}>50</div>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5C3D1E', fontWeight: 700 }}>Năm<br />KN</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 16 }}>◆ Câu chuyện thương hiệu</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.6rem,3vw,2.8rem)', fontWeight: 300, color: '#2A1A0A', lineHeight: 1.2, marginBottom: 20 }}>Gìn giữ <em style={{ color: '#8B5E3C' }}>hồn gỗ Việt</em><br />qua nhiều thế hệ</h2>
          <p style={{ fontSize: '0.92rem', color: '#4A3020', lineHeight: 1.9, fontWeight: 300, marginBottom: 12 }}>Đồ Thờ & Đồ Gỗ Đại Lộc ra đời từ làng nghề mộc truyền thống Cát Đằng, Yên Tiến, Ý Yên — một trong những làng nghề gỗ nổi tiếng nhất tỉnh Nam Định.</p>
          <p style={{ fontSize: '0.92rem', color: '#4A3020', lineHeight: 1.9, fontWeight: 300, marginBottom: 28 }}>Mỗi sản phẩm là kết tinh của kỹ thuật cha truyền con nối — từ chọn gỗ, phơi gỗ, đến từng nhát đục chạm khắc hoa văn truyền thống.</p>
          <Link href="/gioi-thieu" className="btn-gold">Tìm hiểu thêm</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.6rem,3.5vw,2.8rem)', fontWeight: 300, color: '#F9F3E8', marginBottom: 12 }}>Bạn cần tư vấn về đồ thờ?</h2>
        <p style={{ fontSize: '0.95rem', color: 'rgba(249,243,232,0.6)', marginBottom: 32, fontWeight: 300 }}>Nghệ nhân Đại Lộc sẵn sàng tư vấn và báo giá miễn phí</p>
        <div className="cta-buttons">
          <Link href="/lien-he" className="btn-gold">Liên hệ ngay</Link>
          <a href="tel:0967103934" className="btn-outline-gold">0967 103 934</a>
        </div>
      </section>
    </>
  )
}
