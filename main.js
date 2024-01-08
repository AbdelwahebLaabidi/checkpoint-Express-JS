const express = require('express')

const app = express()

const port = 5000




const middelware=(req,res,next)=>{
    const date = new Date();
    const day = date.getDay()
    const time = date.getHours()


if( day == 0 || day == 6 || time <9 || time >17 ){
    return (res.send(console.log("erreur")))
}
next()

}


app.use(middelware)


app.get('/home', (req,res)=>{
    res.sendFile(__dirname+('/public/Home.html'))
})

app.get('/Contact', (req,res)=>{
    res.sendFile(__dirname+('/public/Contact-us.html'))
})

app.get('/Service', (req,res)=>{
    res.sendFile(__dirname+('/public/Our-Services.html'))
})

app.get('/style.css', (req,res)=>{
    res.sendFile(__dirname+('/public/style.css'))
})


app.listen(port, console.log(`server run on ${port}`))