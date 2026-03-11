'use client'
import { useState } from 'react'

export default function LienHePage() {
  const [form, setForm] = useState({ name: '', phone: '', product: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ paddingTop: 100, background: '#F9F3E8', minHeight: '100vh' }}>
      <div style={{ background: '#2A1A0A', padding: '60px 60px 50px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 14 }}>◆ Liên hệ & Đặt hàng</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 300, color: '#F9F3E8', lineHeight: 1.15 }}>
          Nhận tư vấn <em style={{ color: '#E8C97A' }}>miễn phí</em>
        </h1>
      </div>

      <div style={{ className="contact-grid" style={{ display: "grid" }}>
        {/* Info */}
        <div>
          <p style={{ fontSize: '0.93rem', color: '#4A3020', lineHeight: 1.9, fontWeight: 300, marginBottom: 40 }}>
            Dù bạn cần một bộ đồ thờ đơn giản hay một công trình đình chùa quy mô, nghệ nhân Đại Lộc luôn sẵn sàng tư vấn và báo giá miễn phí.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { icon: '📍', label: 'Địa chỉ xưởng', val: 'Đinh Đức Thiện, Cát Đằng, Yên Tiến, Ý Yên, Nam Định' },
              { icon: '📞', label: 'Điện thoại / Zalo', val: '0967 103 934', href: 'tel:0967103934' },
              { icon: '✉️', label: 'Email', val: 'dailocdotho@gmail.com', href: 'mailto:dailocdotho@gmail.com' },
              { icon: '🌐', label: 'Website', val: 'www.dothodailoc.com', href: 'https://www.dothodailoc.com' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ width: 46, height: 46, background: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 4 }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', color: '#2A1A0A', fontWeight: 400 }}>{item.val}</a>
                  ) : (
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.05rem', color: '#2A1A0A', fontWeight: 400, lineHeight: 1.4 }}>{item.val}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Giờ làm việc */}
          <div style={{ marginTop: 36, padding: '24px', background: '#EDE0C8', borderLeft: '3px solid #C9A84C' }}>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 12 }}>Giờ làm việc</div>
            <div style={{ fontSize: '0.88rem', color: '#4A3020', lineHeight: 1.8, fontWeight: 300 }}>
              <div>Thứ 2 – Thứ 7: 7:00 – 18:00</div>
              <div>Chủ nhật: 8:00 – 17:00</div>
              <div style={{ marginTop: 8, color: '#C9A84C', fontStyle: 'italic', fontSize: '0.82rem' }}>Tư vấn qua Zalo 24/7</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {sent ? (
            <div style={{ background: '#2A1A0A', padding: '60px 40px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 20 }}>✅</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.8rem', color: '#E8C97A', marginBottom: 12 }}>Gửi thành công!</h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(249,243,232,0.7)', lineHeight: 1.8, fontWeight: 300 }}>
                Cảm ơn quý khách. Nghệ nhân Đại Lộc sẽ liên hệ tư vấn trong vòng 24 giờ.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[
                  { label: 'Họ và tên', key: 'name', type: 'text', placeholder: 'Nguyễn Văn A' },
                  { label: 'Số điện thoại', key: 'phone', type: 'tel', placeholder: '0912 345 678' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B6F55', fontWeight: 700, marginBottom: 8 }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required value={(form as any)[f.key]}
                      onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                      style={{ width: '100%', padding: '13px 16px', border: '1px solid #EDE0C8', background: '#fff', fontFamily: "'Nunito',sans-serif", fontSize: '0.9rem', color: '#2A1A0A', outline: 'none' }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B6F55', fontWeight: 700, marginBottom: 8 }}>Sản phẩm / Dịch vụ quan tâm</label>
                <select value={form.product} onChange={e => setForm(prev => ({ ...prev, product: e.target.value }))}
                  style={{ width: '100%', padding: '13px 16px', border: '1px solid #EDE0C8', background: '#fff', fontFamily: "'Nunito',sans-serif", fontSize: '0.9rem', color: '#2A1A0A', outline: 'none', appearance: 'none' }}>
                  <option value="">-- Chọn loại sản phẩm / dịch vụ --</option>
                  <optgroup label="Sản phẩm">
                    {['Bàn thờ gia tiên','Bàn thờ đình chùa','Khám thờ','Tượng thờ','Tranh gỗ','Hoành phi câu đối','Cuốn thư','Cửa võng','Trang trí bàn thờ','Kiệu rước','Cửa bức bàn'].map(o => <option key={o}>{o}</option>)}
                  </optgroup>
                  <optgroup label="Dịch vụ">
                    {['Thiết kế / Thi công phòng thờ','Thiết kế / Thi công nhà thờ họ','Tu sửa đình chùa','Làm khoán theo yêu cầu'].map(o => <option key={o}>{o}</option>)}
                  </optgroup>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8B6F55', fontWeight: 700, marginBottom: 8 }}>Yêu cầu chi tiết</label>
                <textarea placeholder="Mô tả kích thước, loại gỗ, hoa văn, số lượng... hoặc để lại số để được gọi lại tư vấn miễn phí." rows={5} value={form.message}
                  onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                  style={{ width: '100%', padding: '13px 16px', border: '1px solid #EDE0C8', background: '#fff', fontFamily: "'Nunito',sans-serif", fontSize: '0.9rem', color: '#2A1A0A', outline: 'none', resize: 'vertical' }}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '15px 40px' }}>Gửi yêu cầu tư vấn</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
