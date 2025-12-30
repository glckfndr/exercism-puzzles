class Matrix{
  constructor(grid){
    this.m = grid.map(el => el.split(""))
    this.imax = this.m.length
    this.jmax = this.m[0].length
    this.letterDic = this.getDic()
    
  }
  isInMatrix(i,j){
    return i < this.imax && j < this.jmax && i >= 0 && j >= 0;
  }
  findWord(word){    
    const starts = this.letterDic[word[0]]
    if(!starts) return null;
    for(let s = 0; s < starts.length; s++) {
      let start = starts[s];      
      let [i, j] = start;      
      let dirs = this.getDir(i, j, word[1] )
      
      if(dirs.length == 0) continue;
      
      for(let d = 0; d < dirs.length; d++){          
        let [di, dj] = dirs[d]; 
        let k = 2;
        let i1 = i + 2*di;
        let j1 = j + 2*dj        
        let w = word[0] + word[1];        
        
        while(this.isInMatrix(i1,j1) && k < word.length && word[k] == this.m[i1][j1]){
          w += this.m[i1][j1]          
          i1 += di;
          j1 += dj
          k++;
        }
        
        if(w == word) return [start, [i1-di,j1-dj]];
      }
    }
    return null;
  }
  getDir(i,j, c){
    const steps = [[1,0], [-1,0], [0,1], [0,-1], [1,1], [1,-1],[-1,-1],[-1,1]]
    const dirs = []
    let i1 = i;
    let j1 = i;
    steps.forEach(stp => {
      i1 = i + stp[0]; 
      j1 = j + stp[1];
      if(this.isInMatrix(i1, j1) && this.m[i1][j1] == c) {        
        dirs.push(stp)
      }
    })
    return dirs;
  }  
  
  getDic(){
    const letterDic = {}
    for(let i=0; i < this.imax; i++)
      for(let j=0; j < this.jmax; j++){
        let c = this.m[i][j]        
          if(!letterDic[c]) {
              letterDic[c] = [[i,j]]}
          else
              letterDic[c].push([i,j])
      }
    return letterDic;
  }
}
class WordSearch {
    constructor(grid) {
    this.m = new Matrix(grid)
  }
  
  find(words) {
    const found = {}
    for(let i=0; i < words.length; i++){
      found[words[i]] = undefined
      let pos = this.m.findWord(words[i])
      if(pos){
        found[words[i]] = {
            start: [pos[0][0] + 1, pos[0][1] + 1],
            end: [pos[1][0] + 1, pos[1][1] + 1]                        
          };
      }             
    }    
    return found
  }
}

export default WordSearch;
