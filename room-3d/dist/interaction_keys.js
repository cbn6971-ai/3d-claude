// Shared naming for multi-channel objects: the first state channel of a config keeps the
// config id (so existing single-channel code and saved progress stay valid); every other
// channel is addressed as `id#channel` (e.g. toilet#seat).
export function channelsOf(config){const list=[];for(const a of config.actions||[])if((a.kind==='toggle'||a.kind==='set')&&!list.includes(a.channel))list.push(a.channel);return list;}
export function channelKey(config,channel){const list=channelsOf(config);return !channel||channel===list[0]?config.id:config.id+'#'+channel;}
export function keyParts(key){const i=key.indexOf('#');return i<0?{id:key,channel:null}:{id:key.slice(0,i),channel:key.slice(i+1)};}
