import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import { Observable } from 'rxjs/Rx';
import { todo } from './../../models/todo.model';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
    public todoSub: Observable<todo>;
    constructor( private router: Router, private todoService:TodoService ) {

    }

    ngOnInit() {

      this.todoSub = this.todoService.list();

    }

    editRecord(id) {
        console.log('Edit record ID>>>', id);
        this.router.navigate(['/edit', id]);
    }

    deleteRecord(id) {
      this.todoService.remove(id);
    }

    public trackByToodFun(index, item) {
      return item.id;
    }
}
