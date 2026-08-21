(function(){
  'use strict';
  var PROJECT_KEY='microcontroller-hub';
  var ENDPOINT='https://eqplsewompiudxibowrz.supabase.co/functions/v1/record-learning-event-handoff';
  var params=new URLSearchParams(window.location.search);
  var code=params.get('lh');
  if(!code)return;
  function record(eventType,milestoneKey,metadata){
    return fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:code,project_key:PROJECT_KEY,event_type:eventType,milestone_key:milestoneKey||null,page_path:window.location.pathname,metadata:metadata||{}}),keepalive:true}).catch(function(){});
  }
  window.LearningHubActivity={record:record,milestone:function(key,metadata){return record('milestone_complete',key,metadata);}};
  record('project_open',null,{referrer:document.referrer||null});
  window.addEventListener('pagehide',function(){
    try{navigator.sendBeacon(ENDPOINT,new Blob([JSON.stringify({code:code,project_key:PROJECT_KEY,event_type:'project_open',page_path:window.location.pathname})],{type:'application/json'}));}catch(_){}
  });
})();
