var express = require('express');
var router = express.Router();

/* GET home page. */
const messages = [
  {
    text:"Hi there!",
    user:"Amando",
    added:new Date()
  },
  {
    text:"Hello World!",
    user:"Charles",
    added:new Date()
  }
]
router.get('/', function(req, res, next) {
  //render points to index pug
  res.render('index', { title: "Mini Messageboard", messages: messages});
});
router.get('/new', function(req, res, next) {
  //   res.send('please test2');

    res.render("form")
  });

router.post('/new',(req,res) => {
    // res.send(req.messageText)
    // console.log(req.)
    messages.push({text: req.body.messageText, user: req.body.messageUser,added: new Date()});
    res.redirect('/');
})

module.exports = router;
