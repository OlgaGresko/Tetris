!function(){function e(e){return e&&e.__esModule?e.default:e}var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")};var t={};function n(e,i){for(var t=0;t<i.length;t++){var n=i[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,i,t){i&&n(e.prototype,i);t&&n(e,t);return e};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,i,t){i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t;return e};var o=new(function(){"use strict";function n(){e(i)(this,n),e(c)(this,"score",0),e(c)(this,"lines",0),e(c)(this,"level",0),e(c)(this,"playfield",[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]),e(c)(this,"activePiece",{x:0,y:0,blocks:[[0,1,0],[1,1,1],[0,0,0]]})}return e(t)(n,[{key:"movePieceLeft",value:function(){this.activePiece.x-=1,this.isPieceOutOfBounds()&&(this.activePiece.x+=1)}},{key:"movePieceRight",value:function(){this.activePiece.x+=1,this.isPieceOutOfBounds()&&(this.activePiece.x-=1)}},{key:"movePieceDown",value:function(){this.activePiece.y+=1,this.isPieceOutOfBounds()&&(this.activePiece.y-=1,this.lockPiece())}},{key:"hasCollision",value:function(){for(var e=this.activePiece,i=e.y,t=e.x,n=e.blocks,c=0;c<n.length;c++)for(var o=0;o<n.length;o++)if(n[c][o]&&(void 0===this.playfield[i+c]||void 0===this.playfield[i+c][t+o]||this.playfield[i+c][t+o]))return!0;return!1}},{key:"lockPiece",value:function(){for(var e=this.activePiece,i=e.y,t=e.x,n=e.blocks,c=0;c<n.length;c++)for(var o=0;o<n.length;o++)n[c][o]&&(this.playfield[i+c][t+o]=n[c][o])}}]),n}());window.game=o,console.log("game",o)}();
//# sourceMappingURL=index.7a5ba99f.js.map