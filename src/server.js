const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Обслуговування статичних файлів з папки build
app.use(express.static(path.join(__dirname, 'build')));

// Обробка всіх запитів і перенаправлення на index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
