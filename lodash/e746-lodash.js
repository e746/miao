var e746 = function(){
  function join(arr,sep = ","){
    var str=""
    for(let i=0;i<arr.length;i++){
      str+=arr[i]
      if(i!=arr.length-1) str+=sep
    }
    return str
  }

  return {
     join: join,
  } 
}()

var chenximan = function(){

    function chunk(ary, size = 1) {
  
    }
    function compact(ary) {
  
    }
  
    return {
      chunk: chunk,
      compact: compact,
    }
  }()