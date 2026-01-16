import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

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

   @Patch(':id')
   updateTodo(@Param('id') id:string, @Body() updateTodoDto:UpdateTodoDto){
    return this.todoService.updateTodo(Number(id), updateTodoDto);
   }

   @Delete(':id')
   deleteTodo(@Param('id') id: string){
    return this.todoService.deleteTodo(Number(id))
   }
}
