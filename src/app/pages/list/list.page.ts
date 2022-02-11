import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  oeuvresData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.oeuvresData = [];
  }

  ngOnInit() {
    // this.getAllOeuvres();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllOeuvres();
  }

  getAllOeuvres() {
    //Get saved list of oeuvres
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.oeuvresData = response;
    })
  }


  delete(item) {
    //Delete item in Oeuvre data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllOeuvres();
    });
  }



}
