let orders = [];

export default function handler(req, res) {

  if (req.method === "GET") {
    return res.status(200).json(orders);
  }

  if (req.method === "POST") {
    const order = req.body;
    orders.push(order);
    return res.status(200).json({ message: "تم حفظ الطلب" });
  }

}
