const fs = require('fs');
const exec = require('child_process').exec;
const router = require('express').Router();

router.get('/', (req, res) => {
  const { courseCode } = req.query;
  const response = fs.writeFileSync(`./src/api/${courseCode}Homepage.js`, 'const express')
  //exec('dir', (err, stdout, stderr) => {
  //  if(err)
  //    return console.log(err)
  //  console.log(stdout)
  })
  res.send(response)
  console.log(response)
})

module.exports = router;