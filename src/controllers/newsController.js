exports.getNews = (req,res)=>{
 res.status(200).json({
  news:[
   {title:"News 1"},
   {title:"News 2"}
  ]
 });
};