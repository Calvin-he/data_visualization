(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{170:function(t,e,r){"use strict";function n(t){return new Date(t).toLocaleString()}r.d(e,"a",function(){return n})},174:function(t,e,r){"use strict";r.r(e);r(50);var n=r(7),c=r(171),o=r(170),h={components:{highcharts:c.Chart},data:function(){return{chartOptions:{title:{text:"Saved Records"},series:[]},refreshing:!1}},created:function(){this.loadRecords()},methods:{loadRecords:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.refreshing=!0,t.next=3,this.$axios.$get("/api/record/saved");case 3:this.records=t.sent,this.chartOptions.series=this.records.map(function(t){return{data:t.data_array,name:Object(o.a)(t.timestamp)}}),this.refreshing=!1;case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},d=r(24),component=Object(d.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",{staticClass:"chart-operations"},[e("button",{staticClass:"button is-primary",class:{"is-loading":this.refreshing},on:{click:this.loadRecords}},[this._v("\n      Refresh\n    ")])]),this._v(" "),e("highcharts",{attrs:{options:this.chartOptions}})],1)},[],!1,null,null,null);e.default=component.exports}}]);