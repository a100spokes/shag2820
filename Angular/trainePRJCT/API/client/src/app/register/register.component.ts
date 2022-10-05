import { ToastrService } from 'ngx-toastr';
import { AccountService } from './../_services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 
  @Output() cancelRegister = new EventEmitter;
  model: any = {};

  constructor(private accountService: AccountService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  register () {
    this.accountService.register(this.model).subscribe(responce=>{
      console.log(responce);
      this.cancel();
    }, err => {
      console.log(err);
      this.toastr.error(err.error);
    })
  }

  cancel () {
    this.cancelRegister.emit(false);
  }

}
