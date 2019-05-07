package org.taskManager.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.taskManager.dao.TaskDao;
import org.taskManager.entities.Task;

@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	private TaskDao taskDao;

	/*@Autowired
	private ParentTaskDao parentTaskDao;*/
	
	@Transactional
	@Override
	public boolean addTask(Task task) {
		this.taskDao.save(task);
		return true;
	}

	@Transactional
	@Override
	public List<Task> getParentTaskList() {
		return this.taskDao.findAll();
	}
	
	@Transactional
	@Override
	public Task getTaskById(Integer taskId) {
		return this.taskDao.findTaskById(taskId);
		
	}

	@Transactional
	@Override
	public boolean endTask(Integer taskId) {
		this.taskDao.deleteById(taskId);
		return true;
	}
	
	@Transactional
	@Override
	public boolean updateTask(Task task) {
		task.setTask_id(task.getTask_id());
		this.taskDao.save(task);
		return true;
	}
	
	
	
}
