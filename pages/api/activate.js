export default function handler(req, res) {
  // API mẫu để kích hoạt user, kết nối Supabase sau
  const { email, plan } = req.body;
  res.status(200).json({ success: true, email, plan, message: 'Đã kích hoạt' });
}