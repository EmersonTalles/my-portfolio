(()=>{
  'use strict';

  const canvas=document.querySelector('#hex-background');
  if(!(canvas instanceof HTMLCanvasElement))return;

  const parent=canvas.parentElement;
  const context=canvas.getContext('2d');
  if(!parent||!context)return;

  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
  let width=0;
  let height=0;
  let frame=0;
  let lightX=0;
  let lightY=0;
  let targetX=0;
  let targetY=0;
  let pointerX=0;
  let pointerY=0;
  let hasPointer=false;

  function hexagon(x,y,radius){
    context.beginPath();
    for(let i=0;i<6;i++){
      const angle=i*Math.PI/3;
      const pointX=x+Math.cos(angle)*radius;
      const pointY=y+Math.sin(angle)*radius;
      if(i===0)context.moveTo(pointX,pointY);
      else context.lineTo(pointX,pointY);
    }
    context.closePath();
  }

  function draw(){
    frame=0;
    const easing=reducedMotion.matches?1:.13;
    lightX+=(targetX-lightX)*easing;
    lightY+=(targetY-lightY)*easing;

    const colors={
      background:'oklch(9% .01 250)',
      base:'oklch(12% .016 250)',
      face:'oklch(24% .055 250)',
      edge:'oklch(38% .055 250)',
      light:'oklch(57% .13 245)',
      highlight:'oklch(68% .1 235)',
      shadow:'oklch(3.5% .005 250)'
    };

    context.globalAlpha=1;
    context.fillStyle=colors.background;
    context.fillRect(0,0,width,height);

    const radius=width<600?33:42;
    const rowHeight=Math.sqrt(3)*radius;
    const lightRadius=width<600?230:340;
    for(let column=-3;column<width/(radius*1.5)+2;column++){
      for(let row=-2;row<height/rowHeight+2;row++){
        const y=row*rowHeight+(column%2?rowHeight/2:0);
        const x=column*radius*1.5;
        const distance=Math.hypot(x-lightX,y-lightY);
        const influence=Math.max(0,1-distance/lightRadius)**1.6;
        const lift=reducedMotion.matches?0:influence*7;
        const variation=(Math.sin(column*12.7+row*8.3)+1)/2;

        hexagon(x,y+5,radius-2);
        context.fillStyle=colors.shadow;
        context.fill();

        hexagon(x,y-lift,radius-3);
        context.fillStyle=colors.base;
        context.fill();

        context.globalAlpha=.18+variation*.12;
        context.fillStyle=colors.face;
        context.fill();

        context.globalAlpha=influence*.95;
        const gradient=context.createLinearGradient(x-radius,y-radius,x+radius,y+radius);
        gradient.addColorStop(0,colors.light);
        gradient.addColorStop(1,colors.face);
        context.fillStyle=gradient;
        context.fill();

        context.globalAlpha=.12+influence*.75;
        context.strokeStyle=influence>.3?colors.highlight:colors.edge;
        context.lineWidth=.7+influence*.6;
        context.stroke();
        context.globalAlpha=1;
      }
    }

    canvas.dataset.lightX=lightX.toFixed(1);
    canvas.dataset.lightY=lightY.toFixed(1);
    if(Math.abs(targetX-lightX)+Math.abs(targetY-lightY)>.2){
      frame=requestAnimationFrame(draw);
    }
  }

  function scheduleDraw(){
    if(!frame)frame=requestAnimationFrame(draw);
  }

  function resize(){
    width=document.documentElement.clientWidth;
    height=Math.max(parent.scrollHeight,document.documentElement.scrollHeight,window.innerHeight);
    canvas.style.width=`${width}px`;
    canvas.style.height=`${height}px`;
    const ratio=Math.min(window.devicePixelRatio||1,1);
    canvas.width=Math.round(width*ratio);
    canvas.height=Math.round(height*ratio);
    context.setTransform(ratio,0,0,ratio,0,0);

    if(!hasPointer){
      targetX=width*.78;
      targetY=window.scrollY+window.innerHeight*.22;
      if(lightX===0&&lightY===0){
        lightX=targetX;
        lightY=targetY;
      }
    }
    scheduleDraw();
  }

  function onPointerMove(event){
    hasPointer=true;
    pointerX=event.clientX;
    pointerY=event.clientY;
    targetX=pointerX;
    targetY=pointerY+window.scrollY;
    scheduleDraw();
  }

  function onScroll(){
    targetX=hasPointer?pointerX:width*.78;
    targetY=hasPointer?pointerY+window.scrollY:window.scrollY+window.innerHeight*.22;
    scheduleDraw();
  }

  function onPointerLeave(){
    hasPointer=false;
    targetX=width*.78;
    targetY=window.scrollY+window.innerHeight*.22;
    scheduleDraw();
  }

  const resizeObserver=new ResizeObserver(resize);
  resizeObserver.observe(parent);
  parent.addEventListener('pointermove',onPointerMove,{passive:true});
  parent.addEventListener('pointerleave',onPointerLeave);
  window.addEventListener('resize',resize,{passive:true});
  window.addEventListener('scroll',onScroll,{passive:true});
  reducedMotion.addEventListener('change',scheduleDraw);
  resize();
})();
