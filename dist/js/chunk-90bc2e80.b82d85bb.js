(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90bc2e80"],{"77ac":function(e,t,a){},"7a54":function(e,t,a){"use strict";var s=a("77ac"),i=a.n(s);i.a},"87e6":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("User")},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-col",{attrs:{cols:"12"}},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.userList},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[e._v("User List")]),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"650px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("View User Details")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[""!=e.singleUserItem.fullName.trim()?a("v-text-field",{attrs:{label:"Full Name",readonly:""},model:{value:e.singleUserItem.fullName,callback:function(t){e.$set(e.singleUserItem,"fullName",t)},expression:"singleUserItem.fullName"}}):a("v-text-field",{attrs:{value:"NA",label:"Full Name",readonly:""}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[""!=e.singleUserItem.email?a("v-text-field",{attrs:{label:"Email Id",readonly:""},model:{value:e.singleUserItem.email,callback:function(t){e.$set(e.singleUserItem,"email",t)},expression:"singleUserItem.email"}}):a("v-text-field",{attrs:{value:"NA",label:"Email Id",readonly:""}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[e.singleUserItem.registerCompleted?a("v-text-field",{attrs:{value:"Yes",label:"Registered?",readonly:""}}):a("v-text-field",{attrs:{value:"No",label:"Registered?",readonly:""}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[""!=e.singleUserItem.registrationDate?a("v-text-field",{attrs:{label:"Registered Date",readonly:""},model:{value:e.singleUserItem.registrationDate,callback:function(t){e.$set(e.singleUserItem,"registrationDate",t)},expression:"singleUserItem.registrationDate"}}):e._e()],1),e.singleUserItem.child_data.length>0?a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-simple-table",{attrs:{height:"100px"},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Child Birthday")]),a("th",{staticClass:"text-left"},[e._v("Child Gender")])])]),a("tbody",e._l(e.singleUserItem.child_data,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.child_dob))]),a("td",[e._v(e._s(t.child_gender))])])})),0)]},proxy:!0}],null,!1,1388117953)})],1):e._e(),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[""!=e.singleUserItem.parent_age_range?a("v-text-field",{attrs:{label:"Parent Age Range",readonly:""},model:{value:e.singleUserItem.parent_age_range,callback:function(t){e.$set(e.singleUserItem,"parent_age_range",t)},expression:"singleUserItem.parent_age_range"}}):e._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[""!=e.singleUserItem.parent_gender?a("v-text-field",{attrs:{label:"Parent Gender",readonly:""},model:{value:e.singleUserItem.parent_gender,callback:function(t){e.$set(e.singleUserItem,"parent_gender",t)},expression:"singleUserItem.parent_gender"}}):e._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[""!=e.singleUserItem.zip_code?a("v-text-field",{attrs:{label:"Zip Code",readonly:""},model:{value:e.singleUserItem.zip_code,callback:function(t){e.$set(e.singleUserItem,"zip_code",t)},expression:"singleUserItem.zip_code"}}):e._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[""!=e.singleUserItem.occupation?a("v-text-field",{attrs:{label:"Occupation",readonly:""},model:{value:e.singleUserItem.occupation,callback:function(t){e.$set(e.singleUserItem,"occupation",t)},expression:"singleUserItem.occupation"}}):e._e()],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},["/"!=e.singleUserItem.ethnicity.trim()?a("v-text-field",{attrs:{label:"Ethnicity",readonly:""},model:{value:e.singleUserItem.ethnicity,callback:function(t){e.$set(e.singleUserItem,"ethnicity",t)},expression:"singleUserItem.ethnicity"}}):e._e()],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"650px"},model:{value:e.dialog2,callback:function(t){e.dialog2=t},expression:"dialog2"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("View User's Feedback")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-card-title",[e._v("App Feedback")]),e.appFeedback.length>0?[a("v-simple-table",{attrs:{height:"200px"},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("Feedback")]),a("th",{staticClass:"text-left"},[e._v("Created On")])])]),a("tbody",e._l(e.appFeedback,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.feedbackMsg))]),a("td",[e._v(e._s(t.createdOn))])])})),0)]},proxy:!0}],null,!1,2237032949)})]:[a("h3",{staticClass:"notFound"},[e._v("Sorry! No App Feedback Found")])]],2),a("v-col",{attrs:{cols:"12",sm:"6",md:"12"}},[a("v-card-title",[e._v("Chat Feedback")]),e.chatFeedback.length>0?[a("v-simple-table",{attrs:{height:"200px"},scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[e._v("User's Reaction")]),a("th",{staticClass:"text-left"},[e._v("Feedback")]),a("th",{staticClass:"text-left"},[e._v("Chapter")]),a("th",{staticClass:"text-left"},[e._v("Created On")])])]),a("tbody",e._l(e.chatFeedback,(function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.smilySign))]),a("td",[e._v(e._s(t.feedbackMsg))]),a("td",[e._v(e._s(t.chapterType))]),a("td",[e._v(e._s(t.createdOn))])])})),0)]},proxy:!0}],null,!1,1198353903)})]:[a("h3",{staticClass:"notFound"},[e._v("Sorry! No Chat Feedback Found")])]],2)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"850px"},model:{value:e.dialog3,callback:function(t){e.dialog3=t},expression:"dialog3"}},[a("v-card",[a("v-container",[a("v-row",[e.filteredMsgList.length>0?e._l(e.filteredMsgList,(function(t,s){return a("v-col",{key:s,attrs:{cols:"12",sm:"12",md:"12"}},[a("v-card",{attrs:{color:"newTeddiBotDev"==t.from.name?"#385F73":"#7D6608",dark:""}},[a("v-card-title",[a("span",{class:"newTeddiBotDev"==t.from.name?"headline":"title font-weight-light"},[e._v(e._s("newTeddiBotDev"==t.from.name?"Teddi":"You"))])]),a("v-card-text",{attrs:{"font-weight-bold":""},domProps:{innerHTML:e._s(t.text)}})],1)],1)})):[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-card-title",{staticClass:"notFound"},[e._v("Sorry! No Messages found.")])],1)]],2)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")])],1)],1)],1)],1)]},proxy:!0},{key:"item.chatActions",fn:function(t){var s=t.item;return[a("div",[a("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({attrs:{color:"primary",dark:""}},"v-btn",i,!1),s),[e._v(" Chapters ")])]}}],null,!0)},[a("v-list",e._l(e.chapterList,(function(t,i){return a("v-list-item",{key:i,on:{click:function(a){return e.showUserChat(s.conversationId,t.keyName)}}},[a("v-list-item-title",[e._v(e._s(t.originalName))])],1)})),1)],1)],1)]}},{key:"item.actions",fn:function(t){var s=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.viewItem(s)}}},[e._v(" mdi-eye ")]),a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.showUserFeedback(s)}}},[e._v(" mdi-view-dashboard ")])]}},{key:"no-data",fn:function(){},proxy:!0}],null,!0)})],1)},l=[],n=(a("4160"),a("caad"),a("c975"),a("d81d"),a("b0c0"),a("ac1f"),a("2532"),a("5319"),a("1276"),a("159b"),a("5530")),o=a("2f62"),c=a("c1df"),d=a.n(c),m={data:function(){return{dialog:!1,dialog2:!1,dialog3:!1,headers:[{text:"Name",align:"start",sortable:!1,value:"fullName"},{text:"Email",value:"email"},{text:"Register?",value:"isRegistered"},{text:"Chat History",value:"chatActions",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],desserts:[],userList:[],singleUserItem:{fullName:"",email:"",registerCompleted:null,registrationDate:"",child_data:[],parent_age_range:"",parent_gender:"",zip_code:"",occupation:"",ethnicity:""},appFeedback:[],chatFeedback:[],chapterList:[],chatHistory:[],filteredMsgList:[]}},computed:{},watch:{dialog:function(e){e||this.close()},dialog2:function(e){e||this.close()},dialog3:function(e){e||this.close()}},created:function(){this.initialize()},methods:Object(n["a"])(Object(n["a"])({},Object(o["b"])(["GetAllUserList","GivenFeedbackUserList","SingleUserFeedback","GetUserChatHistory"])),{},{initialize:function(){this.chapterList=[{keyName:"introduction",originalName:"Introduction"},{keyName:"breastFeeding",originalName:"Chapter 1"},{keyName:"givingHealth",originalName:"Chapter 2"},{keyName:"chapter3",originalName:"Chapter 3"},{keyName:"chapter4",originalName:"Chapter 4"},{keyName:"chapter5",originalName:"Chapter 5"},{keyName:"chapter6",originalName:"Chapter 6"},{keyName:"chapter7",originalName:"Chapter 7"},{keyName:"chapter8",originalName:"Chapter 8"},{keyName:"chapter9",originalName:"Chapter 9"},{keyName:"chapter10",originalName:"Chapter 10"},{keyName:"chapter11",originalName:"Chapter 11"},{keyName:"chapter12",originalName:"Chapter 12"}]},viewItem:function(e){this.singleUserItem.fullName=e.firstName+" "+e.lastName,this.singleUserItem.email=e.email,this.singleUserItem.registerCompleted=e.registerCompleted,this.singleUserItem.child_data=e.child_data,this.singleUserItem.parent_age_range=e.parent_age_range,this.singleUserItem.parent_gender=e.parent_gender,this.singleUserItem.zip_code=e.zip_code,this.singleUserItem.occupation=e.occupation,this.singleUserItem.ethnicity=e.ethnicityMaster+"/"+e.ethnicityChild,this.singleUserItem.registrationDate=e.registrationDate?e.registrationDate:"",this.dialog=!0},showUserFeedback:function(e){var t=this;this.SingleUserFeedback(e.conversationId).then((function(e){t.appFeedback=e.data.appFeedBack.map((function(e){return e.createdOn=d()(String(e.createdOn)).format("DD/MM/YYYY hh:mm A"),e})),t.chatFeedback=e.data.chatFeedBack.map((function(e){return e.smilySign="happy"==e.isSmiled?"😃":"😔",e.createdOn=d()(String(e.createdOn)).format("DD/MM/YYYY hh:mm A"),t.chapterList.forEach((function(t){t.keyName==e.chapterType&&(e.chapterType=t.originalName)})),e})),t.dialog2=!0})).catch((function(e){console.log(e)}))},showUserChat:function(e,t){var a=this,s={};s.conversationId=e,s.chapterType=t,s.offset=0,s.limit=5e3,this.GetUserChatHistory(s).then((function(e){if(a.chatHistory=e.data.chatData,a.chatHistory.length>0){a.chatHistory.sort((function(e,t){return e._ts-t._ts}));for(var t=0;t<a.chatHistory.length;t++)if("newTeddiBotDev"==a.chatHistory[t].from.name){for(var s=a.chatHistory[t].text.split("#&@#"),i=0;i<s.length;i++)if(-1==s[i].indexOf("enterBtn")&&-1==s[i].indexOf("predictiveText")&&-1==s[i].indexOf("selectImage")&&""!==s[i]){s[i]=s[i].replaceAll(/\n\n/g,"<br />");var r=1;while(s[i].includes("**"))s[i]=r%2!==0?s[i].replace("**","<strong>"):s[i].replace("**","</strong>"),r++;a.filteredMsgList.push({timestamp:a.chatHistory[t].timestamp,from:a.chatHistory[t].from,conversation:a.chatHistory[t].conversation,text:s[i],chapterType:a.chatHistory[t].chapterType})}}else a.filteredMsgList.push({timestamp:a.chatHistory[t].timestamp,from:a.chatHistory[t].from,conversation:a.chatHistory[t].conversation,text:a.chatHistory[t].text,chapterType:a.chatHistory[t].chapterType})}else a.filteredMsgList=[];a.dialog3=!0})).catch((function(e){console.log(e)}))},close:function(){this.dialog=!1,this.dialog2=!1,this.dialog3=!1}}),beforeMount:function(){var e=this;this.GetAllUserList().then((function(t){e.userList=t.data.userData,e.userList.map((function(e){return e.fullName=e.firstName+" "+e.lastName,e.isRegistered=e.registerCompleted?"Yes":"No",e}))})).catch((function(e){alert(e.response.data.msg)}))}},h=m,g=(a("7a54"),a("2877")),u=a("6544"),p=a.n(u),v=a("8336"),f=a("b0af"),_=a("99d9"),y=a("62ad"),b=a("a523"),k=a("8fea"),x=a("169a"),U=a("132d"),I=a("8860"),C=a("da13"),N=a("5d23"),F=a("e449"),w=a("0fd9"),T=a("1f4f"),D=a("2fa4"),L=a("8654"),V=a("71d9"),H=a("2a7f"),M=Object(g["a"])(h,r,l,!1,null,null,null),O=M.exports;p()(M,{VBtn:v["a"],VCard:f["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VCol:y["a"],VContainer:b["a"],VDataTable:k["a"],VDialog:x["a"],VIcon:U["a"],VList:I["a"],VListItem:C["a"],VListItemTitle:N["c"],VMenu:F["a"],VRow:w["a"],VSimpleTable:T["a"],VSpacer:D["a"],VTextField:L["a"],VToolbar:V["a"],VToolbarTitle:H["a"]});var S={name:"RootUserList",components:{User:O}},A=S,Y=Object(g["a"])(A,s,i,!1,null,null,null);t["default"]=Y.exports}}]);
//# sourceMappingURL=chunk-90bc2e80.b82d85bb.js.map