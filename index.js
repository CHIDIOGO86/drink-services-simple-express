const express = require("express");

const app = express();

let PORT = 1819;

app.use(express.json()); //midleware

app.listen(PORT, () =>{
    console.log ("App is running on port " + PORT )
});
const dataBase = [
   {
    iD: 1,
    productName: "apple" ,
    price: "$1000",
    amount: 100
},
{
    iD: 2,
    productName: "Linux",
    price: "$900",
    amount: 50
},
{
    iD: 3,
    productName: "hp",
    price: "$600",
    amount: 80
}

]
app.get("/api/v1/welcomepage", (req, res) => {
    return res.status(200).json({ message: "welcome to my app. " })
    
});
app.get("/api/v1/products/:iD", (req, res) => {
    const productId = req.params.iD
    const result = dataBase.find(({ iD }) => iD == productId)
    if (!result){
        return res.status(404).json({message: "result not found"})
    } 
    return res.status(200).json({message: "product found", product: result})

    
}),

app.post("/api/v1/users", (req, res) =>{
    const user = req.body
    return res.status(201).json({ user: user })
});
app.post("/api/v1/products", (req, res) =>{
    const product = req.body
    console.log(product)
    if(!product){
        return res.status(400).json({message: "product upload failed"})
    }
    dataBase.push(product)
    return res.status(200).json({messge: "product succfully uploaded", product: dataBase, productCount:dataBase.length})
})
app.put("/api/v1/users", (req,res) => {
    const {name,email} = req.headers
    if (!name || !email) {
        return res.status(404).json ({ message: "user not found" })
    } else {
        return res.status(200).json({message: "user updated", userName: name, email: email})
    }

});
app.delete("/api/v1/users", (req, res) =>{
    const productId = req.query.iD
    const productEmail = req.query.email
    //if (typeof(user2) !== "object"){
      //  return res.status(400).json({messa: "delete not successful"})

    const result = dataBase.find(({ iD }) => iD == productId)

    dataBase.splice(dataBase.indexOf(result),1)
    //splice takes 2 parameters and 1 optional parameter,the index of the element to be deleted in the array and
    // specify the quantity to be deleted
    //the replacement of the element  that was deleted. this is optional


    return res.status(200).json({messge: "product succfully deleted", product: dataBase, productCount:dataBase.length})
})
    

