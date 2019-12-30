const express= require('express');
const router = express.Router();

// GET POST
router.get('/', (req, res)=>{
  res.send('Post works');
});

module.exports = router;
