import { Component } from "@angular/core";
import { SearchService } from "../../services/search.service";

@Component({
    templateUrl:'./search.component.html',
    selector:'search-component'
})

export class SearchComponent {
    searchKey:string=""

    constructor(public searchService:SearchService) {
            
    }
    onSearch(){
        this.searchService.search(this.searchKey);
    }
}