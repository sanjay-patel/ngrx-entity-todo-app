import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from './../../services/todo.service';
import { Observable } from 'rxjs/Rx';
import { todo } from './../../models/todo.model';


@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    private todoSub;
    public todoDetail;
    private todoId: number;
    constructor( private router: Router, private activatedRoute: ActivatedRoute, private todoService:TodoService ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.todoId  = params['id'];
            const detail = this.todoService.getDetail(this.todoId);
            this.todoSub = detail.subscribe((res) => {
                if(res !== undefined) {
                    this.todoDetail = res;
                } else {
                    this.todoDetail = {};
                }
            })
        });
    }

    onSubmitEditForm(form) {
        if(form.valid) {
            this.todoService.edit(this.todoId, this.todoDetail);
            this.router.navigate(['/list']);
        } else {
            console.log('Form Invalid');
        }
    }

    ngOnDestroy() {
      this.todoSub.unsubscribe()
    }

}
