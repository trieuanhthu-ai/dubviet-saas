import { useState } from 'react';

const plans = [
  { id: 'basic', name: 'Basic', price: 99000, videos: 10, langs: 3, watermark: true },
  { id: 'pro', name: 'Pro', price: 210000, videos: 50, langs: 10, watermark: false },
  { id: 'vip', name: 'VIP', price: 499000, videos: 999, langs: 10, watermark: false, clone: true },
];

export default function Home() {
  return (
    <div style={{fontFamily:'system-ui', maxWidth:900, margin:'0 auto', padding:20}}>
      <h1>DubViet AI - Dịch Video Đa Ngôn Ngữ</h1>
      <p>Web bản quyền của bạn. Bạn quản lý khách hàng 100%.</p>
      
      <h2>Bảng giá</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:20}}>
        {plans.map(p => (
          <div key={p.id} style={{border:'1px solid #ddd', padding:20, borderRadius:12}}>
            <h3>{p.name}</h3>
            <div style={{fontSize:28, fontWeight:'bold'}}>{p.price.toLocaleString('vi-VN')}đ</div>
            <p>{p.videos} video/tháng</p>
            <p>{p.langs} ngôn ngữ</p>
            <p>{p.watermark ? 'Có watermark' : 'Không watermark'}</p>
            {p.clone && <p>Clone giọng</p>}
            <button style={{width:'100%', padding:12, background:'#7c3aed', color:'white', border:0, borderRadius:8}}>
              Đăng ký
            </button>
          </div>
        ))}
      </div>

      <div style={{marginTop:40, padding:20, background:'#f3f4f6', borderRadius:12}}>
        <h3>Cách thanh toán</h3>
        <p>1. Chuyển khoản MoMo: 090xxxxxxx</p>
        <p>2. Gửi bill qua Zalo</p>
        <p>3. Admin kích hoạt trong 5 phút</p>
      </div>
    </div>
  );
}