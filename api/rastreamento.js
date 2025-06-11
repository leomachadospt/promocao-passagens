export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    console.log("📡 Dados recebidos:", data);

    res.status(200).json({ status: "ok", recebido: data });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
