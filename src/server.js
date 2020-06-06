const express = require("express")
const server = express()

const db = require("./database/db")

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))

server.get("/", (req, res) => res.render("index.html"))

server.get("/create-point", (req, res) => res.render("create-point.html"))

server.post("/savepoint", (req, res) => {
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        } else {
            console.log(req.body)
            return res.render("create-point.html", { saved: true })
        }
    }

    db.run(query, values, afterInsertData)   
})

server.get("/search", (req, res) => {
    const search = req.query.search

    if(search == "") {
        return res.render("search-results.html", { total: 0 })
    }
    
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        } else {
            const total = rows.length
            return res.render("search-results.html", { places: rows, total })
        }
    })
})

server.listen(3000)