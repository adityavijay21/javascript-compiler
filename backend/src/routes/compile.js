const express = require('express');
const { compileAndRun } = require('../services/compiler');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { files } = req.body;
    const output = await compileAndRun(files);
    res.json({ output });
  } catch (error) {
    res.status(400).json({ output: `Error: ${error.message}` });
  }
});

module.exports = router;