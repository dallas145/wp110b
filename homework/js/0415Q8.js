function add(ar1,ar2){
    var br = []
    for(var j=0;j<ar1.length;j++){
        br[j]=[]
        for(var i =0;i<ar1[0].length;i++){
            br[j][i]=ar1[j][i]+ar2[j][i]
        }
    }
    return br
}
console.log(add([[1,2],[3,4]],[[1,1],[1,1]]))
console.log(add([[1,2,3],[4,5,6],[7,8,9]],[[9,8,7],[6,5,4],[3,2,1]]))