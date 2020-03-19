var expres= require('express');
var fs= require('fs');
var app=expres();
var url = require('url');
var body_parser= require('body-parser');
app.use(body_parser.urlencoded({extended:false}));
app.use(expres.static('./tous'));
//app.use(expres.static('./pictures'));
app.use(body_parser.json());
var t=[];
app.set('view engine','ejs');
app.use('/',function(req,res,next){
    next();
});


app.post('/',(req,resp)=>{
    console.log('request' +JSON.stringify(req.body));
   if(req.body.name==="" || req.body.password==="" || req.body.email==="" ){
resp.render('pages/file1',{error:'Remplir tous les champs!'});
    }
    else if(req.body.name!="" && req.body.password!="" && req.body.email!="" ){
    
   for(var i=0;i<t.length;i++){
            console.log("le t " +t[i].email);
            if(req.body.email===t[i].email){
                console.log("le " + req.body.email + '= ' + t[i].email);
                resp.render('pages/file1',{error:'Valid your email Exist déja !'});
            return t.push();
            }
            else{
                resp.render('pages/file1',{error:'Your Welcome !'});
            }
        }
        t.push({
           "name": req.body.name,
           "email": req.body.email,
           "password": req.body.password
        });
     
    }
    console.log(t);
    fs.writeFile('./jsoninscris.json',JSON.stringify(t),(err)=>{
        console.log(err);
    });
});
/*app.locals.entreprise=()=>{
    var wd= fs.readFileSync('./jsonentreprise.json');
    var list= JSON.parse(wd);
    return  list;
}*/
app.get('/',(request,response)=>{
    response.render('pages/file1');
    var fileJson= fs.readFileSync('./jsoninscris.json');
    var data= JSON.parse(fileJson);
  t=data;
  console.log('data' +JSON.stringify(t));
     var q = url.parse(request.url, true).query;
     if(q.email===""){
         console.log("q" + JSON.stringify(q));
      }
  else{
          for(var i=0;i<t.length;i++){
             if(q.email===t[i].email && q.password===t[i].password ){
                app.get('/'+url.parse(request.url).query,function(req,resp){
                    console.log("/email");
                    var wd= fs.readFileSync('./jsonentreprise.json');
                    var list= JSON.parse(wd);
                    
                    resp.render('pages/ind',{entr: list});
                    for(var i in list.entreprise )
                    console.log("list " + list.entreprise[i].nom);
                   });
                }
                 }
                }
});

app.listen(1230);
/*function clicked(){
    var m=[];
    var http= new XMLHttpRequest();
    http.open('GET','./jsoninscris.json',true);
    if(http.readyState==4 && http.status==200){
m=JSON.parse(http.responseText);
        for(var j=0;j<m.length;i++){
            if()
        }
    }
}*/