package org.taskManager.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.taskManager.entities.ParentTask;

public interface ParentTaskDao extends JpaRepository<ParentTask, Integer> {

}
