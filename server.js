const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());

const staticPath = path.join(__dirname, 'dist');
console.log(`Serving static files from: ${staticPath}`);
app.use('/dist', express.static(staticPath));

// Proxy route
app.get('/proxy', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send('URL is required');
  }

  try {
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    console.error(`Error fetching the URL: ${url}`, error.message);
    res.status(500).send('Error fetching the URL');
  }
});

// Catch-all route to serve view.html for any request not handled above
app.get('*', (req, res) => {
  console.log(`Request path: ${req.path}`);
  res.sendFile(path.join(__dirname, 'view.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});