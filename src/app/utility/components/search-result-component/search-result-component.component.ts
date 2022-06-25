import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'search-result-component',
  templateUrl: './search-result-component.component.html',
  styleUrls: ['./search-result-component.component.css']
})
export class SearchResultComponentComponent implements OnInit {
  searchServiceRef:SearchService;
  constructor(searchService:SearchService) {

    this.searchServiceRef=searchService;
       }

  ngOnInit(): void {
  }

}
