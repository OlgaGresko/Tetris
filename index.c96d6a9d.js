function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i;return t};const i=document.querySelector("#root"),s=new class{movePieceLeft(){this.activePiece.x-=1,this.hasCollision()&&(this.activePiece.x+=1)}movePieceRight(){this.activePiece.x+=1,this.hasCollision()&&(this.activePiece.x-=1)}movePieceDown(){this.activePiece.y+=1,this.hasCollision()&&(this.activePiece.y-=1,this.lockPiece())}rotatePiece(){this.rotateBlocks(),this.hasCollision()&&this.rotateBlocks(!1)}rotateBlocks(t=!0){const e=this.activePiece.blocks,i=e.length,s=Math.floor(i/2),l=i-1;for(let i=0;i<s;i++)for(let s=i;s<l-i;s++){const h=e[i][s];t?(e[i][s]=e[l-s][i],e[l-s][i]=e[l-i][l-s],e[l-i][l-s]=e[s][l-i],e[s][l-i]=h):(e[i][s]=e[s][l-i],e[s][l-i]=e[l-i][l-s],e[l-i][l-s]=e[l-s][i],e[l-s][i]=h)}}hasCollision(){const{y:t,x:e,blocks:i}=this.activePiece;for(let s=0;s<i.length;s++)for(let l=0;l<i.length;l++)if(i[s][l]&&(void 0===this.playfield[t+s]||void 0===this.playfield[t+s][e+l]||this.playfield[t+s][e+l]))return!0;return!1}lockPiece(){const{y:t,x:e,blocks:i}=this.activePiece;for(let s=0;s<i.length;s++)for(let l=0;l<i.length;l++)i[s][l]&&(this.playfield[t+s][e+l]=i[s][l])}constructor(){t(e)(this,"score",0),t(e)(this,"lines",0),t(e)(this,"level",0),t(e)(this,"playfield",[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]),t(e)(this,"activePiece",{x:0,y:0,blocks:[[0,1,0],[1,1,1],[0,0,0]]})}},l=new class{renderPlayfield(t){for(let e=0;e<t.length;e++){const i=t[e];for(let t=0;t<i.length;t++){i[t]&&(this.context.fillStyle="red",this.context.strokeStyle="black",this.context.lineWidth=2,this.context.fillRect(t*this.blockWidth,e*this.blockHeight,this.blockWidth,this.blockHeight))}}}constructor(t,e,i,s,l){this.element=t,this.width=e,this.height=i,this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,this.context=this.canvas.getContext("2d"),this.blockWidth=this.width/l,this.blockHeight=this.height/s,this.element.appendChild(this.canvas)}}(i,320,640,20,10);window.game=s,window.view=l,l.renderPlayfield(s.playfield);
//# sourceMappingURL=index.c96d6a9d.js.map
