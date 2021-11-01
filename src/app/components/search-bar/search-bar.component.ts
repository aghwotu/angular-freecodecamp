import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  // inject a router into the search page for routing to other pages
  constructor(private router: Router) {}

  ngOnInit(): void {}

  // route to the 'search' page onSubmit()
  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.search]);
  }
}
