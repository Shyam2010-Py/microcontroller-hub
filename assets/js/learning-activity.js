(function(){
  'use strict';
  var PROJECT_KEY='microcontroller-hub';
  var ENDPOINT='https://eqplsewompiudxibowrz.supabase.co/functions/v1/record-learning-event-handoff';
  var params=new URLSearchParams(window.location.search);
  var code=params.get('lh') || sessionStorage.getItem('learninghub_handoff');
  if(params.get('lh')) sessionStorage.setItem('learninghub_handoff',params.get('lh'));
  if(!code)return;

  function record(eventType,milestoneKey,metadata){
    return fetch(ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({code:code,project_key:PROJECT_KEY,event_type:eventType,milestone_key:milestoneKey||null,page_path:window.location.pathname,metadata:metadata||{}}),keepalive:true}).catch(function(){});
  }

  function milestoneOnce(key,metadata){
    var storageKey='learninghub_mc_done_'+key;
    if(sessionStorage.getItem(storageKey))return;
    sessionStorage.setItem(storageKey,'1');
    record('milestone_complete',key,metadata);
  }

  window.LearningHubActivity={record:record,milestone:milestoneOnce};

  var path=window.location.pathname.toLowerCase();
  var page=path.split('/').pop() || 'index.html';
  var visitKey='learninghub_mc_visit_'+page;
  if(!sessionStorage.getItem(visitKey)){
    sessionStorage.setItem(visitKey,'1');
    record('project_open',null,{page:page,referrer:document.referrer||null});
  }

  document.addEventListener('click',function(event){
    var button=event.target.closest('.copy-btn');
    if(!button)return;

    if(page==='esp32.html'){
      milestoneOnce('esp32-basics',{action:'copy-first-program'});
      milestoneOnce('blink-led',{action:'copy-first-program'});
    }else if(page==='sensors.html'){
      milestoneOnce('sensors',{action:'copy-sensor-example'});
    }else if(page==='reference.html'){
      milestoneOnce('components',{action:'copy-reference-example'});
    }else if(page==='projects.html'){
      milestoneOnce('projects',{action:'copy-project-example'});
    }
  });
})();
