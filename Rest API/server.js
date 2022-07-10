const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const students = [
    {
        "id":1,
    "name":"Ben"
    },
    {
        "id":20,
        "name":"Egg"
    },
    {
        "id":2,
        "name":"truth"
    },
    {
        "id":5,
        "name":"cock"
    },
    {
        "id":90,
        "name":"shaft"
    },
    {
        "id":87,
        "name":"balls"
    }
    
]

app.get('/students', (req, res) => {
    res.send(students);
});

app.get('/students/:id', (req, res) => {
    const id = req.params.id;
    var index = 0
    students.forEach(element => {
        if (element.id == id) {
            res.send(students[index]);
        } 
        index++
    });
    res.status(404).send('Student not found');
});

app.get('/students/:id/name', (req, res) => {
    const id = req.params.id;
    var index = 0
    students.forEach(element => {
        if (element.id == id) {
            res.send("the name is " + students[index].name);
        } 
        index++
    });
    res.status(404).send('Student not found');
});

app.post('/students', (req, res) => {
    const content = req.body;
    students.push(content)
    res.send(content);
});

app.put('/students', (req, res) => {
    const content = req.body;
    students.push(content)
    res.send(content);
});

app.delete('/students', (req, res) => {
    const content = req.body;
    
    students.forEach(element => {

        if (element.id == content.id){
            newStudents = students.filter(checkStudents = () =>{
                return element.id != content.id
            })
            res.send(newStudents);
        }
        
    })
    
    res.status(404).send('Student not found');
});


app.listen(3000, () => console.log(`Hello world app listening`))

console.log("hello")