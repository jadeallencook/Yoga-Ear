(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={"alan-watts":"PLkj0Wb8QyEEQ69tKXft0A4HXdNQjhGDr-","aldous-huxley":"PLkj0Wb8QyEEShoB_4UWGibR3xcXFvOkaF","bruce-lee":"PLkj0Wb8QyEERyzM_LVk9Vfd7jRuHtqYRV","buckminster-fuller":"PLkj0Wb8QyEERL2OCcQkLXFBUdQGVZSAC3","eckhart-tolle":"PLkj0Wb8QyEESC7COtAOcgOlAADMixtHCa","joseph-campbell":"PLkj0Wb8QyEERb-Rl3T7T1jYZ4JqC5UNAH","mr-rogers":"PLkj0Wb8QyEEQhSAeU_pzEdUIZqjTvoVSP","ram-dass":"PLkj0Wb8QyEES7znh5gjoPDApMztgqE4CQ",sadhguru:"PLkj0Wb8QyEERBveg9ODaBymFdvEnG6xZ0","terence-mckenna":"PLkj0Wb8QyEEQre9p7kJhVrsOrxTth3gvn","timothy-leary":"PLkj0Wb8QyEETzW-Q-9yo2e2nonFpCgXek"}},11:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},19:function(e,t,a){},2:function(e){e.exports={"classic-jazz":"PLkj0Wb8QyEER6iUZCACpL4_glASw9k5Vq",indian:"PLkj0Wb8QyEERzWHdPIl4MP9u1YTIthz57",japanese:"PLkj0Wb8QyEESIpck6vKKpGGUuJWZ2Ptv6","jazz-vibes":"PLkj0Wb8QyEERL7642elFDBwfSDTA6ihqP",lofi:"PLkj0Wb8QyEET3tz52neeBaW8gm2fEc-ns",tibetan:"PLkj0Wb8QyEERcdDpqfjbD1SMJAj6kJ7HT"}},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=(a(17),a(3)),i=a(6),l=a(7),p=a(9),k=a(8),u=a(10),h=a(1),m=a(2),E=(a(19),function(e){function t(){var e;Object(i.a)(this,t),e=Object(p.a)(this,Object(k.a)(t).call(this));var a=window.location.hash.replace("#","").split("/");return-1!==Object.keys(h).indexOf(a[0])&&-1!==Object.keys(m).indexOf(a[1])?e.state={speaker:a[0],genre:a[1]}:e.state={speaker:Object.keys(h)[0],genre:Object.keys(m)[0]},window.location.hash="".concat(e.state.speaker,"/").concat(e.state.genre),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){window.location.hash="".concat(this.state.speaker,"/").concat(this.state.genre)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},this.state.speaker&&this.state.genre?r.a.createElement("h1",null,"You're listening too",r.a.createElement("span",null,this.state.speaker.replace("-"," ")),"with ",this.state.genre.replace("-"," "),"..."):r.a.createElement("h1",null,"Loading..."),r.a.createElement("iframe",{title:"speaker",width:"400",height:"225",src:"https://www.youtube.com/embed/videoseries?list=".concat(h[this.state.speaker],"&autoplay=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}),r.a.createElement("iframe",{title:"music",width:"400",height:"225",src:"https://www.youtube.com/embed/videoseries?list=".concat(m[this.state.genre],"&autoplay=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}),r.a.createElement("div",{className:"speakers"},Object.keys(h).map(function(t){return r.a.createElement("div",{key:t,style:{backgroundImage:"url(assets/images/".concat(t,".png)"),opacity:e.state.speaker===t?"0.5":"1"},onClick:function(){e.setState(Object(s.a)({},e.state,{speaker:t}))}})})),r.a.createElement("div",{className:"music"},Object.keys(m).map(function(t){return r.a.createElement("div",{key:t,style:{opacity:e.state.genre===t?"0.5":"1"},onClick:function(){e.setState(Object(s.a)({},e.state,{genre:t}))}},t.replace("-"," "))})),r.a.createElement("span",{className:"footer"},"Yogi FM | Developed by ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/jadeallencook"},"@jadeallencook")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.3b99d09b.chunk.js.map