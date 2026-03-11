'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <style>{`
        .nav-wrapper {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          display: flex; align-items: center; justify-content: space-between;
          transition: all 0.4s ease;
          padding: 20px 60px;
          background: transparent;
        }
        .nav-wrapper.scrolled {
          padding: 12px 60px;
          background: rgba(42,26,10,0.97);
          backdrop-filter: blur(12px);
          box-shadow: 0 2px 30px rgba(0,0,0,0.3);
        }
        .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 700; color: #E8C97A; line-height: 1.1; }
        .nav-logo span { display: block; font-size: 0.65rem; font-weight: 300; letter-spacing: 0.25em; color: #C9A84C; font-family: 'Nunito', sans-serif; text-transform: uppercase; }
        .nav-links { display: flex; gap: 32px; list-style: none; margin: 0; }
        .nav-links a { color: #F9F3E8; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; font-weight: 400; transition: color 0.3s; font-family: 'Nunito', sans-serif; }
        .nav-links a:hover { color: #E8C97A; }
        .nav-cta { background: transparent; border: 1px solid #C9A84C; color: #C9A84C; padding: 9px 22px; font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase; font-family: 'Nunito', sans-serif; font-weight: 600; transition: all 0.3s; }
        .nav-cta:hover { background: #C9A84C; color: #2A1A0A; }
        .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 4px; background: none; border: none; }
        .hamburger span { width: 24px; height: 2px; background: #C9A84C; transition: all 0.3s; display: block; }
        .mobile-menu { display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(26,14,5,0.98); z-index: 99; flex-direction: column; align-items: center; justify-content: center; gap: 32px; }
        .mobile-menu.open { display: flex; }
        .mobile-menu a { font-family: 'Cormorant Garamond', serif; font-size: 2rem; font-weight: 300; color: #F9F3E8; letter-spacing: 0.08em; transition: color 0.3s; }
        .mobile-menu a:hover { color: #E8C97A; }
        .mobile-close { position: absolute; top: 24px; right: 24px; background: none; border: none; color: #C9A84C; font-size: 2rem; cursor: pointer; line-height: 1; }
        @media (max-width: 768px) {
          .nav-wrapper { padding: 14px 20px !important; }
          .nav-wrapper.scrolled { padding: 12px 20px !important; }
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>

      <nav className={`nav-wrapper${mounted && scrolled ? ' scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
          Đại Lộc
          <span>Đồ Thờ & Đồ Gỗ</span>
        </Link>

        <ul className="nav-links">
          {[['Sản phẩm', '/san-pham'], ['Dịch vụ', '/dich-vu'], ['Giới thiệu', '/gioi-thieu'], ['Blog', '/blog']].map(([label, href]) => (
            <li key={href}><Link href={href}>{label}</Link></li>
          ))}
        </ul>

        <Link href="/lien-he" className="nav-cta">Tư vấn miễn phí</Link>

        <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        {[['Trang chủ', '/'], ['Sản phẩm', '/san-pham'], ['Dịch vụ', '/dich-vu'], ['Giới thiệu', '/gioi-thieu'], ['Blog', '/blog'], ['Liên hệ', '/lien-he']].map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>
        ))}
        <a href="tel:0967103934" style={{ fontSize: '1rem', color: '#C9A84C', fontFamily: "'Nunito',sans-serif", fontWeight: 700, marginTop: 8 }}>📞 0967 103 934</a>
      </div>
    </>
  )
}
