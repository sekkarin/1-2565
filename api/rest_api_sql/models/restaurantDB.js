const sql = require('./db')

//  Constructor
const Restaurant = (restaurant)=>{
    this.id = restaurant.id
    this.name = restaurant.name
    this.type = restaurant.type
    this.imageURL = restaurant.imageURL
}

Restaurant.create = (newRestaurant,result)=>{
    sql.query("INSERT INTO `restaurants` SET ?",newRestaurant,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null)
            return
        }
        console.log("new inseted");
        result(null,{id:res.id, ...newRestaurant})
    })
}
Restaurant.getAll=(result)=>{
    sql.query("SELECT * FROM `restaurants`",(req,res))
}