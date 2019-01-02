!function(t){var e={};function n(s){if(e[s])return e[s].exports;var i=e[s]={i:s,l:!1,exports:{}};return t[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(2),t.exports=n(1)},function(t,e){},function(t,e,n){"use strict";function s(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}n.r(e);var i,a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=e,this.canvas=document.querySelector(e.canvas),this.canvas&&(this.context=this.canvas.getContext("2d"),this.color="red",this.size=this.prop_set(e.size,20),this.num_x=e.num_x,this.num_y=e.num_y,this.init_canvas())}var e,n,i;return e=t,(n=[{key:"init_canvas",value:function(){if(this.prepare_canvas(),this.attach_events(),this.options.pattern&&this.parse_pattern(),this.options.fill){for(var t=Math.round(this.get_parent_width()/this.size/2),e=0;e<t;e++)this.squares.push({x:this.size*(2*e),y:0});this.draw_squares()}}},{key:"attach_events",value:function(){this.place_square=this.place_square.bind(this),this.canvas.addEventListener("click",this.place_square)}},{key:"place_square",value:function(t){this.context.clearRect(0,0,this.canvas.width,this.canvas.height);var e=t.pageX-t.target.offsetLeft,n=t.pageY-t.target.offsetTop,s=e-e%this.size,i=n-n%this.size;i===this.canvas.height&&(i-=this.size),s===this.canvas.width&&(s-=this.size);var a=this.squares.findIndex(function(t){return t.x===s&t.y===i});a>-1?this.squares.splice(a,1):this.squares.push({x:s,y:i}),this.draw_squares(this.context,this.squares)}},{key:"prop_set",value:function(t,e){return t||e}},{key:"prepare_canvas",value:function(){this.canvas.removeAttribute("hidden"),this.canvas.width=this.num_x*this.size,this.canvas.height=this.num_y*this.size,"infinite"===this.num_x&&(this.canvas.width=this.get_parent_width()),this.squares=[]}},{key:"get_parent_width",value:function(){var t=getComputedStyle(this.canvas.parentNode),e=this.canvas.parentNode.clientWidth;return e-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}},{key:"parse_pattern",value:function(){for(var t=this.options.pattern.split(","),e=0;e<t.length;e++){var n=parseInt(t[e].trim()),s=Math.floor(e/this.num_x),i=(e+this.num_x)%this.num_x;"infinite"===this.num_x&&(s=0,i=e),n&&this.squares.push({x:this.size*i,y:this.size*s})}this.draw_squares()}},{key:"draw_squares",value:function(){this.context.fillStyle=this.prop_set(this.options.color,"rgba(51, 51, 51, 0.9)");for(var t=0;t<this.squares.length;t++){var e=this.squares[t];this.context.fillRect(e.x,e.y,this.size,this.size)}}}])&&s(e.prototype,n),i&&s(e,i),t}();new a({canvas:".js-sq-tl",num_x:1,num_y:1,pattern:"1",color:"#36B1BF"}),new a({canvas:".js-sq-tr",num_x:2,num_y:1,pattern:"1,1",color:"#36B1BF"}),new a({canvas:".js-sq-br",num_x:1,num_y:2,pattern:"1,1",color:"#F23C50"}),new a({canvas:".js-sq-bl",num_x:2,num_y:2,pattern:"1,0,1,1",color:"#F23C50"}),new a({canvas:".js-sq-home-intro",num_x:6,num_y:5,color:"#568b8e",size:10,pattern:"0,0,1,1,0,1,\n    0,1,1,0,0,1,\n    1,1,0,0,0,1,\n    0,1,1,0,0,0,\n    0,0,1,1,0,1"}),new a({canvas:".js-sq-site-header",num_x:"infinite",num_y:1,size:5,color:"#1d4e6d",fill:"even"});document.querySelector(".js-random-emoji")&&(document.querySelector(".js-random-emoji").textContent=(i=["🤤","🐳","🍻","👊🏻","🍳"])[Math.round(Math.random()*(i.length-1))])}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL3NjcmlwdHMvc3F1YXJlcy5qcyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImVtb2ppcyIsIlNxdWFyZXMiLCJvcHRpb25zIiwiX2NsYXNzQ2FsbENoZWNrIiwidGhpcyIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY29sb3IiLCJzaXplIiwicHJvcF9zZXQiLCJudW1feCIsIm51bV95IiwiaW5pdF9jYW52YXMiLCJwcmVwYXJlX2NhbnZhcyIsImF0dGFjaF9ldmVudHMiLCJwYXR0ZXJuIiwicGFyc2VfcGF0dGVybiIsImZpbGwiLCJudW1fYm94ZXMiLCJNYXRoIiwicm91bmQiLCJnZXRfcGFyZW50X3dpZHRoIiwic3F1YXJlcyIsInB1c2giLCJ4IiwieSIsImRyYXdfc3F1YXJlcyIsInBsYWNlX3NxdWFyZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJ4X3JhdyIsInBhZ2VYIiwidGFyZ2V0Iiwib2Zmc2V0TGVmdCIsInlfcmF3IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJpbmRleCIsImZpbmRJbmRleCIsInBvcyIsInNwbGljZSIsInByb3AiLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJlbnRfc3R5bGVzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcmVudE5vZGUiLCJwYXJlbnRfd2lkdGgiLCJjbGllbnRXaWR0aCIsInBhcnNlRmxvYXQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsInNwbGl0IiwibGVuZ3RoIiwiYm94IiwicGFyc2VJbnQiLCJ0cmltIiwicm93IiwiZmxvb3IiLCJjb2wiLCJmaWxsU3R5bGUiLCJzcXVhcmUiLCJmaWxsUmVjdCIsInRleHRDb250ZW50IiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiYUFDQSxJQUFBQSxFQUFBLEdBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsR0FBQSxDQUNBRyxFQUFBSCxFQUNBSSxHQUFBLEVBQ0FILFFBQUEsSUFVQSxPQU5BSSxFQUFBTCxHQUFBTSxLQUFBSixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBRixHQUdBRyxFQUFBRSxHQUFBLEVBR0FGLEVBQUFELFFBS0FGLEVBQUFRLEVBQUFGLEVBR0FOLEVBQUFTLEVBQUFWLEVBR0FDLEVBQUFVLEVBQUEsU0FBQVIsRUFBQVMsRUFBQUMsR0FDQVosRUFBQWEsRUFBQVgsRUFBQVMsSUFDQUcsT0FBQUMsZUFBQWIsRUFBQVMsRUFBQSxDQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsWUFBQSxDQUF3REMsTUFBQSxXQUV4RFAsT0FBQUMsZUFBQWIsRUFBQSxjQUFpRG1CLE9BQUEsS0FRakRyQixFQUFBc0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQXJCLEVBQUFxQixJQUNBLEVBQUFF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TyxJQUFJVCxFQUFRLENBQzFCSSxPQUFRLFlBQ1JRLE1BQU8sRUFDUEMsTUFBTyxFQUNQSSxRQUFTLE1BQ1RSLE1BQU8sWUFHTyxJQUFJVCxFQUFRLENBQzFCSSxPQUFRLFlBQ1JRLE1BQU8sRUFDUEMsTUFBTyxFQUNQSSxRQUFTLE1BQ1RSLE1BQU8sWUFHTyxJQUFJVCxFQUFRLENBQzFCSSxPQUFRLFlBQ1JRLE1BQU8sRUFDUEMsTUFBTyxFQUNQSSxRQUFTLFVBQ1RSLE1BQU8sWUFHVSxJQUFJVCxFQUFRLENBQzdCSSxPQUFRLG9CQUNSUSxNQUFPLEVBQ1BDLE1BQU8sRUFDUEosTUFBTyxVQUNQQyxLQUFNLEdBQ05PLFFBQU8sd0ZBUVcsSUFBSWpCLEVBQVEsQ0FDOUJJLE9BQVEscUJBQ1JRLE1BQU8sV0FDUEMsTUFBTyxFQUNQSCxLQUFNLEVBQ05ELE1BQU8sVUFDUFUsS0FBTSxTQWVKZCxTQUFTQyxjQUFjLHNCQUN6QkQsU0FBU0MsY0FBYyxvQkFBb0I2RCxhQVByQ3BFLEVBQVMsQ0FBQyxLQUFNLEtBQU0sS0FBTSxPQUFRLE9BRXJCc0IsS0FBS0MsTUFBTUQsS0FBSytDLFVBQVlyRSxFQUFPMEQsT0FBUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFNxdWFyZXMgZnJvbSAnLi9zcXVhcmVzJztcblxuY29uc3QgaG9tZV90bCA9IG5ldyBTcXVhcmVzKHtcbiAgY2FudmFzOiAnLmpzLXNxLXRsJyxcbiAgbnVtX3g6IDEsXG4gIG51bV95OiAxLFxuICBwYXR0ZXJuOiAnMScsXG4gIGNvbG9yOiAnIzM2QjFCRidcbn0pO1xuXG5jb25zdCBob21lX3RyID0gbmV3IFNxdWFyZXMoe1xuICBjYW52YXM6ICcuanMtc3EtdHInLFxuICBudW1feDogMixcbiAgbnVtX3k6IDEsXG4gIHBhdHRlcm46ICcxLDEnLFxuICBjb2xvcjogJyMzNkIxQkYnXG59KTtcblxuY29uc3QgaG9tZV9iciA9IG5ldyBTcXVhcmVzKHtcbiAgY2FudmFzOiAnLmpzLXNxLWJyJyxcbiAgbnVtX3g6IDEsXG4gIG51bV95OiAyLFxuICBwYXR0ZXJuOiAnMSwxJyxcbiAgY29sb3I6ICcjRjIzQzUwJ1xufSk7XG5cbmNvbnN0IGhvbWVfYmwgPSBuZXcgU3F1YXJlcyh7XG4gIGNhbnZhczogJy5qcy1zcS1ibCcsXG4gIG51bV94OiAyLFxuICBudW1feTogMixcbiAgcGF0dGVybjogJzEsMCwxLDEnLFxuICBjb2xvcjogJyNGMjNDNTAnXG59KTtcblxuY29uc3QgaG9tZV9pbnRybyA9IG5ldyBTcXVhcmVzKHtcbiAgY2FudmFzOiAnLmpzLXNxLWhvbWUtaW50cm8nLFxuICBudW1feDogNixcbiAgbnVtX3k6IDUsXG4gIGNvbG9yOiAnIzU2OGI4ZScsXG4gIHNpemU6IDEwLFxuICBwYXR0ZXJuOiBgMCwwLDEsMSwwLDEsXG4gICAgMCwxLDEsMCwwLDEsXG4gICAgMSwxLDAsMCwwLDEsXG4gICAgMCwxLDEsMCwwLDAsXG4gICAgMCwwLDEsMSwwLDFgXG59KTtcblxuY29uc3Qgc2l0ZV9oZWFkZXIgPSBuZXcgU3F1YXJlcyh7XG4gIGNhbnZhczogJy5qcy1zcS1zaXRlLWhlYWRlcicsXG4gIG51bV94OiAnaW5maW5pdGUnLFxuICBudW1feTogMSxcbiAgc2l6ZTogNSxcbiAgY29sb3I6ICcjMWQ0ZTZkJyxcbiAgZmlsbDogJ2V2ZW4nXG59KTtcblxuLyoqXG4gKiBSYW5kb20gZW1vamlcbiAqL1xuXG5mdW5jdGlvbiBnZXRSYW5kb21FbW9qaSgpIHtcbiAgY29uc3QgZW1vamlzID0gWyfwn6SkJywgJ/CfkLMnLCAn8J+NuycsICfwn5GK8J+PuycsICfwn42zJ107XG5cbiAgY29uc3QgZW1vamkgPSBlbW9qaXNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKGVtb2ppcy5sZW5ndGggLSAxKSldO1xuICByZXR1cm4gZW1vamk7XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcmFuZG9tLWVtb2ppJykpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXJhbmRvbS1lbW9qaScpLnRleHRDb250ZW50ID0gZ2V0UmFuZG9tRW1vamkoKTtcbn1cbiIsImNsYXNzIFNxdWFyZXMge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvcHRpb25zLmNhbnZhcyk7XG5cbiAgICBpZiAoIXRoaXMuY2FudmFzKSByZXR1cm47XG5cbiAgICB0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuY29sb3IgPSdyZWQnO1xuXG4gICAgdGhpcy5zaXplID0gdGhpcy5wcm9wX3NldChvcHRpb25zLnNpemUsIDIwKTtcblxuICAgIHRoaXMubnVtX3ggPSBvcHRpb25zLm51bV94O1xuICAgIHRoaXMubnVtX3kgPSBvcHRpb25zLm51bV95O1xuXG4gICAgdGhpcy5pbml0X2NhbnZhcygpO1xuICB9XG5cbiAgaW5pdF9jYW52YXMoKSB7XG4gICAgdGhpcy5wcmVwYXJlX2NhbnZhcygpO1xuICAgIHRoaXMuYXR0YWNoX2V2ZW50cygpO1xuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5wYXR0ZXJuKSB7XG4gICAgICB0aGlzLnBhcnNlX3BhdHRlcm4oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmZpbGwpIHtcbiAgICAgIGNvbnN0IG51bV9ib3hlcyA9IE1hdGgucm91bmQodGhpcy5nZXRfcGFyZW50X3dpZHRoKCkgLyB0aGlzLnNpemUgLyAyKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1fYm94ZXM7IGkrKykge1xuICAgICAgICB0aGlzLnNxdWFyZXMucHVzaCh7IHg6IHRoaXMuc2l6ZSAqICgyICogaSksIHk6IDAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZHJhd19zcXVhcmVzKCk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoX2V2ZW50cygpIHtcbiAgICB0aGlzLnBsYWNlX3NxdWFyZSA9IHRoaXMucGxhY2Vfc3F1YXJlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnBsYWNlX3NxdWFyZSk7XG4gIH1cblxuICBwbGFjZV9zcXVhcmUoZSkge1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICAgIGNvbnN0IHhfcmF3ID0gZS5wYWdlWCAtIGUudGFyZ2V0Lm9mZnNldExlZnQ7XG4gICAgICBjb25zdCB5X3JhdyA9IGUucGFnZVkgLSBlLnRhcmdldC5vZmZzZXRUb3A7XG5cbiAgICAgIGxldCB4ID0geF9yYXcgLSB4X3JhdyAlIHRoaXMuc2l6ZTtcbiAgICAgIGxldCB5ID0geV9yYXcgLSB5X3JhdyAlIHRoaXMuc2l6ZTtcblxuICAgICAgaWYgKHkgPT09IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgICB5IC09IHRoaXMuc2l6ZTtcbiAgICAgIH1cbiAgICAgIGlmICh4ID09PSB0aGlzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICB4IC09IHRoaXMuc2l6ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNxdWFyZXMuZmluZEluZGV4KHBvcyA9PiBwb3MueCA9PT0geCAmIHBvcy55ID09PSB5KTtcblxuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5zcXVhcmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNxdWFyZXMucHVzaCh7IHg6IHgsIHk6IHl9KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmF3X3NxdWFyZXModGhpcy5jb250ZXh0LCB0aGlzLnNxdWFyZXMpO1xuICB9XG5cbiAgcHJvcF9zZXQocHJvcCwgdmFsdWUpIHtcbiAgICByZXR1cm4gcHJvcCA/IHByb3AgOiB2YWx1ZTtcbiAgfVxuXG4gIHByZXBhcmVfY2FudmFzKCkge1xuICAgIHRoaXMuY2FudmFzLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG5cbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMubnVtX3ggKiB0aGlzLnNpemU7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5udW1feSAqIHRoaXMuc2l6ZTtcblxuICAgIGlmICh0aGlzLm51bV94ID09PSAnaW5maW5pdGUnKSB7ICBcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5nZXRfcGFyZW50X3dpZHRoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zcXVhcmVzID0gW107XG4gIH1cblxuICBnZXRfcGFyZW50X3dpZHRoKCkge1xuICAgIGNvbnN0IHBhcmVudF9zdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuY2FudmFzLnBhcmVudE5vZGUpO1xuICAgIGxldCBwYXJlbnRfd2lkdGggPSB0aGlzLmNhbnZhcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoO1xuICAgIHBhcmVudF93aWR0aCAtPSBwYXJzZUZsb2F0KHBhcmVudF9zdHlsZXMucGFkZGluZ0xlZnQpICsgcGFyc2VGbG9hdChwYXJlbnRfc3R5bGVzLnBhZGRpbmdSaWdodCk7XG5cbiAgICByZXR1cm4gcGFyZW50X3dpZHRoO1xuICB9XG5cbiAgcGFyc2VfcGF0dGVybigpIHtcbiAgICBjb25zdCBwYXR0ZXJuID0gdGhpcy5vcHRpb25zLnBhdHRlcm4uc3BsaXQoJywnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0dGVybi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYm94ID0gcGFyc2VJbnQocGF0dGVybltpXS50cmltKCkpO1xuICAgICAgbGV0IHJvdyA9IE1hdGguZmxvb3IoaSAvIHRoaXMubnVtX3gpO1xuICAgICAgbGV0IGNvbCA9IChpICsgdGhpcy5udW1feCkgJSB0aGlzLm51bV94O1xuXG4gICAgICBpZiAodGhpcy5udW1feCA9PT0gJ2luZmluaXRlJykge1xuICAgICAgICByb3cgPSAwO1xuICAgICAgICBjb2wgPSBpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYm94KSB7XG4gICAgICAgIHRoaXMuc3F1YXJlcy5wdXNoKHsgeDogdGhpcy5zaXplICogY29sLCB5OiB0aGlzLnNpemUgKiByb3cgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5kcmF3X3NxdWFyZXMoKTtcbiAgfVxuXG4gIGRyYXdfc3F1YXJlcygpIHtcbiAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5wcm9wX3NldCh0aGlzLm9wdGlvbnMuY29sb3IsICdyZ2JhKDUxLCA1MSwgNTEsIDAuOSknKTtcblxuICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnNxdWFyZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IHRoaXMuc3F1YXJlc1tpXTtcbiAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdChzcXVhcmUueCwgc3F1YXJlLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3F1YXJlcztcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9