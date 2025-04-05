let arr=[6,3,5,4,9,2]
let n = arr.length
    let s=0;
    let end=n-1;
    let curr_max =0
    let max=0
    while (s == end) {
        if(arr[s]>arr[end]){
            curr_max=arr[s];
        }
        else{
            curr_max=arr[end];
        }
        if (curr_max>max) {
            max = curr_max;
            curr_max=0;
            
        }
      
        s++;
        end--;

         
    }
    console.log(max)