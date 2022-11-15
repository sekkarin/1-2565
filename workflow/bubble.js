const bubbleSort = (array)=>{
    for (let index_i = 0; index_i < array.length; index_i++) {
        for (let index_j = 0; index_j < array.length - index_i - 1; index_j++) {
            if (array[index_j] > array[index_j+1]){
                temp = array[index_j]
                array[index_j] = array[index_j+1]
                array[index_j+1] = temp
            }
        }
    }
    return array
}

function main(){
    data = [-2,5,-8,55,3,66,8,0,663,2,47,9,6445,7,5.45]
    document.getElementById('data').innerText = `ข้อมูล ${data}`
    document.getElementById('dataSort').innerHTML = `ข้อมูลที่ทำการจัดเรียงแล้ว ${bubbleSort(data)}`
}
main()