const calculate = () =>{
    const userinput = document.getElementById('temp').value;
    let select = document.getElementById('select').value;
    // console.log(userinput);
    // console.log(select);
    let result;
    let showresult;
    if (select == 'cel'){
        result = Math.round((userinput * 1.8) + 32);
         showresult = `= ${result} °F`;
    }
    else{
        result =Math.round((userinput - 32)*(5/9));
         showresult = `${result} °C`;
         
    }

    console.log(showresult)
    document.getElementById('result').innerHTML = showresult;


    
    

}
// calculate(userinputm)


