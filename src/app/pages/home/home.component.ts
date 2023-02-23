import { Component, OnInit } from '@angular/core';
import { CatService } from 'src/app/services/cat.service';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fact: any;
  str: string = '';
  gif: string = '';
  string: string = '';

  constructor(private catSvc: CatService, private gSvc: GiphyService) { }

  ngOnInit(): void {
    this.getCatFact();
  }

  getCatFact() {
    this.catSvc.getCatFact().subscribe(
      res => {
        this.fact = res;
        this.str = this.fact.fact.split(' ', 3).join(" ");
        this.getGif(this.str);
      },
      err => console.log(err)
    )
  }

  getGif(string: string) {
    this.gSvc.getGif(string).subscribe(
      (res: any) => {
        this.gif = res.data[Math.floor(Math.random()*51)].images.original.url;
      },
      err => console.log(err)
    )
  }

}
