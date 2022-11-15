const Restaurant = require("../models/restaurantDB")

 const postRestuarants = (req,res)=>{
    const newRestaurant ={
        id:req.body.id,
        name:req.body.name,
        typeof:req.body.type,
        imageURL:req.body.imageURL
    }
    Restaurant.create = (newRestaurant,result)=>{
        sql.query("INSERT INTO `restaurants` SET ?",newRestaurant,(err,res)=>{
            if(err){
                console.log(err);
                result(err,null)
                return res
            }
            console.log("new inseted");
            result(null,{id:res.id, ...newRestaurant})
        })
    }
    res.send("index")
}
 const getRestuarants = (req,res)=>{
    
    Restaurant.create = (newRestaurant,result)=>{
        sql.query("SELECT * FROM `restaurants` WHERE 1",newRestaurant,(err,res)=>{
            if(err){
                console.log(err);
                result(err,null)
                return 
            }
            console.log("new inseted");
            result(null,{id:res.id, ...newRestaurant})
        })
        console.log(data);
    }
    res.send(data)
}
module.exports =  {
    getRestuarants,
    postRestuarants
};