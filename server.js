const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { engine } = require("express-handlebars");
// Using Node.js `require()`
const mongoose = require('mongoose');


app.engine('.hbs', 
engine({
  extname:".hbs",
}));
app.set('view engine', '.hbs');
app.set('views', './views');

const port = process.env.PORT || 3000;

// for parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "20mb",
  })
);
 mongoose.connect('mongodb+srv://Francisco:elchedelbarriotokenvalidation@cluster0.gvy94.mongodb.net/chatbotDB?retryWrites=true&w=majority',{},(err,resp)=>{
   if (err) {
     return console.log("Hay un error en la base de datos", err);
   }else
   console.log("Base da datos online");
 });

app.use("/messenger", require("./Facebook/facebookBot"));

app.use("/",require("./routes/routes"));

app.get("/", (req, res) => {
  return res.send("Chatbot Funcionando 🤖🤖🤖");
});


app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
