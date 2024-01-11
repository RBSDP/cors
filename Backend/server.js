import express from "express";

const app = express()

// app.get("/",(req,res) => {
//     res.send("Server is reaady")
// })


app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            "id":1,
            "title":"A joke",
            "content":"This is a joke"
        },
        {
            "id":2,
            "title":"Another joke",
            "content":"This is another joke"
        },
        {
            "id":3,
            "title":"A third joke joke",
            "content":"This is a third joke"
        },
        {
            "id":4,
            "title":"A fourthjoke",
            "content":"This is a fourth joke"
        },
        {
            "id":5,
            "title":"A fifth joke",
            "content":"This is a fifth joke"
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
});

app.get('/jokes',(req,res)=>{
    const jokes = [
        {
            "id":1,
            "title":"A joke",
            "content":"This is a joke"
        },
        {
            "id":2,
            "title":"Another joke",
            "content":"This is another joke"
        },
        {
            "id":3,
            "title":"A third joke joke",
            "content":"This is a third joke"
        },
        {
            "id":4,
            "title":"A fourthjoke",
            "content":"This is a fourth joke"
        },
        {
            "id":5,
            "title":"A fifth joke",
            "content":"This is a fifth joke"
        },
    ];
    res.send(jokes);
})