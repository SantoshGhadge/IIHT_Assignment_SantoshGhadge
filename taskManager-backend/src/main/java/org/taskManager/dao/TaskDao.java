package org.taskManager.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.taskManager.entities.Task;

public interface TaskDao extends JpaRepository<Task, Integer> {

	/*boolean addTask(Task task);*/
	
	@Query(value ="SELECT * FROM task t where t.task_id=?1", nativeQuery = true) 
	Task findTaskById(Integer taskId);

	
}
