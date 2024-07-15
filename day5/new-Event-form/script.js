        const Name=document.getElementById('name');
        const mobile=document.getElementById('mobile');
        const Email=document.getElementById('email');
        const Password=document.getElementById('password');
        const form=document.getElementById('form');

        const Name_error=document.getElementById('name_error');
        //const email_error=document.getElementById('email_error');

        form.addEventListener('submit',(e)=>
          {
            //var email_check = /^([A-Za-Z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
            if(name.value === '' || name.value == null)
            {
              e.preventDefault();
              name_error.innerHTML="name is required";
            }
            //if(!email_check.value.match(email_check))
            {
                //e.preventDefault();
                //name_error.innerHTML="valid email is required";
            }
          })