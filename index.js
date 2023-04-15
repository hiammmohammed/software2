
import express from 'express';

const app = express();

const students =[
    {
        id: 1,
        name: "ahmed",
        city: "shibeen",
    },
    {
        id: 2,
        name: "yasser",
        city: "tanta",
    },
    {
        id: 3,
        name: "mohammed",
        city: "giza",
    },
];
const studentsFunction = (req, res) => {
let output ='<ul>';
for (let i = 0; i<students.length; i++)
{
    const student = students[i];

    output += '<li>' + student.name + '</li>';

}
 output +='</ul>';
 
    res.send(output);
};
app.get('/students',studentsFunction)


app.listen(5000);


