import Link from 'next/link'

const posts = [
  { slug: 'huong-dan-bay-tri-ban-tho-gia-tien', title: 'Hướng dẫn bày trí ban thờ gia tiên đúng phong thủy', excerpt: 'Ban thờ gia tiên là nơi linh thiêng nhất trong ngôi nhà. Vị trí đặt bàn thờ, hướng nhìn, cách sắp xếp đồ thờ đều ảnh hưởng đến vận khí gia đình.', tag: 'Phong thủy', readTime: '10 phút', image: 'https://images.unsplash.com/photo-1606122017369-d782bbb78f32?w=800&q=80' },
  { slug: 'phan-biet-go-mit-go-gu', title: 'Phân biệt gỗ mít và gỗ gụ — nên chọn loại nào cho bàn thờ?', excerpt: 'Hai loại gỗ phổ biến nhất cho đồ thờ cao cấp với những ưu nhược điểm riêng biệt.', tag: 'Chọn mua', readTime: '5 phút', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80' },
  { slug: 'son-son-thep-vang-ky-thuat-co-truyen', title: 'Sơn son thếp vàng — kỹ thuật cổ truyền và cách bảo quản', excerpt: 'Kỹ thuật sơn thếp truyền thống đã có hàng trăm năm lịch sử, đòi hỏi sự khéo léo và kiên nhẫn của người thợ.', tag: 'Kiến thức', readTime: '7 phút', image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80' },
  { slug: 'cach-chon-tuong-tho-dung-chuan', title: 'Cách chọn tượng thờ đúng chuẩn theo từng tín ngưỡng', excerpt: 'Mỗi loại tín ngưỡng có những quy định riêng về tượng thờ. Hướng dẫn chi tiết để chọn đúng.', tag: 'Kiến thức', readTime: '8 phút', image: 'https://images.unsplash.com/photo-1599391398131-a3e23fbf6d39?w=800&q=80' },
  { slug: 'kich-thuoc-ban-tho-theo-phong-thuy', title: 'Kích thước bàn thờ theo phong thủy — bảng tra cứu đầy đủ', excerpt: 'Kích thước bàn thờ phải theo thước Lỗ Ban và phong thủy. Bảng tra cứu kích thước chuẩn cho từng loại bàn thờ.', tag: 'Phong thủy', readTime: '6 phút', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' },
  { slug: 'lam-phong-tho-chung-cu', title: 'Thiết kế phòng thờ trong chung cư — những điều cần biết', excerpt: 'Không gian chung cư hạn chế nhưng vẫn có thể tạo ra không gian thờ tự trang nghiêm, đúng phong thủy.', tag: 'Thiết kế', readTime: '9 phút', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80' },
]

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 100, background: '#F9F3E8', minHeight: '100vh' }}>
      <style>{`
        .blog-card img { transition: transform 0.5s; }
        .blog-card:hover img { transform: scale(1.05); }
      `}</style>
      <div style={{ background: '#2A1A0A', padding: '60px 60px 50px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 600, marginBottom: 14 }}>◆ Kiến thức đồ thờ</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(2.2rem,4vw,3.5rem)', fontWeight: 300, color: '#F9F3E8' }}>Cẩm nang <em style={{ color: '#E8C97A' }}>tâm linh</em></h1>
      </div>

      <div style={{ padding: '50px 60px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 1, background: '#EDE0C8', marginBottom: 1 }}>
          <Link href={`/blog/${posts[0].slug}`} className="blog-card" style={{ background: '#fff', overflow: 'hidden', display: 'block' }}>
            <div style={{ height: 300, overflow: 'hidden' }}>
              <img src={posts[0].image} alt={posts[0].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '32px 28px' }}>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 12 }}>✦ {posts[0].tag} · {posts[0].readTime}</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.7rem', fontWeight: 600, color: '#2A1A0A', marginBottom: 14, lineHeight: 1.25 }}>{posts[0].title}</h2>
              <p style={{ fontSize: '0.88rem', color: '#8B6F55', lineHeight: 1.75, fontWeight: 300, marginBottom: 20 }}>{posts[0].excerpt}</p>
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5C3D1E', fontWeight: 700 }}>Đọc tiếp →</span>
            </div>
          </Link>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {posts.slice(1, 3).map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ background: '#fff', flex: 1, padding: '24px', borderBottom: i === 0 ? '1px solid #EDE0C8' : 'none', display: 'flex', gap: 16 }}>
                <div style={{ width: 80, height: 80, overflow: 'hidden', flexShrink: 0, background: '#EDE0C8' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 8 }}>{post.tag}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1rem', fontWeight: 600, color: '#2A1A0A', lineHeight: 1.3, marginBottom: 8 }}>{post.title}</div>
                  <div style={{ fontSize: '0.75rem', color: '#C9A84C', fontWeight: 700 }}>Đọc tiếp →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: '#EDE0C8' }}>
          {posts.slice(3).map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ background: '#fff', overflow: 'hidden', display: 'block' }}>
              <div style={{ height: 180, overflow: 'hidden', background: '#EDE0C8' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '22px 20px 26px' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', fontWeight: 700, marginBottom: 10 }}>{post.tag} · {post.readTime}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', fontWeight: 600, color: '#2A1A0A', marginBottom: 10, lineHeight: 1.3 }}>{post.title}</div>
                <div style={{ fontSize: '0.8rem', color: '#8B6F55', lineHeight: 1.65, fontWeight: 300 }}>{post.excerpt}</div>
                <div style={{ marginTop: 16, fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#5C3D1E', fontWeight: 700 }}>Đọc tiếp →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
