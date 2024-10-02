// Login functionality
const storedUser = localStorage.getItem('user');
if (!storedUser) {
    document.getElementById('tracker-section').style.display = 'none';
    document.getElementById('login-section').style.display = 'block';
} else {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('tracker-section').style.display = 'block';
}

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple login authentication
    if (username === 'student' && password === 'password') {
        localStorage.setItem('user', JSON.stringify({ username }));
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('tracker-section').style.display = 'block';
    } else {
        alert('Invalid credentials!');
    }
});

// Time tracking functionality
let studyTime = localStorage.getItem('studyTime') ? parseInt(localStorage.getItem('studyTime')) : 0;
let breakTime = localStorage.getItem('breakTime') ? parseInt(localStorage.getItem('breakTime')) : 0;
let timerInterval;
let isStudying = false;
let isOnBreak = false;
let startTime;

// Start timer
function startTimer(type) {
    clearInterval(timerInterval); // Reset any existing timer
    startTime = Date.now();
    isStudying = type === 'study';
    isOnBreak = type === 'break';

    timerInterval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000);

        let hours = Math.floor(elapsedTime / 3600);
        let minutes = Math.floor((elapsedTime % 3600) / 60);
        let seconds = elapsedTime % 60;

        document.getElementById('timer-display').textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

// Stop timer
function stopTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);

    if (isStudying) {
        studyTime += elapsedTime;
        localStorage.setItem('studyTime', studyTime);
    } else if (isOnBreak) {
        breakTime += elapsedTime;
        localStorage.setItem('breakTime', breakTime);
    }

    updateChart();
    clearInterval(timerInterval);
    document.getElementById('timer-display').textContent = "00:00:00";
    isStudying = false;
    isOnBreak = false;
}

// Button click event listeners
document.getElementById('start-study').addEventListener('click', () => startTimer('study'));
document.getElementById('start-break').addEventListener('click', () => startTimer('break'));
document.getElementById('stop-timer').addEventListener('click', stopTimer);

// Chart data update
const ctx = document.getElementById('timeChart').getContext('2d');
let timeChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Study Time', 'Break Time'],
        datasets: [{
            data: [studyTime, breakTime],
            backgroundColor: ['#4CAF50', '#FF9800']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

function updateChart() {
    timeChart.data.datasets[0].data = [studyTime, breakTime];
    timeChart.update();
}

// Weekly report functionality
let weeklyData = JSON.parse(localStorage.getItem('weeklyData')) || {
    study: Array(7).fill(0),
    break: Array(7).fill(0)
};
let currentDay = new Date().getDay();

function saveDailyData(studyTimeToday, breakTimeToday) {
    weeklyData.study[currentDay] = studyTimeToday;
    weeklyData.break[currentDay] = breakTimeToday;
    localStorage.setItem('weeklyData', JSON.stringify(weeklyData));
}

function generateWeeklyReport() {
    const ctx = document.getElementById('weeklyChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
                {
                    label: 'Study Time (seconds)',
                    data: weeklyData.study,
                    backgroundColor: '#4CAF50'
                },
                {
                    label: 'Break Time (seconds)',
                    data: weeklyData.break,
                    backgroundColor: '#FF9800'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Generate weekly report on page load
document.addEventListener('DOMContentLoaded', generateWeeklyReport);

// Notification functionality
function notifyUser(message) {
    if (Notification.permission === 'granted') {
        new Notification(message);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(message);
            }
        });
    }
}

// Notify user to take a break every 25 minutes
setInterval(() => {
    if (isStudying) {
        notifyUser('Time for a break! You’ve been studying for 25 minutes.');
    }
}, 1500000); // Notify every 25 minutes
