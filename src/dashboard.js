import React, { useState } from 'react';
import './App.css';

const UserDashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Complete project proposal', completed: false },
    { id: 2, title: 'Review team feedback', completed: true },
    { id: 3, title: 'Update documentation', completed: false },
    { id: 4, title: 'Prepare presentation slides', completed: true },
    { id: 5, title: 'Schedule client meeting', completed: false },
    { id: 6, title: 'Code review for feature X', completed: true }
  ]);

  const [newTask, setNewTask] = useState('');
  const [editProfile, setEditProfile] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Aqueeb',
    email: 'akb@example.com'
  });

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        title: newTask,
        completed: false
      }]);
      setNewTask('');
    }
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="dashboard-header">
          <h1 className="dashboard-title">Dashboard</h1>
          <p className="dashboard-subtitle">Welcome back! Here's what's happening today.</p>
        </div>

        <div className="main-grid">
          
          <div className="profile-section">
            <div className="card">
              <div className="section-header">
                <span className="section-icon">👤</span>
                <h2 className="section-title">Profile</h2>
              </div>

              {editProfile ? (
                <form className="profile-form" onSubmit={(e) => { e.preventDefault(); setEditProfile(false); }}>
                  <input type="text" name="name" value={profile.name} onChange={handleProfileChange} placeholder="Name" />
                  <input type="email" name="email" value={profile.email} onChange={handleProfileChange} placeholder="Email" />
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button type="submit" className="add-button">Save</button>
                    <button type="button" onClick={() => setEditProfile(false)} className="add-button" style={{ backgroundColor: '#6b7280' }}>Cancel</button>
                  </div>
                </form>
              ) : (
                <div className="profile-content">
                  <div className="avatar">
                    <span className="avatar-text">{profile.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <h3 className="profile-name">{profile.name}</h3>
                  <p className="profile-email">{profile.email}</p>
                  <button onClick={() => setEditProfile(true)} className="add-button" style={{ marginTop: '1rem' }}>
                    Edit Profile
                  </button>
                </div>
              )}
            </div>
          </div>

          
          <div className="tasks-section">
            <div className="card">
              <div className="section-header-with-counter">
                <div className="section-header">
                  <span className="section-icon">✅</span>
                  <h2 className="section-title">Tasks</h2>
                </div>
                <span className="task-counter">{tasks.length} total tasks</span>
              </div>

              <div className="add-task-container">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new task..."
                  className="task-input"
                  onKeyPress={(e) => e.key === 'Enter' && addTask()}
                />
                <button onClick={addTask} className="add-button">➕ Add</button>
              </div>

              <div className="task-list">
                {tasks.map(task => (
                  <div key={task.id} className="task-item">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="task-checkbox"
                    />
                    <div className="task-content">
                      <span className={task.completed ? 'task-text-completed' : 'task-text'}>
                        {task.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={clearCompletedTasks} className="add-button" style={{ marginTop: '1rem' }}>
                Clear Completed
              </button>
            </div>
          </div>
        </div>

        
        <div className="stats-section">
          <div className="card">
            <div className="section-header">
              <span className="section-icon">📊</span>
              <h2 className="section-title">Statistics</h2>
            </div>

            <div className="stats-grid">
              <div className="stat-card stat-blue">
                <div className="stat-number">{tasks.length}</div>
                <div className="stat-label">Total Tasks</div>
              </div>

              <div className="stat-card stat-green">
                <div className="stat-number">{completedTasks}</div>
                <div className="stat-label">Completed</div>
                <div className="stat-sublabel">
                  {tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0}% completion rate
                </div>
              </div>

              <div className="stat-card stat-orange">
                <div className="stat-number">{pendingTasks}</div>
                <div className="stat-label">Pending</div>
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-header">
                <span className="progress-label">Overall Progress</span>
                <span className="progress-percentage">{tasks.length > 0 ? Math.round((completedTasks / tasks.length) * 100) : 0}%</span>
              </div>
              <div className="progress-bar-container">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
