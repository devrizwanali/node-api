const express = require('express');
const router = express.Router();
const AFC = require('./../models/AFC')

router.get('/afc', async(req, res) => {
  AFC.find({})
    .then(response => {
      res.json({afcs: response})
    })
    .catch(error => {
      res.json({message: error})
    })
});

router.post('/afc', async(req, res) => {
  const AFC = new AFC({
    afcDivision: req.body.afcDivision,
    teamName: req.body.teamName,
    numberOfWins: req.body.wins,
    numberOfLoses: req.body.loses,
    numberOfTies: req.body.ties
  });
  try {
    const savedAFC = await AFC.save();
    res.json(savedAFC);
  } catch(error) {
    res.json(error)
  }
});

router.get('/afc/:id', async(req, res) => {
  try {
    const AFC = await AFC.findById(req.params.id);
    res.json(AFC);
  } catch(error) {
    res.json(error);
  }
});

module.exports = router;
