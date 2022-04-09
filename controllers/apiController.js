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
    createGame : (req,res)=>{
        Games.create(req.body)
        .then(data=>{res.json(data)})
        .catch(err=>{console.log(err)})
    },
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
        }
        )
        .then(data=>{res.json(data)})
        .catch(err=>{console.log(err)})
    }
}