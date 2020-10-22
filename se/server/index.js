const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'se'
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/insert', (req, res) =>{
    
    const author = req.body.author;
    const title = req.body.title;
    const journal = req.body.journal;
    const year = req.body.year
    const volume = req.body.volume;
    const number = req.body.number;
    const pages = req.body.pages;
    const month = req.body.month;
    const participants = req.body.participants;
    const uploaddate = req.body.uploaddate;
    
    const sqlInsert = 
        "Insert INTO evidence (author,title,journal,year,volume,number,pages,month,participants,uploaddate,method,benefit) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert,[author,title,journal,year,volume,number,pages,month,participants,uploaddate,null,null], (err, result) => {
        console.log(result);
    });
});

app.post('/api/select', (req, res) =>{
    const selectTitle = req.body.selectTitle;
    
    const sqlSelect = 
        "SELECT * FROM evidence WHERE title LIKE '%"+ selectTitle + "%'";
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result);
    });
});

app.post('/api/advanceSelect', (req, res) =>{
    const selectTitle= req.body.selectTitle;
    const selectStartDate= req.body.selectStartDate;
    const selectEndDate= req.body.selectEndDate;
    const selectBenefit= req.body.selectBenefit;
    
    const sqladvanceSelect = 
        "SELECT * FROM evidence WHERE title LIKE '%"+ selectTitle + "%' AND (uploaddate BETWEEN" + selectStartDate + "AND" + selectEndDate + ")AND benefit LIKE '%"+ selectBenefit + "%'";
    db.query(sqladvanceSelect, (err, result) => {
        console.log(result)
        res.send(result);
    });
});

app.listen(3010, () => {
    console.log("running on port 3010");
});