package org.taskManager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.taskManager.entities.Task;
import org.taskManager.services.TaskService;
import org.taskManager.utility.TaskManagerException;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/*(origins = "http://localhost:4200", maxAge = 3600)*/
@CrossOrigin
@RestController
@RequestMapping(value = "/api/tasks")
@JsonIgnoreProperties
public class TaskController {
	
	@Autowired
	private TaskService taskService;
	
	@RequestMapping(method = RequestMethod.POST)
	public void addTask(@RequestBody Task task) throws TaskManagerException{
		try{
			this.taskService.addTask(task);
		}catch(Exception exp){
			throw new TaskManagerException("Exception occured while adding new task :" +exp.getMessage());
		}
	}
	
	@PutMapping("/updateTask/{taskId}")
	public void updateTask(@RequestBody Task task, @PathVariable Integer taskId) throws TaskManagerException{
		try{
			task.setTask_id(taskId);
			this.taskService.updateTask(task);
		}catch(Exception exp){
			throw new TaskManagerException("Exception occured while adding updating task id:"+taskId+" : "+exp.getMessage());
		}
	}
	
	@GetMapping("/getAllTaskList")
	public List<Task> getAllTaskList() throws TaskManagerException{
		try{
			return this.taskService.getParentTaskList();
		}catch(Exception exp){
			throw new TaskManagerException("Exception occured while fetching task list:"+exp.getMessage());
		}
			
	}
	
	@GetMapping("/{taskId}")
	public Task getTaskById(@PathVariable("taskId") Integer taskId) throws TaskManagerException{
		try{
			return this.taskService.getTaskById(taskId);
		}catch(Exception exp){
			throw new TaskManagerException("Exception occured while fetching task:"+taskId+" : "+exp.getMessage());
		}
	}
	
	@DeleteMapping("/{taskId}")
	public boolean endTask(@PathVariable("taskId") Integer taskId) throws TaskManagerException{
		try{
			return this.taskService.endTask(taskId);
		}catch(Exception exp){
			throw new TaskManagerException("Exception occured while ending task:"+taskId+" : "+exp.getMessage());
		}
	}
}
