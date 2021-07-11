const { connect } = require("../router")

const connectDB =require("./../config/index")


exports.GetFoods=(req,res)=>{

    connectDB.query(`SELECT * FROM data.food`,((err,result)=>{

        if(err){
            res.json({
                status:"404",
                data:[""],
                message:"something wrong"
            })
        }
        res.json(result)
    }))
}

exports.GetFoodID=(req,res)=>{

    console.log(req.params.id);

    connectDB.query(`SELECT * FROM data.food WHERE food.id=${req.params.id}`,((err,result)=>{

        if(err){
            res.json({
                status:"404",
                data:[],
                message:"something wrong"
            })
        }
        res.json(result)
    }))
}

exports.CreateFood=(req,res)=>{

    console.log(req.body);

    connectDB.query(`INSERT INTO data.food SET ?`,
        data = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        },((err, result)=>{

        if(err){
            res.json({
                status:"404",
                data:[],
                message:"something wrong"
            })
        }
        res.json(req.body)
    }))
}

//RED CODe
exports.UpdateFoodID=(req, res)=>{

    console.log(req.params.id);
    console.log(req.body);

    connectDB.query(`UPDATE data.food SET ?`,
        data = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category
        },`WHERE food.id=${req.params.id}`, ((err,result)=>{

        if(err){
            res.json({
                status:"404",
                data:[],
                message:"something wrong"
            })
        }
        res.json(result)
    }))

}

exports.DeleteFoodID=(req,res)=>{

    console.log(req.params.id);

    connectDB.query(`DELETE FROM data.food WHERE id=${req.params.id}`,((err,result)=>{

        if(err){
            res.json({
                status:"404",
                data:[],
                message:"something wrong"
            })
        }
        res.json(result)
    }))
}

exports.GetOwners=(req,res)=>{

    connectDB.query(`SELECT * FROM data.owner`,((err,result)=>{

        if(err){
            res.json({
                status:"404",
                data:[""],
                message:"something wrong"
            })
        }
        res.json(result)
    }))
}

exports.CreateOwner=(req,res)=>{

    console.log(req.body);

    connectDB.query(`INSERT INTO data.owner SET ?`,
        data = {
            name: req.body.name,
            detail: req.body.detail
        },((err, result)=>{

        if(err){
            res.json({
                status:"404",
                data:[],
                message:"something wrong"
            })
        }
        res.json(req.body)
    }))
}

exports.DeleteOwner=(req,res)=>{

    console.log(req.params.name);

    connectDB.query(`DELETE FROM data.owner WHERE name=?`, [req.params.name], ((err,result)=>{

        if(err){
            res.json({
                status:"404",
                data:[],
                message:"something wrong"
            })
        }
        res.json(result)
    }))
}

exports.UpdateFoodID=(req, res)=>{

    console.log(req.params.name);
    console.log(req.body);

    connectDB.query(`UPDATE data.owner SET ?`,
        data = {
            name: req.body.name,
            detail: req.body.detail
        },`WHERE food.namme=${req.params.name}`, ((err,result)=>{

        if(err){
            res.json({
                status:"404",
                data:[],
                message:"something wrong"
            })
        }
        res.json(result)
    }))

}