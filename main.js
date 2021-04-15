// Remember your promises
// Go back to the lesson if you feel lost
// Read the docs well, they usually have pretty well documented examples
// Consider making your fetch work with a button



//to remove event 
let count=0
//do hidden after show all 20 movie
let but=document.querySelector('#random')

const Film=()=>{
    axios
    .get(`https://ghibliapi.herokuapp.com/films`)//array of object so need to itrative each index and print each filmname and each description 
    .then((response) => {
      console.log('RESPONSE: ', response);
      console.log('DATA: ', response.data);
      //to know the length of array
      console.log(response.data.length)
      //to print all films
      
      let filmTitle=document.querySelector('.container')

      if(count==response.data.length){
          removeEventListener('click',Film)
      }
      else {
        for(let i=0;i<=response.data.length;i++){
            //to drag it in home page after user click into a but
             console.log(response.data[i].title)
             console.log(response.data[i].description)
            //title
            let title=document.createElement('h3')
            title.innerText=response.data[i].title
            filmTitle.append(title)
            title.style.color='blueviolet'
    
            //description
            let desc=document.createElement('p')
            desc.innerText=response.data[i].description
     
            filmTitle.append(desc)
            count++;
            but.hidden =true
          }
      }
    })
    .catch((err) => {
      console.log('ERR: ', err);
    });

}
but.addEventListener('click',Film)