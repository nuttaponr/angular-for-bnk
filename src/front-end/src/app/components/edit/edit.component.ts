import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Member } from 'src/app/models/member';
import { ActivatedRoute, Router } from '@angular/router';
import { BnkService } from 'src/app/services/bnk.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  adminForm: FormGroup;
  member: Member;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private bnkService: BnkService,
    private router: Router) { }

  ngOnInit() {
    this.bnkService.admin(this.activatedRoute.snapshot.params.id).subscribe((response) => {
      this.member = response;
      this.adminForm = this.fb.group({
        _id: [response._id, Validators.required],
        name: [response.name, Validators.required],
        imgUrl: [response.imgUrl, [Validators.required]],
        instagramId: [response.instagramId, Validators.required]
      });
    });
  }

  update() {
    if (this.adminForm.valid) {
      this.bnkService.update(this.adminForm.value).subscribe(() => {
        this.router.navigate(["/admin"]);
      });
    }
  }

  reset() {
    this.adminForm.reset(this.member);
  }

}
