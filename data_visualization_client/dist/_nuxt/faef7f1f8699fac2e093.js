(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{170:function(t,e,r){"use strict";function n(t){return new Date(t).toLocaleString()}r.d(e,"a",function(){return n})},173:function(t,e,r){"use strict";r.r(e);r(50);var n=r(7),c=r(171),o=r(170),h={components:{highcharts:c.Chart},data:function(){return{chartOptions:{title:{text:"Latest Record"},series:[]},interval:null,lastestRecord:null,saving:!1}},created:function(){var t=this;this.fetchArrayData(),this.interval=setInterval(function(){t.fetchArrayData()},1e4)},beforeDestroy:function(){clearInterval(this.interval)},methods:{fetchArrayData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$get("/api/record/latest");case 2:this.lastestRecord=t.sent,this.chartOptions.series=[{data:this.lastestRecord.data_array,name:Object(o.a)(this.lastestRecord.timestamp)}];case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),save:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.lastestRecord.saved){t.next=2;break}return t.abrupt("return");case 2:return this.saving=!0,t.next=5,this.$axios.$post("/api/record/save",this.lastestRecord);case 5:this.lastestRecord.saved=!0,this.saving=!1;case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},l=r(24),component=Object(l.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",{staticClass:"chart-operations"},[e("button",{staticClass:"button is-primary",class:{"is-loading":this.saving},on:{click:this.save}},[this._v("\n      Save\n    ")])]),this._v(" "),e("highcharts",{attrs:{options:this.chartOptions,"update-args":[!0,!0,!0]}})],1)},[],!1,null,null,null);e.default=component.exports}}]);