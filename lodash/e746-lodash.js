var e746 = function(){
  function join(arr,sep = ","){
    var str=""
    for(let i=0;i<arr.length;i++){
      str+=arr[i]
      if(i!=arr.length-1) str+=sep
    }
    return str
  }
  
  function fill(array,value,start=0,end=array.length){
    for(let i=start;i<end;i++){
      array[i]=value;
    }
    return array
  }
 
 function flattenDeep(array){
    function deep(ary,deepAry){
      for(let i=0;i<deepAry.length;i++){
        if(Array.isArray(deepAry[i])) deep(ary,deepAry[i])
            else ary.push(deepAry[i])
          }
    }
  var arr=[];
  deep(arr,array);
   return arr
 }
 function flattenDepth(array,depth=1){
    function deep(ary,deepAry,depth){
      if(depth<0) ary.push(deepAry)
      else { for(let i=0;i<deepAry.length;i++){
             if(Array.isArray(deepAry[i])) deep(ary,deepAry[i],depth-1)
                 else ary.push(deepAry[i])
             }
      }
    }
  var arr=[];
  deep(arr,array,depth);
   return arr
 }

function mapValues(obj,mapper){
  var result={}
  for(var name in obj){
    result[name]=mapper(obj(name))
  }
  return result
}

function fromPairs(pairs){
  var obj={};
  for(i=0;i<pairs.length;i++){
    obj[pairs[i][0]]=pairs[i][1]
    
  }
  return obj;
}
  return {
     join: join,
     fill: fill,
     flattenDeep: flattenDeep,
     flattenDepth: flattenDepth,
     mapValues:mapValues,
     fromPairs,fromPairs,
  } 
}()

