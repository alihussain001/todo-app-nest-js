import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interface/todo.interface';

@Injectable()
export class TodoService {
    private todos:Todo [] =[];
    private idCounter = 1;

    createTodo(createTodoDto:CreateTodoDto): Todo{
        const newTodo: Todo ={
            id: this.idCounter++,
            ...createTodoDto,
        }
        this.todos.push(newTodo);
        return newTodo;
    }

    getAllTodo(): Todo[]{
        return this.todos;
    }

    getTodoById(id:number):Todo{
        const todo = this.todos.find((todo) => todo.id === id);
        
        if(!todo){
            throw new NotFoundException('Todo not found');
        }
        return todo;
    }
}
