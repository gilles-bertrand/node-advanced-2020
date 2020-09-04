exports.index = (req,res)=>{
    if(req.url === '/index') res.redirect(301,'/')
    res.sendFile(`${process.cwd()}/views/index.html`);
}

exports.about = (req,res)=>{
    res.sendFile(`${process.cwd()}/views/about.html`);
}