import { Component, OnInit } from '@angular/core';

import { RandomUsersService } from '@core/services/randomUsers/random-users.service';

// https://github.com/date-fns/date-fns
import { addDays, format} from 'date-fns';

// https://www.npmjs.com/package/file-saver
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'store';
  items = ['Orlando', 'Franco', 'Cespedes'];
  power = 10;
  date = '';

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  constructor(
    private randomUsersService: RandomUsersService
  ) { }

  ngOnInit(): void {
  }

  getRandomUsers() {
    this.randomUsersService.getRandomUsers()
    .subscribe(users => {
      console.log(users);
    },
    error => {
      console.error(error);
    }
    );
  }

  getFileTxt() {
    this.randomUsersService.getFileTxt()
      .subscribe(file => {
        console.log(file);
        const blob = new Blob([file], {type: 'text/plain;charset=utf-8'});
        FileSaver.saveAs(blob, 'archivo.txt');
      });
  }

  getFilePdf() {
    this.randomUsersService.getFilePdf()
      .subscribe(file => {
        FileSaver.saveAs(file, 'archivo.pdf');
      });
  }

  dateAdd() {
    const dateNewDate = addDays(new Date(), 20);
    this.date = format(dateNewDate, 'yyyy/MMMM/dd');
  }
}
