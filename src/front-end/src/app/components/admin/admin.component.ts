import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { BnkService } from 'src/app/services/bnk.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  members: Member[];
  constructor(private bnkService: BnkService) { }

  ngOnInit() {
    this.bnkService.list().subscribe((response) => {
      this.members = response;
      console.log(response);
    });
  }
}
