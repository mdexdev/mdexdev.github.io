(function(e){function t(t){for(var n,i,o=t[0],c=t[1],u=t[2],p=0,l=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&l.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(l.length)l.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},21:function(e,t){},3:function(e,t){},"34ee":function(e,t,a){function n(e,t){var n=a("8fbe"),s=new e.eth.Contract(n,t);return{contract:s,contractAddress:t,abi:n}}function s(e){var t=a("9017"),n="0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c",s=new e.eth.Contract(t,n);return{contract:s,contractAddress:n,abi:t}}function r(e){var t=a("9edf"),n="0x656584dD2FE7a24c85c4F3Abb707B3848C193889",s=new e.eth.Contract(t,n);return{contract:s,contractAddress:n,abi:t}}function i(e){var t=a("9edf"),n="0x7b4B0d9Cd226017eA3875D49196Ea63A6ea8C278",s=new e.eth.Contract(t,n);return{contract:s,contractAddress:n,abi:t}}e.exports={erc20Contract:n,mdxContract:s,destoryOracleContract:r,oracleContract:i}},4:function(e,t){},"4fc1":function(e,t,a){},5:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=(a("7faf"),a("2877")),o={},c=Object(i["a"])(o,s,r,!1,null,null,null),u=c.exports,d=a("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"claim-area"},[a("Card",{attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("Mdex 信息面板 "),a("a",{attrs:{href:"#"},on:{click:e.initData}},[e._v("刷新")])]),a("div",[a("div",{staticClass:"block_area"},[e._v(" 当前价格："),a("span",{staticClass:"txt-red"},[e._v(e._s(Number(e.mdex_panel.mdex_info.price).toFixed(4)))]),e._v(" 回购价格："),a("span",{staticClass:"txt-red"},[e._v(e._s(Number(e.boardroom.rewards.destory_price).toFixed(4)))])]),a("div",{staticClass:"block_area"},[a("span",[a("strong",[e._v("最新区块：")]),e._v(e._s(e.mdex_panel.heco_blocks.block_number)+" ")]),a("span",[a("strong",[e._v("Mdex RPC节点一：")]),e._v(e._s(e.mdex_panel.heco_blocks.master_block)+" (Master)")]),a("span",[a("strong",[e._v("Mdex RPC节点二：")]),e._v(e._s(e.mdex_panel.heco_blocks.slave_block)+" (Slave)")]),a("span",[a("strong",[e._v("Mdex RPC节点三：")]),e._v(e._s(e.mdex_panel.heco_blocks.fast_block)+" (Fast)")]),a("span",[a("strong",[e._v("Mdex RPC节点四：")]),e._v(e._s(e.mdex_panel.heco_blocks.priv_block)+" (Private Fast)")])]),[a("div",{staticClass:"gas_area"},[a("Row",[a("Col",{attrs:{span:"8"}},[e._v(" 快速 "),a("span",{staticClass:"txt_gas"},[e._v(e._s(e.mdex_panel.heco_gas.fast.gas)+"Gwei")]),e._v(" $ "),e.mdex_panel.heco_gas.fast.time<60?a("span",[e._v(e._s(e.mdex_panel.heco_gas.fast.money)+" / "+e._s(e.mdex_panel.heco_gas.fast.time)+" 秒")]):a("span",[e._v(e._s(e.mdex_panel.heco_gas.fast.money)+" / "+e._s(e.mdex_panel.heco_gas.fast.time/60)+" 分钟")])]),a("Col",{attrs:{span:"8"}},[e._v(" 标准 "),a("span",{staticClass:"txt_gas"},[e._v(e._s(e.mdex_panel.heco_gas.standard.gas)+"Gwei")]),e._v(" $ "),e.mdex_panel.heco_gas.standard.time<60?a("span",[e._v(e._s(e.mdex_panel.heco_gas.standard.money)+" / "+e._s(e.mdex_panel.heco_gas.standard.time)+" 秒")]):a("span",[e._v(e._s(e.mdex_panel.heco_gas.standard.money)+" / "+e._s(e.mdex_panel.heco_gas.standard.time/60)+" 分钟")])]),a("Col",{attrs:{span:"8"}},[e._v(" 慢 "),a("span",{staticClass:"txt_gas"},[e._v(e._s(e.mdex_panel.heco_gas.slow.gas)+"Gwei")]),e._v(" $ "),e.mdex_panel.heco_gas.slow.time<60?a("span",[e._v(e._s(e.mdex_panel.heco_gas.slow.money)+" / "+e._s(e.mdex_panel.heco_gas.slow.time)+" 秒")]):a("span",[e._v(e._s(e.mdex_panel.heco_gas.slow.money)+" / "+e._s(e.mdex_panel.heco_gas.slow.time/60)+" 分钟")])])],1)],1)],a("div",{staticClass:"last_area"},[a("span",[a("strong",[e._v("最新执行时间：")])]),a("span",[e._v("回购记录："+e._s(e.mdex_panel.last_repurch))]),a("span",[e._v("回购预言机："+e._s(e.mdex_panel.last_repurch_oracle))]),a("span",[e._v("价格预言机："+e._s(e.mdex_panel.last_oracle))])])],2),a("div",{staticClass:"list_area"},[a("Card",{attrs:{bordered:!1}},[a("List",{attrs:{border:"",size:"small"}},[a("ListItem",[a("div",{staticClass:"lab_txt"},[e._v("回购合约余额：")]),a("span",{staticClass:"txt-red"},[e._v("$ "+e._s(this.useNumberFilter(e.boardroom.repurch_usdt,-1)))])]),a("ListItem",[a("div",{staticClass:"lab_txt"},[e._v("最新流动性质押：")]),a("span",{staticClass:"txt-red"},[e._v("$ "+e._s(this.useNumberFilter(e.mdex_panel["charts"]["mdex_tvl"],-1)))])]),a("ListItem",[a("div",{staticClass:"lab_txt"},[e._v("交易额/手续费（24小时）：")]),a("span",{staticClass:"txt-red"},[e._v("$ "+e._s(this.useNumberFilter(e.mdex_panel["charts"]["volume_24hr"],-1)))]),a("span",{staticClass:"spilt-area"},[e._v("/")]),a("span",{staticClass:"txt-red"},[e._v("$ "+e._s(this.useNumberFilter(e.mdex_panel["charts"]["fee_24hr"],-1)))])]),a("ListItem",[a("div",{staticClass:"lab_txt"},[e._v("累计交易总额/手续费：")]),a("span",{staticClass:"txt-red"},[e._v("$ "+e._s(this.useNumberFilter(e.mdex_panel["charts"]["total_volume"],-1)))]),a("span",{staticClass:"spilt-area"},[e._v("/")]),a("span",{staticClass:"txt-red"},[e._v("$ "+e._s(this.useNumberFilter(e.mdex_panel["charts"]["total_fees"],-1)))])]),a("ListItem",[a("div",{staticClass:"lab_txt"},[e._v("总产出/回购MDX数量：")]),a("span",{staticClass:"txt-red"},[e._v(e._s(this.useNumberFilter(e.mdex_panel.mdex_info.supply,-1)))]),a("span",{staticClass:"spilt-area"},[e._v("/")]),a("span",{staticClass:"txt-red"},[e._v(e._s(this.useNumberFilter(e.boardroom.rewards.total_destroy,-1)))])]),a("ListItem",[a("div",{staticClass:"lab_txt"},[e._v("MDX市值及通缩率：")]),a("span",{staticClass:"txt-red"},[e._v("$ "+e._s(this.useNumberFilter(e.mdex_panel.mdex_info.market,-1)))]),a("span",{staticClass:"spilt-area"},[e._v("/")]),a("span",{staticClass:"txt-red"},[e._v(e._s(this.useNumberFilter(e.boardroom.rewards.total_destroy/e.mdex_panel.mdex_info.supply*100,2))+"%")])]),a("ListItem",[a("div",{staticClass:"lab_txt"},[e._v("总回购金额：")]),a("span",{staticClass:"txt-red"},[e._v("$ "+e._s(this.useNumberFilter(e.boardroom.rewards.total_buy,-1)))])]),a("ListItem",[a("div",{staticClass:"lab_txt"},[e._v("交易/流动性挖矿产出：")]),a("span",{staticClass:"txt-red"},[e._v(" 53.5 / 26.5 ")])])],1)],1)],1),a("div",{staticClass:"card_list"},[a("Tabs",{attrs:{type:"card"}},[a("TabPane",{attrs:{label:"回购地址"}},[a("div",{staticClass:"area-input"},[[a("Table",{attrs:{columns:e.repurch_cloumns,data:e.repurch_data}})]],2)]),a("TabPane",{attrs:{label:"预言机地址"}},[a("div",{staticClass:"area-input"},[[a("Table",{attrs:{columns:e.oracle_cloumns,data:e.oracle_data,"max-height":"450"}})]],2)]),a("TabPane",{attrs:{label:"回购记录"}},[a("div",{staticClass:"area-input"},[[a("Table",{attrs:{columns:e.repurch_list_cloumns,data:e.repurch_list,"max-height":"450"}})]],2)]),a("TabPane",{attrs:{label:"HECO 合约"}},[a("div",{staticClass:"area-input"},[[a("Table",{attrs:{columns:e.contract_cloumns,data:e.constracts.heco,"max-height":"450"}})]],2)]),a("TabPane",{attrs:{label:"BSC 合约"}},[a("div",{staticClass:"area-input"},[[a("Table",{attrs:{columns:e.contract_cloumns,data:e.constracts.bsc,"max-height":"450"}})]],2)]),a("TabPane",{attrs:{label:"OKEX 合约"}},[a("div",{staticClass:"area-input"})])],1)],1),a("Button",{attrs:{size:"large",type:"primary"},on:{click:e.queryBalances}},[e._v("查询余额")])],1)],1)])},l=[],m=(a("a9e3"),a("b85c")),y=(a("96cf"),a("1da1")),f=a("99e5"),b=new f("https://http-mainnet-node.huobichain.com"),_=a("5a0c");a("a471");var h=a("4208"),x=a("b893"),v=x.cutString,C=x.numberFilter,w=a("34ee"),g=w.erc20Contract,T={name:"Home",data:function(){var e=this;return{timer:"",timer2:"",mdex_panel:{heco_blocks:{block_number:0,master_block:0,slave_block:0,fast_block:0,priv_block:0},last_repurch:0,last_oracle:0,last_repurch_oracle:0,charts:{},mdex_info:{},heco_gas:{fast:{gas:0,money:"0",time:0},standard:{gas:0,money:"0",time:0},slow:{gas:0,money:"0",time:0}}},boardroom:{repurch_usdt:0,rewards:{}},repurch_cloumns:[{title:"类型",key:"addr_type",width:150},{title:"地址",key:"address"},{title:"余额（HT）",sortable:!0,key:"balance"},{title:"操作",key:"action",fixed:"right",width:120,render:function(t,a){return t("div",[t("Button",{props:{type:"text",size:"small"},on:{click:function(){e.showRepurch(a.index)}}},"查看")])}}],oracle_cloumns:[{title:"类型",key:"addr_type",width:150},{title:"地址",key:"address"},{title:"余额（HT）",sortable:!0,key:"balance"},{title:"操作",key:"action",fixed:"right",width:120,render:function(t,a){return t("div",[t("Button",{props:{type:"text",size:"small"},on:{click:function(){e.showOracle(a.index)}}},"查看")])}}],repurch_list_cloumns:[{title:"区块",sortable:!0,key:"block_number"},{title:"交易哈希",key:"hash",render:function(t,a){return t("div",[t("A",{on:{click:function(){e.repurchInfo(a.index)}}},v(a.row.hash))])}},{title:"From",key:"from",render:function(t,a){return t("div",[t("A",{on:{click:function(){e.repurchInfo(a.index,"from")}}},v(a.row.from))])}},{title:"To",key:"to",render:function(t,a){return t("div",[t("A",{on:{click:function(){e.repurchInfo(a.index,"to")}}},v(a.row.to))])}},{title:"回购时间",key:"repurch_time"},{title:"操作",key:"action",fixed:"right",width:120,render:function(t,a){return t("div",[t("Button",{props:{type:"text",size:"small"},on:{click:function(){e.repurchInfo(a.index)}}},"查看")])}}],contract_cloumns:[{title:"合约名称",key:"contract_name",width:200},{title:"地址",key:"address"},{title:"说明",key:"desc"},{title:"操作",key:"action",fixed:"right",width:120,render:function(t,a){return t("div",[t("Button",{props:{type:"text",size:"small"},on:{click:function(){e.contractInfo(a.index)}}},"查看")])}}],repurch_data:[],oracle_data:[],repurch_list:[],constracts:{heco:[{contract_name:"MDX Token",desc:"Mdx 代币地址",address:"0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c"},{contract_name:"Swap Mining",desc:"交易挖矿合约地址",address:"0x7373c42502874C88954bDd6D50b53061F018422e"},{contract_name:"Heco Pool",desc:"流动性挖矿合约地址",address:"0xFB03e11D93632D97a8981158A632Dd5986F5E909"},{contract_name:"Liquidity Oracle",desc:"交易对价格预言机",address:"0x7b4B0d9Cd226017eA3875D49196Ea63A6ea8C278"},{contract_name:"Destory Oracle",desc:"回购价格预言机",address:"0x656584dD2FE7a24c85c4F3Abb707B3848C193889"},{contract_name:"Repurchase MDX",desc:"回购销毁合约地址",address:"0x46900C0c18ace98bAAB81561B9906Dc93287910C"},{contract_name:"Destory MDX",desc:"销毁黑洞合约地址",address:"0xF9852C6588b70ad3c26daE47120f174527e03a25"},{contract_name:"Boardroom Airdrop",desc:"董事会HT奖励合约地址",address:"0x9197d717a4F45B672aCacaB4CC0C6e09222f8695"},{contract_name:"Boardroom Airdrop MDX",desc:"董事会MDX奖励合约地址",address:"0x19D054836192200c71EEc12Bc9f255b1faE8eE80"},{contract_name:"Mdex Factory",desc:"Factory",address:"0xb0b670fc1F7724119963018DB0BfA86aDb22d941"},{contract_name:"Mdex Router",desc:"Router",address:"0xED7d5F38C79115ca12fe6C0041abb22F0A06C300"},{contract_name:"Team Timelock",desc:"团队锁仓合约地址",address:"0xa3FD9758323C8A86292B55702F631c81283c9B79"},{contract_name:"Investors Timelock",desc:"投资人锁仓合约地址",address:"0xa6FE654241140469d1757A5bB8Ee844325059569"},{contract_name:"Brand Timelock",desc:"品牌方锁仓合约地址",address:"0x465D246233Ba20e7cfc95743B5d073BE8A7746B0"}],bsc:[{contract_name:"MDX Token",desc:"Mdx 代币地址",address:"0x3dF87F48F162cBB89dFBaDAaf2Ee736C3791C421"},{contract_name:"Mdex Factory",desc:"Factory",address:"0x92b6475Cb47B8EaB894BC4C3723D89cD0B31D6bb"},{contract_name:"Mdex Router",desc:"Router",address:"0x44f2E81840cfD7D43b2e2586f889425B13977c64"}]},accounts:{repurch:["0x7Fa4F6748D61d2EC782370F28Ab5Ad92Af9092f6","0x0B1ed35355d059b7065d12A081b63a1F12AcEEaF","0x4757302095300de5d67B476d57D61d78E091e2Ec","0x02E8929d607423C71968F07A70c27fe085959478","0x20B6FEF45fB9837A15464B6c81CC8974e64cE724","0x639cb11EB7807152DF9c213dBdC487045d13eA65","0x4F34090C9D68513D32141fE993Cd6399313A7713","0x8F306c0820F4375b3ae6F34f6CD156198371B8e3","0xad1837fDCe329EBe92669F8682401ceD393a9Eaa"],oracle:["0xa6420fe4f01A53669C7285A536464564fc157034","0x11734Fade213D400683F5fd5f0712867Bd4d13ae","0xCE82F3cC51bf9d70e5A461277Ffa5Af22f392e66","0x079e4a7A00599a4d6B8c0bD1D1Dd6CA852504E3E","0x8b239FEAdE24A72056A241A812ad103975d1BE9e","0xBd6793f2f08391BC66b4eF2164867771215ad860","0xd157caB1E8619e93a029ba58215A5E7454C15Aa6","0x666BEbC1c99863ae4635dEAcc87CE83a873A14Eb","0x2DAC835E52536A1cbA6195980faB9a5CA46aC0c5","0x2Ac6e053FE8742CB77C29a8731A31256b410c77F","0x513717EcBc3A652641bC2Bb118a51dD7ac979FBa","0x0F2b04e156dad9323cA883f4b6E54C33F17440DE","0x3e24b58765f6a7C3f31b77c6F9361873AA6a1810","0x4D580c6e887c9E3941a0583f398720Ef4B1Ab384","0x1B80eB372141e129fc269778E034F51f6aeA51da","0x374bfEd1051d19b664f2B77ffFdd662cf56d3DDb","0x5A6a7Dd5B8e4Cc166bA973e3f257992D57CCd562","0x8928FE09BcE9bDc04C8Dd0C49923d9Db901925dd","0x7321033AC5E4983B8949dC1A537B03f5DC403031","0x6018B754288c21A4E421f9761F6e160deD42fd79","0xB31fCfFA6e61D4d5610Cc3c25440F7d0Df407732","0x3440dA5608d3EBDF68F257Ef6E554B5F79cE7610","0xA526F3F8874176b5717b1a440E0A1f64ae1faEC1","0xe2DCa6BBF30E45c2503dB4008A239eFc098690D9","0x1DBeb76b08E5DE6cF87b0A837Be0e46223b65EA4","0x0a1Cc0462811B9eBF73c97602e0a4D970e750F95","0x22F831cB81ee98f53dEbDC303E081b134AC99e08","0xF7Fcb853C7894F6FF1DE227b739767C61d57Ca35","0x8B63c669785c9700CAFf99DDDB300AedA5EAA8D7","0x43a6Bbf7329139b5aAC01acc12F66FDE32beABcf","0xBBA43c8D9Ab4C9d6E932247CDe0B54c5Bb6ea5D0"]}}},mounted:function(){this.lastRecords(),this.initData(),this.timer=setInterval(this.initData,3e4)},beforeDestroy:function(){clearTimeout(this.timer)},methods:{initData:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.panelData(),e.queryRepurchList(),e.queryMdexCharts(),e.queryBoardroom(),e.queryGasPrice(),e.queryBalances();case 6:case"end":return t.stop()}}),t)})))()},queryGasPrice:function(){var e=this,t="https://gateway.mdex.cc/panel/gas";try{this.axios.get("".concat(t)).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=a.data,0==n.code&&(e.mdex_panel.heco_gas=n.result);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(a){console.log(a)}},lastRecords:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return _.extend(h),_.locale("zh-cn"),t.next=4,e.getTransInfo("0x46900C0c18ace98bAAB81561B9906Dc93287910C");case 4:return a=t.sent,e.mdex_panel.last_repurch=_(Number(a.timeStamp+"000")).fromNow(),t.next=8,e.getTransInfo("0x7b4B0d9Cd226017eA3875D49196Ea63A6ea8C278");case 8:return n=t.sent,e.mdex_panel.last_oracle=_(Number(n.timeStamp+"000")).fromNow(),t.next=12,e.getTransInfo("0x656584dD2FE7a24c85c4F3Abb707B3848C193889");case 12:s=t.sent,e.mdex_panel.last_repurch_oracle=_(Number(s.timeStamp+"000")).fromNow();case 14:case"end":return t.stop()}}),t)})))()},getTransInfo:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function a(){var n,s,r,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n="https://api.hecoinfo.com/api",s=[],a.prev=2,a.next=5,t.axios.get("".concat(n),{params:{module:"account",action:"txlist",address:e,startblock:0,endblock:99999999,page:1,offset:1,sort:"desc",apikey:"EQQZEVRPETY4IHGJ1DDSRH6Q29QHHAH9A2"}});case 5:r=a.sent,200==r.status&&1==r.data.status&&(i=r.data.result,s=i[0]),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](2),console.log(a.t0);case 12:return a.abrupt("return",s);case 13:case"end":return a.stop()}}),a,null,[[2,9]])})))()},panelData:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a="https://gateway.mdex.cc/panel/blocks";try{e.axios.get("".concat(a)).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=a.data,0==n.code&&(e.mdex_panel.heco_blocks=n.result);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(r){console.log(r)}return n=g(b,"0xa71edc38d189767582c38a3145b5873052c3e47a"),t.next=5,n.contract.methods.balanceOf("0x46900c0c18ace98baab81561b9906dc93287910c").call();case 5:s=t.sent,e.boardroom.repurch_usdt=Number(s/1e18);case 7:case"end":return t.stop()}}),t)})))()},queryBalances:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a,n,s,r,i,o,c,u,d,p,l,y,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.accounts.repurch,n=[],s=Object(m["a"])(a),t.prev=3,s.s();case 5:if((r=s.n()).done){t.next=13;break}return i=r.value,t.next=9,b.eth.getBalance(i);case 9:o=t.sent,n.push({address:i,balance:Number(o/1e18),addr_type:"回购地址"});case 11:t.next=5;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](3),s.e(t.t0);case 18:return t.prev=18,s.f(),t.finish(18);case 21:e.repurch_data=n,c=e.accounts.oracle,u=[],d=Object(m["a"])(c),t.prev=25,d.s();case 27:if((p=d.n()).done){t.next=36;break}return l=p.value,y="0xa6420fe4f01A53669C7285A536464564fc157034"==l?"回购预言机地址":"交易对预言机地址",t.next=32,b.eth.getBalance(l);case 32:f=t.sent,u.push({address:l,balance:Number(f/1e18),addr_type:y});case 34:t.next=27;break;case 36:t.next=41;break;case 38:t.prev=38,t.t1=t["catch"](25),d.e(t.t1);case 41:return t.prev=41,d.f(),t.finish(41);case 44:e.oracle_data=u,e.getTransInfo("0x46900C0c18ace98bAAB81561B9906Dc93287910C");case 46:case"end":return t.stop()}}),t,null,[[3,15,18,21],[25,38,41,44]])})))()},queryRepurchList:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a="https://api.hecoinfo.com/api";try{e.axios.get("".concat(a),{params:{module:"account",action:"txlist",address:"0x46900C0c18ace98bAAB81561B9906Dc93287910C",startblock:0,endblock:99999999,page:1,offset:10,sort:"desc"}}).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(a){var n,s,r,i,o,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=a.data,1==n.status){s=[],r=n["result"],i=Object(m["a"])(r);try{for(i.s();!(o=i.n()).done;)c=o.value,u=_(Number(c.timeStamp+"000")).format("YYYY-MM-DD HH:mm:ss"),s.push({block_number:c.blockNumber,hash:c.hash,from:c.from,to:c.to,repurch_time:u})}catch(d){i.e(d)}finally{i.f()}e.repurch_list=s}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(n){console.log(n)}case 2:case"end":return t.stop()}}),t)})))()},queryMdexCharts:function(){var e=this,t="https://gateway.mdex.cc/v2/mdex/charts?chainid=128";try{this.axios.get("".concat(t)).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=a.data,0==n.code&&(e.mdex_panel.charts=n.result,e.mdex_panel.mdex_info=n.result.mdex_info);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(a){console.log(a)}},queryBoardroom:function(){var e=this,t="https://api.mdex.com/mdex/rewards";try{this.axios.get("".concat(t)).then(function(){var t=Object(y["a"])(regeneratorRuntime.mark((function t(a){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=a.data,0==n.code&&(e.boardroom.rewards=n.result);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}catch(a){console.log(a)}},useNumberFilter:function(e,t){return C(e,t)},showRepurch:function(e){window.open("https://hecoinfo.com/address/"+this.repurch_data[e]["address"],"_blank").location},showOracle:function(e){window.open("https://hecoinfo.com/address/"+this.oracle_data[e]["address"],"_blank").location},repurchInfo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hash";"from"==t?window.open("https://hecoinfo.com/address/"+this.repurch_list[e]["from"],"_blank").location:"to"==t?window.open("https://hecoinfo.com/address/"+this.repurch_list[e]["to"],"_blank").location:window.open("https://hecoinfo.com/tx/"+this.repurch_list[e]["hash"],"_blank").location},contractInfo:function(e){window.open("https://hecoinfo.com/address/"+this.contract_list[e]["address"],"_blank").location}}},B=T,A=(a("c219"),Object(i["a"])(B,p,l,!1,null,null,null)),F=A.exports;n["default"].use(d["a"]);var D=[{path:"/",name:"Home",component:F,meta:{title:"Mdex 信息面板"}}],k=new d["a"]({mode:"history",base:"/",routes:D});k.beforeEach((function(e,t,a){e.meta.title&&(document.title=e.meta.title),a()}));var E=k,M=a("2f62");n["default"].use(M["a"]);var O=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}}),R=a("bc3a"),N=a.n(R),I=a("2106"),j=a.n(I),S=a("f825"),P=a.n(S);a("f8ce");n["default"].config.productionTip=!1,n["default"].use(P.a),n["default"].use(j.a,N.a),new n["default"]({router:E,store:O,render:function(e){return e(u)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},"7faf":function(e,t,a){"use strict";a("b8ff")},8:function(e,t){},"8fbe":function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},9:function(e,t){},9017:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newMinter","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},"9edf":function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"factory_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address","name":"tokenOut","type":"address"}],"name":"consult","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CYCLE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pairObservations","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price0Cumulative","type":"uint256"},{"internalType":"uint256","name":"price1Cumulative","type":"uint256"}],"stateMutability":"view","type":"function"}]')},b893:function(e,t,a){function n(e){var t=0,a=e.length,n=e.substring(0,6);return t=-1==e.lastIndexOf("（")?-1==e.lastIndexOf("(")?a-5:e.lastIndexOf("("):e.lastIndexOf("（"),a>13&&(e=n+" ... "+e.substring(t,a)),e}function s(e){var t=new Date(1e3*e),a=t.getFullYear()+"-",n=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",s=t.getDate()+" ",r=t.getHours()+":",i=t.getMinutes()+":",o=t.getSeconds();return a+n+s+r+i+o}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if("NaN"==parseFloat(e).toString())return"0.00";var a=e.toString().split("."),n=a[0],s=a[1],r=n.toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,");return null!=s?0==t?r+"."+s:-1==t?r:r+"."+s.substr(0,t):r}a("baa5"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),e.exports={cutString:n,timestampToTime:s,numberFilter:r}},b8ff:function(e,t,a){},c219:function(e,t,a){"use strict";a("4fc1")}});
//# sourceMappingURL=app.a5798654.js.map