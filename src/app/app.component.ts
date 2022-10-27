import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  loginbtn:boolean;
  logoutbtn:boolean;

  constructor(private dataService: ApiService){
    dataService.getloggedInname.sbscribe(name=..changeName(name));
    if(this.dataService.isLoggedIn()
    {
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
      this.loginbtn=true;
      this.logoutbtn=false
    }
    private changeName(name:boelean):void{
      this.logoutbtn = name;
      this.loginbtn = !name;
    }
    logout()
    {
      this.dataService.deleteToken();
      window.location.href = "/pagina_principal";
    }
    )
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
