import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer-inner" style={{ background: '#130B03', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
      <style>{`
        .footer-inner { padding: 60px 60px 28px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; margin-bottom: 48px; }
        .footer-link { color: rgba(249,243,232,0.5); font-size: 0.83rem; font-weight: 300; transition: color 0.3s; display: block; }
        .footer-link:hover { color: #E8C97A !important; }
        @media (max-width: 768px) {
          .footer-inner { padding: 36px 20px 24px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-bottom { flex-direction: column !important; gap: 10px !important; text-align: center; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <div className="footer-grid">
        <div className="footer-brand">
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.4rem', fontWeight: 700, color: '#E8C97A', marginBottom: 4 }}>Đồ Thờ & Đồ Gỗ Đại Lộc</div>
          <div style={{ fontSize: '0.68rem', color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 18 }}>Chuẩn tâm linh · Đậm hồn Việt</div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(249,243,232,0.45)', lineHeight: 1.8, fontWeight: 300 }}>Hơn 50 năm gìn giữ tinh hoa nghề mộc truyền thống làng Cát Đằng, Ý Yên, Nam Định.</p>
          <div style={{ marginTop: 20, fontSize: '0.82rem', color: 'rgba(249,243,232,0.6)', lineHeight: 1.9 }}>
            <div>📍 Cát Đằng, Yên Tiến, Ý Yên, Nam Định</div>
            <div>📞 <a href="tel:0967103934" style={{ color: '#C9A84C' }}>0967 103 934</a></div>
            <div>✉️ <a href="mailto:dailocdotho@gmail.com" style={{ color: '#C9A84C' }}>dailocdotho@gmail.com</a></div>
          </div>
        </div>
        {[
          { title: 'Sản phẩm', links: [['Bàn thờ', '/san-pham?cat=ban-tho'], ['Tượng thờ', '/san-pham?cat=tuong-tho'], ['Tranh gỗ', '/san-pham?cat=tranh-go'], ['Khám thờ', '/san-pham?cat=kham-tho'], ['Hoành phi', '/san-pham?cat=hoanh-phi']] },
          { title: 'Dịch vụ', links: [['Thiết kế phòng thờ', '/dich-vu/thiet-ke-thi-cong-phong-tho'], ['Thiết kế nhà thờ', '/dich-vu/thiet-ke-thi-cong-nha-tho'], ['Tu sửa đình chùa', '/dich-vu/tu-sua-dinh-chua'], ['Làm khoán', '/dich-vu/lam-khoan']] },
          { title: 'Thông tin', links: [['Về chúng tôi', '/gioi-thieu'], ['Blog kiến thức', '/blog'], ['Liên hệ', '/lien-he']] },
        ].map(col => (
          <div key={col.title}>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 20 }}>{col.title}</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {col.links.map(([label, href]) => (
                <li key={href}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom" style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '0.75rem', color: 'rgba(249,243,232,0.3)', fontWeight: 300 }}>© 2026 Đồ Thờ & Đồ Gỗ Đại Lộc. Làng nghề Cát Đằng, Ý Yên, Nam Định.</div>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontStyle: 'italic', fontSize: '0.85rem', color: '#C9A84C' }}>Chế tác bằng tâm — Truyền bằng nghề</div>
      </div>
    </footer>
  )
}
