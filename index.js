const express = require('express');
const app = express();
const port = 8989;

// เส้นทางหลัก
app.get('/', (req, res) => {
  res.send('Welcome to NodejsTest');
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
