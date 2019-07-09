webpackJsonp([12],{1843:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var i=t[r](l),s=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t=e.account,a=e.showSync,n=void 0===a||a,r=e.index;return e.state,e.props,p.default.createElement("tr",{key:t.address,className:t.index>26?"represent__table__lighter":"represent__table__content"},p.default.createElement("td",{className:"text-center",style:{paddingLeft:"14px"}},r+1),p.default.createElement("td",null,t.name?p.default.createElement("div",{className:"_context_right_click",style:{width:"200px"}},p.default.createElement(N.AddressLink,{address:t.address},t.name,p.default.createElement("br",null),p.default.createElement("span",{className:"small text-muted"},t.url))):p.default.createElement("div",{className:"_context_right_click"},p.default.createElement(N.AddressLink,{address:t.address},t.url))),n?p.default.createElement("td",{className:"text-center"},t.representerStatus?p.default.createElement("span",{key:"no",className:"text-success"},p.default.createElement("i",{className:"fas fa-circle"})):p.default.createElement("span",{key:"yes",className:"text-danger"},p.default.createElement("i",{className:"fa fa-times"}))):p.default.createElement("td",null,"\xa0"),p.default.createElement("td",{className:"text-center  d-none d-lg-table-cell"},t.latestBlockNumber?p.default.createElement(N.BlockNumberLink,{number:t.latestBlockNumber}):"-"),p.default.createElement("td",{className:"text-center d-none d-lg-table-cell"},t.producedTotal?p.default.createElement(b.FormattedNumber,{value:t.producedTotal}):"-"),p.default.createElement("td",{className:"text-center d-none d-lg-table-cell"},0!==t.missedTotal?p.default.createElement(b.FormattedNumber,{value:t.missedTotal}):"-"),p.default.createElement("td",{className:"text-center"},t.producedTotal>0?p.default.createElement(f.Fragment,null,Math.floor(100*t.producePercentage)/100,"%"):"-"),p.default.createElement("td",{className:"text-right"},p.default.createElement(f.Fragment,null,p.default.createElement(b.FormattedNumber,{value:t.votes||0}),p.default.createElement("br",null),"(",p.default.createElement(b.FormattedNumber,{minimumFractionDigits:2,maximumFractionDigits:2,value:t.votesPercentage}),"%",")")))}function o(e){return{witnesses:e.network.witnesses,statisticData:e.network.statisticData}}Object.defineProperty(t,"__esModule",{value:!0});var c=a(13),d=n(c),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),f=a(0),p=n(f),h=a(23),v=a(675),g=a(14),y=a(28),b=a(12),E=a(22),_=n(E),N=a(34),x=a(35),k=a(1972),P=a(40),w=a(16),O=function(e){function t(){var e=this;l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.getLatestBlock=r(d.default.mark(function t(){var n;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.Client.getLatestBlock();case 2:n=e.sent,a.setState({latestBlock:n.number});case 4:case"end":return e.stop()}},t,e)})),a.state={latestBlock:""},a}return s(t,e),m(t,[{key:"componentDidMount",value:function(){this.props.loadWitnesses(),this.props.loadStatisticData(),this.getLatestBlock()}},{key:"getPiechart",value:function(){var e=this.props.intl,t=this.props.statisticData,a=[];return t.length>0&&t.map(function(t,n){a.push({key:n+1,name:t.name?t.name:t.url,volumeValue:e.formatNumber(t.blockProduced),volumePercentage:e.formatNumber(100*t.percentage,{maximumFractionDigits:2,minimumFractionDigits:2})+"%"})}),a}},{key:"renderWitnesses",value:function(e){var t=this,a=this.state.latestBlock;if(0===e.length)return p.default.createElement("div",{className:"card"},p.default.createElement(y.TronLoader,null,(0,g.tu)("loading_representatives")));var n=(0,E.sortBy)((0,E.filter)(e,function(e){return e.producer}),function(e){return-1*e.votes}),r=(0,E.sortBy)((0,E.filter)(e,function(e){return!e.producer}),function(e){return-1*e.votes});return n.map(function(e){Number(a)-e.latestBlockNumber<1e3?e.representerStatus=!0:e.representerStatus=!1}),p.default.createElement("div",{className:"card border-0 represent__table w-1000"},p.default.createElement("table",{className:"table table-hover table-striped bg-white m-0 sr",style:{border:"1px solid #DFD7CA"}},p.default.createElement("thead",{className:"thead-dark"},p.default.createElement("tr",null,p.default.createElement("th",{className:"text-center"},"#"),p.default.createElement("th",null,(0,g.tu)("name")),p.default.createElement("th",{className:"text-center text-nowrap"},(0,g.tu)("status")),p.default.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},(0,g.tu)("last_block")),p.default.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},(0,g.tu)("blocks_produced")),p.default.createElement("th",{className:"text-center text-nowrap d-none d-lg-table-cell"},(0,g.tu)("blocks_missed")),p.default.createElement("th",{className:"text-center text-nowrap"},(0,g.tu)("productivity")),p.default.createElement("th",{className:"text-right text-nowrap",style:{borderRight:"1px solid rgb(223, 215, 202)"}},(0,g.tu)("votes")))),p.default.createElement("tbody",null,p.default.createElement("tr",{style:{height:"72px"}},p.default.createElement("td",{colSpan:"9",className:"font-weight-bold"},p.default.createElement("i",{className:"fa fa-trophy mr-2 ml-2","aria-hidden":"true",style:{color:"#666"}}),(0,g.tu)("Super Representatives"))),n.map(function(e,a){return p.default.createElement(u,{index:a,state:t.state,props:t.props,key:e.address,account:e})}),p.default.createElement("tr",{style:{height:"72px"}},p.default.createElement("td",{colSpan:"9",className:"font-weight-bold"},p.default.createElement("i",{className:"fa fa-user mr-2 ml-2","aria-hidden":"true",style:{color:"#666"}}),(0,g.tu)("Super Representative Candidates"))),r.map(function(e,a){return p.default.createElement(u,{index:a+27,state:t.state,props:t.props,key:e.address,account:e,showSync:!1})}))))}},{key:"render",value:function(){var e=this.props,t=e.intl,a=e.witnesses,n=this.getPiechart(),r=a.slice(0,x.SR_MAX_COUNT),l=(0,E.sortBy)(r,function(e){return-1*e.producePercentage})[0],i=(0,_.default)(r).filter(function(e){return e.producedTotal>0}).sortBy(function(e){return e.producePercentage}).value()[0];return p.default.createElement("main",{className:"container header-overlap pb-3 token_black"},p.default.createElement("div",{className:0===a.length||0===n.length?"card":""},0===a.length||0===n.length?p.default.createElement(y.TronLoader,null):p.default.createElement("div",{className:"row"},p.default.createElement("div",{className:"col-md-6 foundation_title represent_title"},p.default.createElement("div",{className:"mb-3"},p.default.createElement("div",{className:"card h-100 widget-icon"},p.default.createElement("div",{className:"card-body"},p.default.createElement("h3",{className:"text-primary"},p.default.createElement(b.FormattedNumber,{value:a.length})),(0,g.tu)("representativesAcandidates")))),p.default.createElement("div",{className:"mb-3"},p.default.createElement("div",{className:"card h-100"},p.default.createElement("div",{className:"card-body"},p.default.createElement("h3",null,p.default.createElement(b.FormattedNumber,{value:l.producePercentage}),"%"),p.default.createElement("div",{className:"represent_title_text"},p.default.createElement("span",null,(0,g.tu)("highest_productivity")," - "),p.default.createElement(N.AddressLink,{address:l.address},l.name||l.url))))),p.default.createElement("div",{className:"mb-3"},p.default.createElement("div",{className:"card h-100 widget-icon"},p.default.createElement("div",{className:"card-body"},p.default.createElement("h3",null,p.default.createElement(b.FormattedNumber,{maximumFractionDigits:2,minimunFractionDigits:2,value:i.producePercentage}),"%"),p.default.createElement("div",{className:"represent_title_text"},p.default.createElement("span",null,(0,g.tu)("lowest_productivity")," - "),p.default.createElement(N.AddressLink,{address:i.address},i.name||i.url)))))),p.default.createElement("div",{className:"col-md-6 mb-3"},p.default.createElement("div",{className:"card"},p.default.createElement("div",{style:{height:326,background:"#fff"},className:"pt-2 bg-line_blue"},p.default.createElement("div",{className:"card-header bg-tron-light color-grey-100 text-center pb-0",style:{border:0}},p.default.createElement("h6",{className:"m-0 lh-150",style:{fontSize:16}},p.default.createElement(P.Link,{to:"/blockchain/stats/pieChart"},(0,g.tu)("produce_distribution")))),p.default.createElement("div",{className:"card-body pt-0"},p.default.createElement("div",{style:{minWidth:255,height:200}},p.default.createElement(k.RepresentativesRingPieReact,{message:{id:"produce_distribution"},intl:t,data:n,style:{height:255},source:"representatives"})))))))),p.default.createElement("div",{className:" mt-3"},p.default.createElement("div",{className:" table-scroll"},this.renderWitnesses(a))))}}]),t}(f.Component),C={loadWitnesses:v.loadWitnesses,loadStatisticData:v.loadStatisticData};t.default=(0,h.connect)(o,C,null,{pure:!1})((0,b.injectIntl)(O))},1972:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SupplyTypesTRXPieChart=t.RepresentativesRingPieReact=t.RingPieReact=void 0;var u=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),c=n(o),d=(a(23),a(12),a(271)),m=n(d),f=a(223),p=n(f);a(669),a(274),a(224),a(1973),a(1974),a(1975),a(1976);var h=a(22),v=a(1977),g=n(v),y=a(670),b=n(y),E=a(671),_=n(E),N=a(672),x=n(N),k=a(673),P=n(k);(0,b.default)(g.default),(0,_.default)(g.default),(0,x.default)(g.default),(0,P.default)(g.default),t.RingPieReact=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return s(t,e),u(t,[{key:"initPie",value:function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a=this.props,n=a.intl,l=a.data,i=a.message,s=p.default.getInstanceByDom(document.getElementById(e));if(void 0===s&&(s=p.default.init(document.getElementById(e))),m.default.ringPieChart.title.text=n.formatMessage({id:i.id})+" Top 10",m.default.ringPieChart.series[0].data=[],m.default.ringPieChart.series[1].data=[],m.default.ringPieChart.legend.data=[],l&&l.length>0){var u=l.sort(t("name")),o=[],c=[],d=[];for(var f in u)o.push({name:u[f].pair,value:u[f].volume}),d.indexOf(u[f].name)<0&&(d.push(u[f].name),c.push({name:u[f].name,value:0,subCount:[]}));for(var h in c)for(var v in u)u[v].name===c[h].name&&(c[h].value=c[h].value+u[v].volume,c[h].subCount.push({name:u[v].pair,value:u[v].volume}));c.sort(t("value"));var g=c.slice(c.length-10,c.length),y=[];for(var b in g)y.push.apply(y,r(g[b].subCount));m.default.ringPieChart.series[0].data=[],m.default.ringPieChart.series[1].data=[],m.default.ringPieChart.legend.data=d,m.default.ringPieChart.series[0].data=g,m.default.ringPieChart.series[1].data=y}l&&0===l.length&&(m.default.ringPieChart.title.text="No data"),s.setOption(m.default.ringPieChart)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(c.default.Component),t.RepresentativesRingPieReact=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return s(t,e),u(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,n=t.data,r=t.message,l=t.source,i=(0,h.cloneDeep)(m.default.ringPieHighChart3D);if(n.length)for(var s in n)n[s].name.indexOf("http://")>-1&&(n[s].name=n[s].name.substring(7).split(".com")[0]);if(n&&0===n.length&&(i.title.text="No data"),n&&n.length>0){var u=[],o=[];for(var c in n)o.indexOf(n[c].name)<0&&(o.push(n[c].name),u.push([n[c].name,Number(n[c].volumeValue)]));var d=i.series[0].data;d.push.apply(d,u)}i.chart.options3d.enabled=!0,i.title.text=a.formatMessage({id:r.id}),i.exporting.filename=a.formatMessage({id:r.id}),i.tooltip.formatter=function(e){return a.formatDate(this.point.x),a.formatMessage({id:"witness"})+" : "+this.point.name+"<br/>"+a.formatMessage({id:"produced_blocks"})+" : "+this.point.y+"<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},"representatives"==l&&(i.plotOptions.pie.showInLegend=!1,i.plotOptions.pie.innerSize=60,i.plotOptions.pie.depth=40,i.exporting.enabled=!1,i.title.text=""),g.default.chart(document.getElementById(e),i)}},{key:"shouldComponentUpdate",value:function(e){return e.intl.locale!==this.props.intl.locale}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(c.default.Component),t.SupplyTypesTRXPieChart=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return s(t,e),u(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,n=t.data,r=t.message,l=(t.source,(0,h.cloneDeep)(m.default.supplyPieHighChart));if(n&&0===n.length&&(l.title.text="No data"),n&&n.length>0){var i=[];for(var s in n)i.indexOf(n[s].name)<0&&l.series[0].data.push({name:a.formatMessage({id:n[s].name}),y:parseInt(n[s].value),selected:n[s].selected,sliced:n[s].sliced})}l.title.text=a.formatMessage({id:r.id}),l.exporting.filename=a.formatMessage({id:r.id}),l.tooltip.formatter=function(){return a.formatMessage({id:this.point.name})+" ("+a.formatNumber(this.point.y)+" TRX)<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},g.default.chart(document.getElementById(e),l)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(c.default.Component)},1973:function(e,t,a){e.exports=a(118)(1491)},1974:function(e,t,a){e.exports=a(118)(1494)},1975:function(e,t,a){e.exports=a(118)(1495)},1976:function(e,t,a){e.exports=a(118)(1496)},1977:function(e,t,a){e.exports=a(118)(1581)}});