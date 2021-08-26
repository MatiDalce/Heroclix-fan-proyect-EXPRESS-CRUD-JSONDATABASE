const fs = require ('fs') ;
const path = require ('path') ;
const HeroclixFilePath = path.join(__dirname, '../database/figures.json');
const Heroclix = JSON.parse(fs.readFileSync(HeroclixFilePath, 'utf-8'));



module.exports = { 


  figuresList : function (req, res) { 
      res.send(Heroclix)

  } , 

  figuresByFriends : function(req, res) { 
    const friends = req.params.friends;

    const figuras = Heroclix.filter( x => x.friends == friends);

    res.send(figuras)

  
     
   },


  figureDetail : function (req, res) { 

  },

  createGet : function (req,res) { res.render("/createFigure")

  },

  createFigurePOST: function (req, res) { 

  },

  deleteFigure : function (req, res) {

  }, 



 }