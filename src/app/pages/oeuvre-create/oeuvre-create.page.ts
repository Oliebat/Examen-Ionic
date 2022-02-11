import { Component, OnInit } from '@angular/core';
import { Oeuvre } from '../../models/oeuvre/oeuvre';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oeuvre-create',
  templateUrl: './oeuvre-create.page.html',
  styleUrls: ['./oeuvre-create.page.scss'],
})
export class OeuvreCreatePage implements OnInit {

  data: Oeuvre

  constructor(
    public apiService: ApiService,
    public router: Router
  ) {
    this.data = new Oeuvre();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['oeuvre-list']);
    });

  }

}
