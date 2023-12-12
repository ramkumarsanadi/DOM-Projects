    const value = document.getElementById('value')
    const btns = document.querySelectorAll('.btn')

    let count = 0

    btns.forEach(btn => {

        btn.addEventListener('click', (e)=> {
            const styles = e.currentTarget.classList

            if(styles.contains('Increase')){
                count += 1
  
            }else if(styles.contains('decrease')){
                count -=1
            
            }else {
                count = 0
                
            }
            if(count < 0){
                value.style.color = 'red'
            }
            else if(count > 0){
                value.style.color = 'green'
            }
            else {
                value.style.color = 'black'
            }
         
            value.textContent = count
        })
        
    });
   