function numberPattern(N){
    //write your code here
    let bag = ""
    for(let i=1;i<=N;i++){
      bag = bag + i;
      console.log(bag)
    }
    
    for(let i=N-1;i>=1;i--){
      let temp = ""
      for(let j=1;j<=i;j++){
        temp = temp + j
      
      }
       console.log(temp)
    }
    
  }
  numberPattern(5)