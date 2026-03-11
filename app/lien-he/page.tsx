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
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; padding: 60px 60px 80px; }
        .input-field { width: 100%; padding: 13px 16px; border: 1px solid #EDE0C8; background: #fff; font-family: Nunito, sans-serif; font-size: 0.9rem; color: #2A1A0A; outline: none; box-sizing: border-box; }
        .input-field:focus { border-color: #C9A84C; }
        .btn-submit { background: #C9A84C; color: #2A1A0A; padding: 14px 40px; font-family: Nunito, sans-serif; font-size: 0.82rem; letter-spacing: 0.1em; text-transform: uppercase; font-weight: 700; border: none; cursor: pointer; transition: all 0.3s; }
        .btn-submit:hover { background: #E8C97A; }
        .form-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .label-field { display: block; font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: #8B6F55; font-weight: 700; margin-bottom: 8px; }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 40px 20px 60px !important; }
          .form-2col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div style={{ background: '#2A1A0A', padding: '60px 60px 50px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 14 }}>
          {'◆ Liên hệ & Đặt hàng'}
        </div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 300, color: '#F9F3E8', lineHeight: 1.15 }}>
          {'Nhận tư vấn '}
          <em style={{ color: '#E8C97A' }}>{'miễn phí'}</em>
        </h1>
      </div>

      <div className="contact-grid">
        <div>
          <p style={{ fontSize: '0.93rem', color: '#4A3020', lineHeight: 1.9, fontWeight: 300, marginBottom: 40 }}>
            {'Dù bạn cần một bộ đồ thờ đơn giản hay một công trình đình chùa quy mô, nghệ nhân Đại Lộc luôn sẵn sàng tư vấn và báo giá miễn phí.'}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 36 }}>
            {([
              ['📍', 'Địa chỉ xưởng', 'Đinh Đức Thiện, Cát Đằng, Yên Tiến, Ý Yên, Nam Định', ''],
              ['📞', 'Điện thoại / Zalo', '0967 103 934', 'tel:0967103934'],
              ['✉️', 'Email', 'dailocdotho@gmail.com', 'mailto:dailocdotho@gmail.com'],
              ['🌐', 'Website', 'www.dothodailoc.com', 'https://www.dothodailoc.com'],
            ] as [string,string,string,string][]).map(([icon, label, val, href], i) => (
              <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
                <div style={{ width: 46, height: 46, background: '#C9A84C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 4 }}>{label}</div>
                  {href ? (
                    <a href={href} style={{ fontFamily: 'Georgia, serif', fontSize: '1.1rem', color: '#2A1A0A' }}>{val}</a>
                  ) : (
                    <div style={{ fontFamily: 'Georgia, serif', fontSize: '1.05rem', color: '#2A1A0A', lineHeight: 1.4 }}>{val}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: 24, background: '#EDE0C8', borderLeft: '3px solid #C9A84C' }}>
            <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 12 }}>{'Giờ làm việc'}</div>
            <div style={{ fontSize: '0.88rem', color: '#4A3020', lineHeight: 1.8, fontWeight: 300 }}>
              <div>{'Thứ 2 – Thứ 7: 7:00 – 18:00'}</div>
              <div>{'Chủ nhật: 8:00 – 17:00'}</div>
              <div style={{ marginTop: 8, color: '#C9A84C', fontStyle: 'italic', fontSize: '0.82rem' }}>{'Tư vấn qua Zalo 24/7'}</div>
            </div>
          </div>
        </div>

        <div>
          {sent ? (
            <div style={{ background: '#2A1A0A', padding: '60px 40px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: 20 }}>✅</div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.8rem', color: '#E8C97A', marginBottom: 12 }}>{'Gửi thành công!'}</h2>
              <p style={{ fontSize: '0.9rem', color: 'rgba(249,243,232,0.7)', lineHeight: 1.8, fontWeight: 300 }}>
                {'Cảm ơn quý khách. Nghệ nhân Đại Lộc sẽ liên hệ tư vấn trong vòng 24 giờ.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="form-2col">
                <div>
                  <label className="label-field">{'Họ và tên'}</label>
                  <input type="text" placeholder="Nguyen Van A" required className="input-field"
                    value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div>
                  <label className="label-field">{'Số điện thoại'}</label>
                  <input type="tel" placeholder="0912 345 678" required className="input-field"
                    value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                </div>
              </div>

              <div>
                <label className="label-field">{'Sản phẩm / Dịch vụ quan tâm'}</label>
                <select className="input-field" value={form.product} onChange={e => setForm(p => ({ ...p, product: e.target.value }))}>
                  <option value="">{'-- Chọn loại sản phẩm / dịch vụ --'}</option>
                  <optgroup label="San pham">
                    <option>{'Bàn thờ gia tiên'}</option>
                    <option>{'Bàn thờ đình chùa'}</option>
                    <option>{'Khám thờ'}</option>
                    <option>{'Tượng thờ'}</option>
                    <option>{'Tranh gỗ'}</option>
                    <option>{'Hoành phi câu đối'}</option>
                    <option>{'Cửa võng'}</option>
                    <option>{'Trang trí bàn thờ'}</option>
                    <option>{'Kiệu rước'}</option>
                  </optgroup>
                  <optgroup label="Dich vu">
                    <option>{'Thiết kế / Thi công phòng thờ'}</option>
                    <option>{'Thiết kế / Thi công nhà thờ họ'}</option>
                    <option>{'Tu sửa đình chùa'}</option>
                    <option>{'Làm khoán theo yêu cầu'}</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="label-field">{'Yêu cầu chi tiết'}</label>
                <textarea rows={5} className="input-field"
                  placeholder="Mo ta kich thuoc, loai go, hoa van, so luong..."
                  value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ resize: 'vertical' }} />
              </div>

              <button type="submit" className="btn-submit">{'Gửi yêu cầu tư vấn'}</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
