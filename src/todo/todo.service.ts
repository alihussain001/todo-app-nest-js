import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interface/todo.interface';
import { UpdateTodoDto } from './dto/update-todo.dto';

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

    updateTodo(id:number, updateTodoDto: UpdateTodoDto): Todo{
        const todo = this.getTodoById(id);

        Object.assign(todo, updateTodoDto);
        return todo;
    }

    deleteTodo(id: number): string{
        const index = this.todos.findIndex(todo => todo.id === id)

        if(index === -1){
            throw new NotFoundException('Todo not found');
        }
        this.todos.splice(index, 1)
        return 'Todo deleted successfully!'
    }
}
