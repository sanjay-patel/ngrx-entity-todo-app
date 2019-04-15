import { Component, OnInit } from '@angular/core';
import { todo } from './../../models/todo.model';
import { Router } from '@angular/router';
import { TodoService } from './../../services/todo.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

    public todo = <todo>{};
    constructor( private router: Router, private todoService:TodoService) { }

    ngOnInit() { }

    onSubmitAddForm(form) {
        //console.log('addRecords>>>>');
        // console.log(form);
        if(form.valid) {
            this.todoService.add(this.todo);
            this.router.navigate(['/list']);
        } else {
            console.log('Form Invalid');
        }
    }

}
