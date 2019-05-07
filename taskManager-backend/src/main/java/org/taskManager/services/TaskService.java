package org.taskManager.services;

import java.util.List;

import org.taskManager.entities.Task;

public interface TaskService {
	
	boolean addTask(Task task);
	
	List<Task> getParentTaskList();
	
	Task getTaskById(Integer taskId);

	boolean endTask(Integer taskId);

	boolean updateTask(Task task);
}
