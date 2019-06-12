console.clear();

const calculadora = (function(self){
  let _num = 0;
  self.setValue = (num)=>_num = num;
  self.getResult = _=>_num;
  return  self;
})(calculadora || {});

console.log('module -> ',calculadora);

const calcSum = (function(self){
  self.suma = (num)=>self.setValue(self.getResult() + num);
  return self;
})(calculadora);



calculadora.setValue(5);
console.log('module sum inicial -> ',calculadora.getResult());

calculadora.suma(5);
console.log('module primera suma +5 -> ',calculadora.getResult());

const calcUndo = (function(self){

  self.setValue = ((num) => {
    

    return self
  })();
  self.undo = ()=>{};
  
  return self;
})(calculadora);


calculadora.suma(5);
console.log('sumo +5 -> ', calculadora.getResult())

calculadora.suma(10);
console.log('sumo +10 -> ', calculadora.getResult())

calculadora.undo();
console.log('module reundo -> ',calculadora.getResult());


console.log('module finall -> ',calculadora.getResult());


