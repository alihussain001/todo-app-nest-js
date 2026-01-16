import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

    @Post()
    creatTodo(@Body() createTodoDto: CreateTodoDto){
        return this.todoService.createTodo(createTodoDto);
    }

    @Get()
    getAllTodo(){
        return this.todoService.getAllTodo();
    }

    @Get(":id")
   getTodoById(@Param('id') id:string){
    return this.todoService.getTodoById(Number(id));
   }
}
