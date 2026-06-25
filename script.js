// ---- Language toggle ----
function setLang(l){
  document.getElementById('lang-en').classList.toggle('hidden', l!=='en');
  document.getElementById('lang-fi').classList.toggle('hidden', l!=='fi');
  document.querySelectorAll('[data-lang-btn]').forEach(function(b){
    var on = b.getAttribute('data-lang-btn')===l;
    b.style.background = on ? 'var(--ink)' : 'transparent';
    b.style.color = on ? 'var(--bg)' : 'var(--ink)';
  });
  document.documentElement.lang = l;
  window.scrollTo({top:0});
}

// ---- Palette switcher ----
var PALETTES = {
  butter:{ '--bg':'#FBF1D0','--ink':'#3A271C','--accent':'#B65A2B','--accent2':'#5E8AA8','--pop':'#C98A3C','--block':'#2E2018' },
  mint:  { '--bg':'#E3EFDC','--ink':'#911500','--accent':'#FB441B','--accent2':'#9E72CC','--pop':'#F0691F','--block':'#911500' },
  tomato:{ '--bg':'#FBEFD9','--ink':'#232020','--accent':'#E2452A','--accent2':'#3E7CA8','--pop':'#F2A03D','--block':'#232020' }
};
function setPalette(name){
  var p = PALETTES[name] || PALETTES.mint;
  for(var k in p){ document.documentElement.style.setProperty(k, p[k]); }
  document.querySelectorAll('[data-pal-btn]').forEach(function(b){
    var on = b.getAttribute('data-pal-btn')===name;
    b.style.background = on ? '#F4ECDB' : 'transparent';
    b.style.color = on ? '#1c1714' : '#B9AE9E';
  });
}

// ---- Hover-reveal videos ----
document.querySelectorAll('.work-tile').forEach(function(tile){
  var v = tile.querySelector('video');
  if(!v) return;
  tile.addEventListener('mouseenter', function(){ v.style.opacity='1'; var p=v.play(); if(p&&p.catch)p.catch(function(){}); });
  tile.addEventListener('mouseleave', function(){ v.style.opacity='0'; try{ v.pause(); v.currentTime=0; }catch(e){} });
});

// ---- Init ----
setLang('en');
setPalette('mint');
