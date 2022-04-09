const {Games,State,Cells} = require ('../models');


module.exports = {
    //crear states
    createStates : (req,res)=>{
        State.create(req.body)
        .then(data=>{res.json(data)})
        .catch(err=>{console.log(err)})
    },
    //start create game
    showGames : async (req,res)=>{
        const game = await Games.findAll(
            associations={
                include:[
                    {
                        model:State,                      
                    },
                    {
                        model:Cells,
                    }
                ]
            }
        );
        res.json(game);
    },
    //create game
    createGame : async(req,res)=>{
        !req.body.state_id?req.body.state_id="1":req.body.state_id
        await Games.create(req.body)
        .then(data=>{res.json(data)})
        .catch(err=>{console.log(err)})
        
    },
     //see a particular game
        showGame : async (req,res)=>{
            const game = await Games.findOne({
                where:{
                    id:req.params.id
                },
                associations:{
                    include:[
                        {
                            model:State,
                            
                        },
                        {
                            model:Cells,
                        }
                    ]
                }
            })
            res.json(game);
        } ,
    //delete
    deleteGame : (req,res)=>{
        Games.destroy({
            where:{
                id:req.params.id
            }
        })
        .then(data=>{res.json(data)})
        .catch(err=>{console.log(err)})
    },
    //update
    updateGame : (req,res)=>{
        Games.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        .then(data=>{res.json(data)})
        .catch(err=>{console.log(err)})
    }
}