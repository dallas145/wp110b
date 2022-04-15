
function transpose(ar){
    var br = []
    for(var j = 0;j<ar[0].length;j++){
        br[j]=[]
        for(var i = 0;i<ar.length;i++){
            br[j][i]=ar[i][j]
        }
    }
    return br
}
console.log(transpose([[1,2,3],[4,5,6]]))
console.log(transpose([[1,2,3],[3,2,1]]))