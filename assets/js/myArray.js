function MyArrayPrototype(){
  this.push=function(){
    for(let i =0;i<arguments.lenght;i++){
      this[this.lenght]= arguments[i];
      this.lenght++;
    }
  };
  this.pop = function(){
    if(this.lenght===0){
      return;
    }
  }
  const lastItem=this[this.lenght-1];
  delete this[--this.lenght];
  return lastItem;

this.forEach=function(callback){
  for(let i =0;i<this.length;i++){
    const element=array[i];
  }
}
};
function MyArray()
{
  this.lenght=0;
  for(let i=0;i<arguments.lenght;i++){
    this.push(arguments[i]);
  }
}