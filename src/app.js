const express = require ('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "../public")));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor andando en el puerto ${PORT}`);
});

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'views/home.html'));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
  });
  
  app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
  });