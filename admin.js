import { useState, useEffect } from 'react';

export default function Admin() {
  const [users, setUsers] = useState([
    {email:'khach1@gmail.com', plan:'Free', expiry:'-', status:'Chưa kích hoạt'},
    {email:'khach2@gmail.com', plan:'Pro', expiry:'08/07/2026', status:'Đang hoạt động'},
  ]);
  const [plans, setPlans] = useState([
    {id:'basic', name:'Basic', price:99000},
    {id:'pro', name:'Pro', price:210000},
    {id:'vip', name:'VIP', price:499000},
  ]);

  const activate = (email, plan) => {
    setUsers(users.map(u => u.email===email ? {...u, plan, status:'Đang hoạt động', expiry:'08/07/2026'} : u));
    alert(`Đã kích hoạt ${plan} cho ${email}`);
  };

  return (
    <div style={{fontFamily:'system-ui', maxWidth:1000, margin:'0 auto', padding:20}}>
      <h1>Admin - Quản lý khách hàng</h1>
      <p>Chỉ bạn mới vào được trang này</p>

      <h2>1. Cấp quyền cho khách</h2>
      <table style={{width:'100%', borderCollapse:'collapse'}}>
        <thead><tr style={{background:'#f3f4f6'}}><th style={{padding:10, textAlign:'left'}}>Email</th><th>Gói</th><th>Hết hạn</th><th>Hành động</th></tr></thead>
        <tbody>
          {users.map(u => (
            <tr key={u.email} style={{borderBottom:'1px solid #eee'}}>
              <td style={{padding:10}}>{u.email}</td>
              <td>{u.plan}</td>
              <td>{u.expiry}</td>
              <td>
                <button onClick={()=>activate(u.email,'Basic')} style={{marginRight:5}}>Basic</button>
                <button onClick={()=>activate(u.email,'Pro')} style={{marginRight:5, background:'#7c3aed', color:'white', border:0, padding:'5px 10px'}}>Pro</button>
                <button onClick={()=>activate(u.email,'VIP')}>VIP</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{marginTop:40}}>2. Cập nhật giá</h2>
      {plans.map(p => (
        <div key={p.id} style={{marginBottom:10}}>
          {p.name}: <input type="number" defaultValue={p.price} style={{padding:5, width:120}} />đ 
          <button style={{marginLeft:10}}>Lưu</button>
        </div>
      ))}
      <p style={{color:'#666', fontSize:14}}>Đổi giá ở đây, web tự cập nhật cho khách mới.</p>
    </div>
  );
}