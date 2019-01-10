
var e746 =function(){
 function join(arr,sep = ","){
    var str=""
    for(i=0;i<arr.length){
      str+=arr[i]
      if(i!=arr.length-1) str+=sep
    }
  return str
 }
  return {
     join:join,
  }
}()
