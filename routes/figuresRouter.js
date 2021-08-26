const express = require ('express') ;
const router = express.Router() ;
const figuresController = require("../controllers/figuresController")

module.exports =

router.get("/", figuresController.figuresList);

router.get("/create", figuresController.createGet) ;

router.post("/create", figuresController.createFigurePOST) ;

router.get("/:friends", figuresController.figuresByFriends);





module.exports = router
 //  GET    figuresList
 //  GET    figureDetail

 //    GET uploadFigure
 //      POST  uploadFigurePost
 // PUT editFigure
 //    DELETE  deleteFigure