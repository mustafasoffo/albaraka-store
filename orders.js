let orders = [];

export default function handler(req, res) {

  // جلب الطلبات
  if (req.method === "GET") {
    return res.status(200).json(orders);
  }

  // إضافة طلب جديد
  if (req.method === "POST") {
    const order = req.body;
    orders.push(order);
    return res.status(200).json({ message: "تم حفظ الطلب" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}