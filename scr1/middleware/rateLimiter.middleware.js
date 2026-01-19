let requests = [];
const LIMIT = 15; // max requests
const WINDOW = 60 * 1000; // 1 minute

function rateLimiter(req, res, next) {
  const now = Date.now();
  requests = requests.filter(ts => now - ts < WINDOW);

  if (requests.length >= LIMIT) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  requests.push(now);
  next();
}

module.exports = rateLimiter;
