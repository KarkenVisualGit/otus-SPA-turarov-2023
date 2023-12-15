(()=>{"use strict";class t{routes=[];currentPath="";previousPath=null;constructor(t="hash"){this.mode=t,this.currentPath=this.getFragment(),window.addEventListener("hash"===this.mode?"hashchange":"popstate",(()=>this.handleRouteChange())),this.adjustLinksForGHPages()}adjustLinksForGHPages(){{const t="/otus-SPA-turarov-2023";document.querySelectorAll("a").forEach((e=>{e.href=t+e.pathname}))}}getFragment(){let t;if("history"===this.mode){t=decodeURI(window.location.pathname+window.location.search);const e="/otus-SPA-turarov-2023";t.startsWith(e)&&(t=t.substring(e.length))}else t=window.location.hash.slice(1);return t}async handleRouteChange(){this.previousPath=this.currentPath,this.currentPath=this.getFragment();const e={currentPath:this.currentPath,previousPath:this.previousPath,state:history.state};for(const n of this.routes)t.isMatch(n.match,this.currentPath)&&(n.onBeforeEnter&&await n.onBeforeEnter(e),n.onEnter&&await n.onEnter(e)),this.previousPath&&t.isMatch(n.match,this.previousPath)&&n.onLeave&&await n.onLeave(e)}static isMatch(t,e){return"function"==typeof t?t(e):t instanceof RegExp?t.test(e):t===e}on(t,e,n,o){const r=this.generateId(),a={id:r,match:t,onBeforeEnter:o,onEnter:e,onLeave:n};return this.routes.push(a),()=>{this.routes=this.routes.filter((t=>t.id!==r))}}createRender(t){return e=>{console.info(`${t} args=${JSON.stringify(e)}`);const n=document.getElementById("root");n&&(n.innerHTML=`<h2>${t}</h2>`)}}createLogger(){return t=>{console.info(`[leaving] args=${JSON.stringify(t)}`)}}someBeforeEnter(t){return async e=>{if(console.log(`Before entering, args: ${JSON.stringify(e)}`),e.currentPath===t){const e=document.getElementById("root");if(e){const n=document.createElement("div");n.innerHTML=`<h2>BeforeEnter: ${t}</h2>`,e.appendChild(n)}}}}generateId(){const t=()=>Math.floor(Math.random()*this.routes.length*1e3),e=t=>this.routes.some((e=>e.id===t));let n=t();for(;e(n);)n=t();return n}async navigate(t,e){"history"===this.mode?window.history.pushState(e,"",t):window.location.hash=t,await this.handleRouteChange()}}const e=new t("history"),n=e.on(/.*/,e.createRender("/.*"));e.on("/about",e.someBeforeEnter("/about"),e.createRender("/about"),e.createLogger()),e.on("/contacts",e.createRender("/contacts"),e.createLogger()),e.on("/login",e.createRender("/login"),e.createLogger()),e.on("/about/us",e.createRender("/about/us"),e.createLogger()),document.body.addEventListener("click",(t=>{const o=t.target;if(o.matches("a")){t.preventDefault();const r=o.getAttribute("href");r&&(e.navigate(r),n())}}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBUyxLQUU1QzBDLEVBQWExQixHQUNqQm5DLEtBQUtMLE9BQU9tRSxNQUFNckMsR0FBVUEsRUFBTVUsS0FBT0EsSUFFM0MsSUFBSUEsRUFBS3NCLElBQ1QsS0FBT0ksRUFBVTFCLElBQ2ZBLEVBQUtzQixJQUVQLE9BQU90QixDQUNULENBRUEsY0FBYTRCLENBQVNoQyxFQUFjUixHQUNoQixZQUFkdkIsS0FBS0QsS0FDUEcsT0FBT3NCLFFBQVF3QyxVQUFVekMsRUFBTyxHQUFJUSxHQUVwQzdCLE9BQU9hLFNBQVNLLEtBQU9XLFFBRW5CL0IsS0FBS0ksbUJBQ2IsRUFHRixNQUFNNkQsRUFBUyxJQUFJdkUsRUFBTyxXQUNwQndFLEVBQWVELEVBQU8vQixHQUFHLEtBQU0rQixFQUFPeEIsYUFBYSxRQUV6RHdCLEVBQU8vQixHQUNMLFNBQ0ErQixFQUFPZCxnQkFBZ0IsVUFDdkJjLEVBQU94QixhQUFhLFVBQ3BCd0IsRUFBT2YsZ0JBRVRlLEVBQU8vQixHQUFHLFlBQWErQixFQUFPeEIsYUFBYSxhQUFjd0IsRUFBT2YsZ0JBQ2hFZSxFQUFPL0IsR0FBRyxTQUFVK0IsRUFBT3hCLGFBQWEsVUFBV3dCLEVBQU9mLGdCQUMxRGUsRUFBTy9CLEdBQUcsWUFBYStCLEVBQU94QixhQUFhLGFBQWN3QixFQUFPZixnQkFTaEUzQyxTQUFTNEQsS0FBS2hFLGlCQUFpQixTQUFVaUUsSUFDdkMsTUFBTUMsRUFBU0QsRUFBTUMsT0FDckIsR0FBSUEsRUFBT0MsUUFBUSxLQUFNLENBQ3ZCRixFQUFNRyxpQkFDTixNQUFNQyxFQUFNSCxFQUFPSSxhQUFhLFFBQzVCRCxJQUNGUCxFQUFPRixTQUFTUyxHQUNoQk4sSUFFSixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3R1cy1zcGEtdHVyYXJvdi0yMDIzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgUm91dGVyTW9kZSA9IFwiaGFzaFwiIHwgXCJoaXN0b3J5XCI7XHJcblxyXG5pbnRlcmZhY2UgSGlzdG9yeVN0YXRlIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcbnR5cGUgTWF0Y2ggPSBSZWdFeHAgfCBzdHJpbmcgfCAoKHBhdGg6IHN0cmluZykgPT4gYm9vbGVhbik7XHJcbnR5cGUgUmVuZGVyQXJncyA9IHtcclxuICBjdXJyZW50UGF0aDogc3RyaW5nO1xyXG4gIHByZXZpb3VzUGF0aDogc3RyaW5nIHwgbnVsbDtcclxuICBzdGF0ZTogSGlzdG9yeVN0YXRlO1xyXG59O1xyXG5pbnRlcmZhY2UgUm91dGVBcmdzIHtcclxuICBjdXJyZW50UGF0aDogc3RyaW5nO1xyXG4gIHByZXZpb3VzUGF0aDogc3RyaW5nIHwgbnVsbDtcclxuICBzdGF0ZTogSGlzdG9yeVN0YXRlO1xyXG59XHJcblxyXG50eXBlIEFzeW5jUm91dGVIYW5kbGVyID0gKGFyZ3M6IFJvdXRlQXJncykgPT4gUHJvbWlzZTx2b2lkPiB8IHZvaWQ7XHJcblxyXG5pbnRlcmZhY2UgTGlzdGVuZXIge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbWF0Y2g6IE1hdGNoO1xyXG4gIG9uQmVmb3JlRW50ZXI/OiBBc3luY1JvdXRlSGFuZGxlcjtcclxuICBvbkVudGVyPzogQXN5bmNSb3V0ZUhhbmRsZXI7XHJcbiAgb25MZWF2ZT86IEFzeW5jUm91dGVIYW5kbGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcclxuICBwcml2YXRlIHJvdXRlczogTGlzdGVuZXJbXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIG1vZGU6IFJvdXRlck1vZGU7XHJcblxyXG4gIHByaXZhdGUgY3VycmVudFBhdGg6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNQYXRoOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IobW9kZTogUm91dGVyTW9kZSA9IFwiaGFzaFwiKSB7XHJcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xyXG4gICAgdGhpcy5jdXJyZW50UGF0aCA9IHRoaXMuZ2V0RnJhZ21lbnQoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICB0aGlzLm1vZGUgPT09IFwiaGFzaFwiID8gXCJoYXNoY2hhbmdlXCIgOiBcInBvcHN0YXRlXCIsXHJcbiAgICAgICgpID0+IHRoaXMuaGFuZGxlUm91dGVDaGFuZ2UoKVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFkanVzdExpbmtzRm9yR0hQYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcclxuICBwdWJsaWMgYWRqdXN0TGlua3NGb3JHSFBhZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKFBST0RVQ1RJT04pIHtcclxuICAgICAgY29uc3QgUFJFRklYID0gXCIvb3R1cy1TUEEtdHVyYXJvdi0yMDIzXCI7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhXCIpLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgICBjb25zdCBtb2RpZmllZExpbmsgPSBsaW5rO1xyXG4gICAgICAgIG1vZGlmaWVkTGluay5ocmVmID0gUFJFRklYICsgbGluay5wYXRobmFtZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RnJhZ21lbnQoKTogc3RyaW5nIHtcclxuICAgIGxldCBmcmFnbWVudDogc3RyaW5nO1xyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gXCJoaXN0b3J5XCIpIHtcclxuICAgICAgZnJhZ21lbnQgPSBkZWNvZGVVUkkod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgIGNvbnN0IFBSRUZJWCA9IFwiL290dXMtU1BBLXR1cmFyb3YtMjAyM1wiO1xyXG4gICAgICBpZiAoZnJhZ21lbnQuc3RhcnRzV2l0aChQUkVGSVgpKSB7XHJcbiAgICAgICAgZnJhZ21lbnQgPSBmcmFnbWVudC5zdWJzdHJpbmcoUFJFRklYLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZyYWdtZW50ID0gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaGFuZGxlUm91dGVDaGFuZ2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICB0aGlzLnByZXZpb3VzUGF0aCA9IHRoaXMuY3VycmVudFBhdGg7XHJcbiAgICB0aGlzLmN1cnJlbnRQYXRoID0gdGhpcy5nZXRGcmFnbWVudCgpO1xyXG5cclxuICAgIGNvbnN0IGFyZ3M6IFJvdXRlQXJncyA9IHtcclxuICAgICAgY3VycmVudFBhdGg6IHRoaXMuY3VycmVudFBhdGgsXHJcbiAgICAgIHByZXZpb3VzUGF0aDogdGhpcy5wcmV2aW91c1BhdGgsXHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcclxuICAgICAgc3RhdGU6IGhpc3Rvcnkuc3RhdGUsXHJcbiAgICB9O1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XHJcbiAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHRoaXMucm91dGVzKSB7XHJcbiAgICAgIGlmIChSb3V0ZXIuaXNNYXRjaChyb3V0ZS5tYXRjaCwgdGhpcy5jdXJyZW50UGF0aCkpIHtcclxuICAgICAgICBpZiAocm91dGUub25CZWZvcmVFbnRlcilcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXHJcbiAgICAgICAgICBhd2FpdCByb3V0ZS5vbkJlZm9yZUVudGVyKGFyZ3MpO1xyXG4gICAgICAgIGlmIChyb3V0ZS5vbkVudGVyKVxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcclxuICAgICAgICAgIGF3YWl0IHJvdXRlLm9uRW50ZXIoYXJncyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucHJldmlvdXNQYXRoICYmIFJvdXRlci5pc01hdGNoKHJvdXRlLm1hdGNoLCB0aGlzLnByZXZpb3VzUGF0aCkpIHtcclxuICAgICAgICBpZiAocm91dGUub25MZWF2ZSlcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXHJcbiAgICAgICAgICBhd2FpdCByb3V0ZS5vbkxlYXZlKGFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGlzTWF0Y2gobWF0Y2g6IE1hdGNoLCBwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIGlmICh0eXBlb2YgbWF0Y2ggPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICByZXR1cm4gbWF0Y2gocGF0aCk7XHJcbiAgICB9XHJcbiAgICBpZiAobWF0Y2ggaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuICAgICAgcmV0dXJuIG1hdGNoLnRlc3QocGF0aCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0Y2ggPT09IHBhdGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb24oXHJcbiAgICBtYXRjaDogUmVnRXhwIHwgc3RyaW5nIHwgKChwYXRoOiBzdHJpbmcpID0+IGJvb2xlYW4pLFxyXG4gICAgb25FbnRlcj86IEFzeW5jUm91dGVIYW5kbGVyLFxyXG4gICAgb25MZWF2ZT86IEFzeW5jUm91dGVIYW5kbGVyLFxyXG4gICAgb25CZWZvcmVFbnRlcj86IEFzeW5jUm91dGVIYW5kbGVyXHJcbiAgKTogKCkgPT4gdm9pZCB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMuZ2VuZXJhdGVJZCgpO1xyXG4gICAgY29uc3QgbGlzdGVuZXI6IExpc3RlbmVyID0geyBpZCwgbWF0Y2gsIG9uQmVmb3JlRW50ZXIsIG9uRW50ZXIsIG9uTGVhdmUgfTtcclxuICAgIHRoaXMucm91dGVzLnB1c2gobGlzdGVuZXIpO1xyXG5cclxuICAgIHJldHVybiAoKTogdm9pZCA9PiB7XHJcbiAgICAgIHRoaXMucm91dGVzID0gdGhpcy5yb3V0ZXMuZmlsdGVyKChsKSA9PiBsLmlkICE9PSBpZCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcclxuICBwdWJsaWMgY3JlYXRlUmVuZGVyKGNvbnRlbnQ6IHN0cmluZyk6IChhcmdzOiBSZW5kZXJBcmdzKSA9PiB2b2lkIHtcclxuICAgIHJldHVybiAoYXJnczogUmVuZGVyQXJncykgPT4ge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxyXG4gICAgICBjb25zb2xlLmluZm8oYCR7Y29udGVudH0gYXJncz0ke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWApO1xyXG4gICAgICBjb25zdCByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKTtcclxuICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XHJcbiAgICAgICAgcm9vdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxoMj4ke2NvbnRlbnR9PC9oMj5gO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcclxuICBwdWJsaWMgY3JlYXRlTG9nZ2VyKCk6IChhcmdzOiBSb3V0ZUFyZ3MpID0+IHZvaWQge1xyXG4gICAgcmV0dXJuIChhcmdzOiBSb3V0ZUFyZ3MpOiB2b2lkID0+IHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgY29uc29sZS5pbmZvKGBbbGVhdmluZ10gYXJncz0ke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWApO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXHJcbiAgcHVibGljIHNvbWVCZWZvcmVFbnRlcihjb250ZW50OiBzdHJpbmcpOiAoYXJnczogUm91dGVBcmdzKSA9PiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBhc3luYyAoYXJnczogUm91dGVBcmdzKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgIGNvbnNvbGUubG9nKGBCZWZvcmUgZW50ZXJpbmcsIGFyZ3M6ICR7SlNPTi5zdHJpbmdpZnkoYXJncyl9YCk7XHJcbiAgICAgIGlmIChhcmdzLmN1cnJlbnRQYXRoID09PSBjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIik7XHJcbiAgICAgICAgaWYgKHJvb3RFbGVtZW50KSB7XHJcbiAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgIG5ld0VsZW1lbnQuaW5uZXJIVE1MID0gYDxoMj5CZWZvcmVFbnRlcjogJHtjb250ZW50fTwvaDI+YDtcclxuICAgICAgICAgIHJvb3RFbGVtZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZW5lcmF0ZUlkKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBnZXRSYW5kb21OdW1iZXIgPSAoKTogbnVtYmVyID0+XHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMucm91dGVzLmxlbmd0aCAqIDEwMDApO1xyXG5cclxuICAgIGNvbnN0IGRvZXNFeGlzdCA9IChpZDogbnVtYmVyKTogYm9vbGVhbiA9PlxyXG4gICAgICB0aGlzLnJvdXRlcy5zb21lKChyb3V0ZSkgPT4gcm91dGUuaWQgPT09IGlkKTtcclxuXHJcbiAgICBsZXQgaWQgPSBnZXRSYW5kb21OdW1iZXIoKTtcclxuICAgIHdoaWxlIChkb2VzRXhpc3QoaWQpKSB7XHJcbiAgICAgIGlkID0gZ2V0UmFuZG9tTnVtYmVyKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgbmF2aWdhdGUocGF0aDogc3RyaW5nLCBzdGF0ZT86IEhpc3RvcnlTdGF0ZSk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gXCJoaXN0b3J5XCIpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLCBcIlwiLCBwYXRoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gcGF0aDtcclxuICAgIH1cclxuICAgIGF3YWl0IHRoaXMuaGFuZGxlUm91dGVDaGFuZ2UoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoXCJoaXN0b3J5XCIpO1xyXG5jb25zdCB1bnN1YnNjcmliZXIgPSByb3V0ZXIub24oLy4qLywgcm91dGVyLmNyZWF0ZVJlbmRlcihcIi8uKlwiKSk7XHJcbi8vIHJvdXRlci5vbigocGF0aCkgPT4gcGF0aCA9PT0gXCIvY29udGFjdHNcIiwgcm91dGVyLmNyZWF0ZVJlbmRlcihcIi9jb250YWN0c1wiKSk7XHJcbnJvdXRlci5vbihcclxuICBcIi9hYm91dFwiLFxyXG4gIHJvdXRlci5zb21lQmVmb3JlRW50ZXIoXCIvYWJvdXRcIiksXHJcbiAgcm91dGVyLmNyZWF0ZVJlbmRlcihcIi9hYm91dFwiKSxcclxuICByb3V0ZXIuY3JlYXRlTG9nZ2VyKClcclxuKTtcclxucm91dGVyLm9uKFwiL2NvbnRhY3RzXCIsIHJvdXRlci5jcmVhdGVSZW5kZXIoXCIvY29udGFjdHNcIiksIHJvdXRlci5jcmVhdGVMb2dnZXIoKSk7XHJcbnJvdXRlci5vbihcIi9sb2dpblwiLCByb3V0ZXIuY3JlYXRlUmVuZGVyKFwiL2xvZ2luXCIpLCByb3V0ZXIuY3JlYXRlTG9nZ2VyKCkpO1xyXG5yb3V0ZXIub24oXCIvYWJvdXQvdXNcIiwgcm91dGVyLmNyZWF0ZVJlbmRlcihcIi9hYm91dC91c1wiKSwgcm91dGVyLmNyZWF0ZUxvZ2dlcigpKTtcclxuXHJcbi8vIGlmIChQUk9EVUNUSU9OKSB7XHJcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIikuZm9yRWFjaCgobGluaykgPT4ge1xyXG4vLyAgICAgY29uc3QgbW9kaWZpZWRMaW5rID0gbGluaztcclxuLy8gICAgIG1vZGlmaWVkTGluay5ocmVmID0gUFJFRklYICsgbGluay5wYXRobmFtZTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gIGlmICh0YXJnZXQubWF0Y2hlcyhcImFcIikpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB1cmwgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcclxuICAgIGlmICh1cmwpIHtcclxuICAgICAgcm91dGVyLm5hdmlnYXRlKHVybCk7XHJcbiAgICAgIHVuc3Vic2NyaWJlcigpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XHJcbiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJyb3V0ZXMiLCJjdXJyZW50UGF0aCIsInByZXZpb3VzUGF0aCIsImNvbnN0cnVjdG9yIiwibW9kZSIsInRoaXMiLCJnZXRGcmFnbWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsImFkanVzdExpbmtzRm9yR0hQYWdlcyIsIlBSRUZJWCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiaHJlZiIsInBhdGhuYW1lIiwiZnJhZ21lbnQiLCJkZWNvZGVVUkkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJoYXNoIiwic2xpY2UiLCJhcmdzIiwic3RhdGUiLCJoaXN0b3J5Iiwicm91dGUiLCJpc01hdGNoIiwibWF0Y2giLCJvbkJlZm9yZUVudGVyIiwib25FbnRlciIsIm9uTGVhdmUiLCJwYXRoIiwiUmVnRXhwIiwidGVzdCIsIm9uIiwiaWQiLCJnZW5lcmF0ZUlkIiwibGlzdGVuZXIiLCJwdXNoIiwiZmlsdGVyIiwibCIsImNyZWF0ZVJlbmRlciIsImNvbnRlbnQiLCJjb25zb2xlIiwiaW5mbyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyb290RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY3JlYXRlTG9nZ2VyIiwic29tZUJlZm9yZUVudGVyIiwiYXN5bmMiLCJsb2ciLCJuZXdFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwiZ2V0UmFuZG9tTnVtYmVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZG9lc0V4aXN0Iiwic29tZSIsIm5hdmlnYXRlIiwicHVzaFN0YXRlIiwicm91dGVyIiwidW5zdWJzY3JpYmVyIiwiYm9keSIsImV2ZW50IiwidGFyZ2V0IiwibWF0Y2hlcyIsInByZXZlbnREZWZhdWx0IiwidXJsIiwiZ2V0QXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==