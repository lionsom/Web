
function logger(req, res, next) {
  const time = new Date();
  console.log(`[${time.toLocaleString()}] ${req.method} ${req.path}`);
  next();
}

module.exports = logger;
