
var express =require ('express')
var app =express()
app.get("/",(req,res) =>{
    res.sendFile(__dirname+"/html/index.html")
})
app.get('/agendamento',(req,res)=>{
     res.sendFile(__dirname+"/html/cadastro.html")
})

app.get('/cadastro',(req,res)=>{
    res.sendFile(__dirname + "/html/agendamento.html")
})
app.listen(3000,()=>{
console.log("serve run")
})
        
