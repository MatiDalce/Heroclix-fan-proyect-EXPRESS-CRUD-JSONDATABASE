module.exports = {

index : function (req, res)  {   
 const data = { title: "My Mad Heroclix",
               log: "log-in",
               figures:"figures"} 
res.render("index", data)




}




} 