module.exports = function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  var body = req.body || {};
  var email = body.email;
  console.log("New subscriber:", email);
  return res.status(200).json({ success: true });
};
