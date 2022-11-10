const express = require("express");
const app = express();
app.use(express.json())

app.get("/", (req, res) => {
  res.send("ok!");
});

app.listen(3000);

app.post('/users/:id', (req, res)=>{
  const {name} = req.body;
  const {title} = req.query
  const {id} = req.params
  res.json({name, title, id});
})