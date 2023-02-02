import { LightningElement } from 'lwc';
import LOGIN_USER from '@salesforce/apex/LoginUser.login'

export default class DemoStoreLogin extends LightningElement {

       email;
       password;
       isError = false;
       errorMessage

       passwordHandler(e) {
              this.password = e.target.value;
       }

       userNameHandler(e) {
              this.email = e.target.value;
       }
       loginHandler() {
              console.log('Login Sucessful');
              console.log('Email is :', this.email);
              this.email = '';
              this.password = '';
              if(this.email != null && this.password != null){
                     LOGIN_USER ({
                            userName:this.email,
                            password:this.password
                     })
                     .then((result)=>{
                            console.log('Result is : ', result);
                            this.isError = false
                     })
                     .catch((error)=>{
                            console.log('Error is : ',error);
                            this.isError = true;
                            this.errorMessage = error.body.message;
                     })
              }
       }
}