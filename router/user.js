const express = require("express")
const db = require("../db")
const utils = require("../utils")

const router = express.Router()

router.post("/register", (request, response) => {
  const { first_name, last_name, email, password, mobile } = request.body
  db.query(
    "INSERT INTO users(first_name, last_name,email,password,mobile) VALUES(?,?,?,?,?)",
    [ first_name, last_name, email, password, mobile],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.post("/login", (request, response) => {
  const { email, password } = request.body
  const statement = "SELECT * FROM users WHERE email=? and password=?"
  db.query(statement, [email, password], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})





module.exports = router
