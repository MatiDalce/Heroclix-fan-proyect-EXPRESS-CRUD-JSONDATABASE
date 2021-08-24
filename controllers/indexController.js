module.exports = {

index : function (req, res)  {   
 const data = { title: "My Mad Heroclix",
               sign: "sign",
               figures:"figures"} ;
               
res.render("index", data)


}




} 