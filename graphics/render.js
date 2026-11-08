const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
for(const v of ['title','number','list']){await p.goto('file://'+__dirname+'/stills.html?v='+v);await p.evaluate(()=>document.fonts.ready);
const ok=await p.evaluate(()=>['900 50px Archivo','italic 50px "Instrument Serif"','50px "JetBrains Mono"'].map(f=>document.fonts.check(f)));
await p.screenshot({path:__dirname+'/stills/'+v+'-card.png'});console.log(v,ok);}await b.close();})();
