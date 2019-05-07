package org.taskManager.entities;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="task")
@JsonIgnoreProperties
public class Task{

	@Id //primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY) //unique val generation strategy
	@Column(name="task_id") //col in table to match with
	private Integer task_id;
	
	@ManyToOne(cascade=CascadeType.ALL)
	//@NotFound(action = NotFoundAction.IGNORE)
	@JoinColumn(name="parent_id")
    private ParentTask parentTask;
	
	@Column(name="task")
	private String task;
	
	@Column(name="start_date")
    private Date startDate;
    
    @Column(name="end_date")
    private Date endDate;
    
	@Column(name="priority")
    private Integer priority;
	
	public Task(){
		
	}

	public Integer getTask_id() {
		return task_id;
	}

	public void setTask_id(Integer task_id) {
		this.task_id = task_id;
	}

	public ParentTask getParentTask() {
		return parentTask;
	}

	public void setParentTask(ParentTask parentTask) {
		this.parentTask = parentTask;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Integer getPriority() {
		return priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}


}
