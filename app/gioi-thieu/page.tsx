import Link from 'next/link'

export default function GioiThieuPage() {
  return (
    <div style={{ paddingTop: 100, background: '#F9F3E8', minHeight: '100vh' }}>
      <div style={{ background: '#2A1A0A', padding: '60px 60px 50px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 14 }}>◆ Về chúng tôi</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 300, color: '#F9F3E8' }}>
          Gìn giữ <em style={{ color: '#E8C97A' }}>hồn gỗ Việt</em>
        </h1>
      </div>

      <section style={{ padding: '70px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80" alt="Xưởng" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
          </div>
          <div style={{ position: 'absolute', bottom: -20, right: -20, width: 140, height: 140, background: '#C9A84C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '3.2rem', fontWeight: 700, color: '#2A1A0A', lineHeight: 1 }}>50</div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5C3D1E', fontWeight: 700, marginTop: 4 }}>Năm<br />kinh nghiệm</div>
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 300, color: '#2A1A0A', lineHeight: 1.2, marginBottom: 24 }}>Câu chuyện <em style={{ color: '#8B5E3C' }}>Đại Lộc</em></h2>
          <p style={{ fontSize: '0.93rem', color: '#4A3020', lineHeight: 1.9, fontWeight: 300, marginBottom: 16 }}>Đồ Thờ & Đồ Gỗ Đại Lộc ra đời từ làng nghề mộc truyền thống Cát Đằng, Yên Tiến, Ý Yên — một trong những làng nghề gỗ nổi tiếng nhất tỉnh Nam Định.</p>
          <p style={{ fontSize: '0.93rem', color: '#4A3020', lineHeight: 1.9, fontWeight: 300, marginBottom: 16 }}>Với hơn nửa thế kỷ gắn bó với nghề, chúng tôi đã chế tác hàng nghìn bộ đồ thờ cho gia đình, đình làng, đền chùa khắp cả nước.</p>
          <p style={{ fontSize: '0.93rem', color: '#4A3020', lineHeight: 1.9, fontWeight: 300 }}>Mỗi sản phẩm là kết tinh của kỹ thuật cha truyền con nối — từ chọn gỗ, phơi gỗ, đến từng nhát đục chạm khắc hoa văn truyền thống.</p>
        </div>
      </section>

      <section style={{ padding: '60px 60px', background: '#2A1A0A' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2rem', fontWeight: 300, color: '#F9F3E8', textAlign: 'center', marginBottom: 48 }}>Lý do chọn <em style={{ color: '#E8C97A' }}>Đại Lộc</em></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {[
            { icon: '🌳', title: 'Gỗ quý nguyên tấm', desc: 'Gỗ mít, gỗ gụ, gỗ dổi — chọn lọc kỹ càng, phơi khô đúng quy trình trước khi chế tác.' },
            { icon: '🔨', title: 'Chạm khắc thủ công', desc: '100% chạm tay bởi nghệ nhân lành nghề. Mỗi đường nét thể hiện tâm huyết của người thợ.' },
            { icon: '✨', title: 'Sơn thếp truyền thống', desc: 'Kỹ thuật sơn son thếp vàng cổ truyền, bền màu theo thời gian.' },
            { icon: '📐', title: 'Thiết kế theo yêu cầu', desc: 'Làm khoán theo kích thước, hoa văn, chất liệu riêng của từng gia chủ.' },
            { icon: '🚚', title: 'Vận chuyển toàn quốc', desc: 'Đóng gói cẩn thận, vận chuyển an toàn đến mọi tỉnh thành trên cả nước.' },
            { icon: '📞', title: 'Tư vấn tận tâm', desc: 'Đội ngũ nghệ nhân sẵn sàng tư vấn miễn phí về phong thủy, kích thước, chất liệu.' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.15)', padding: '32px 28px' }}>
              <div style={{ fontSize: '2rem', marginBottom: 16 }}>{item.icon}</div>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.2rem', fontWeight: 600, color: '#F9F3E8', marginBottom: 10 }}>{item.title}</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(249,243,232,0.6)', lineHeight: 1.75, fontWeight: 300 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '64px 60px', background: '#EDE0C8', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2rem', fontWeight: 300, color: '#2A1A0A', marginBottom: 12 }}>Hãy để Đại Lộc đồng hành cùng bạn</h2>
        <p style={{ fontSize: '0.93rem', color: '#8B6F55', marginBottom: 32, fontWeight: 300 }}>Tư vấn miễn phí — Báo giá nhanh — Chế tác tận tâm</p>
        <Link href="/lien-he" style={{ background: '#C9A84C', color: '#2A1A0A', padding: '14px 36px', fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'Nunito',sans-serif", fontWeight: 700, display: 'inline-block' }}>Liên hệ ngay</Link>
      </section>
    </div>
  )
}
