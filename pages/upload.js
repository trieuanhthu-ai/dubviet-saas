export default function Upload() {
  return (
    <div style={{fontFamily:'system-ui', maxWidth:600, margin:'0 auto', padding:20, textAlign:'center'}}>
      <h1>Upload Video</h1>
      <p>Chỉ tài khoản đã kích hoạt mới dùng được.</p>
      <div style={{border:'2px dashed #ccc', padding:40, borderRadius:12, marginTop:20}}>
        Kéo thả video vào đây
      </div>
      <button style={{marginTop:20, padding:12, width:'100%', background:'#7c3aed', color:'white', border:0, borderRadius:8}}>
        Dịch ngay
      </button>
    </div>
  );
}