const form=document.querySelector('form')
let serialNumber=1

//form.addEventListener("submit",(e)=>{
       // e.preventDefault()
        const Name=document.getElementById('name').value;
        const mobile=document.getElementById('mobile').value;
        const Email=document.getElementById('email').value;
        const Password=document.getElementById('pass').value;
        //const form=document.getElementById('form');

        const Name_error=document.getElementById('name_error');

        form.addEventListener('submit',(e)=>
          {
            if(name.value === '' || name.value == null)
            {
              e.preventDefault();
              name_error.innerHTML="name is required";
            }
          })

        //const table=document.querySelector('div.right>table');
      

        //const newRow=document.createElement('tr')
        //newRow.innerHTML=`<td>${serialNumber++}</td>
        //                <td>${Name}</td>
         //               <td>${mobile}</td>
         //               <td>${Email}</td>
          //              <td>${Password}</td>`

       // table.appendChild(newRow)
