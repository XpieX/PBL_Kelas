const schedule = [
    { room: 'RUANG DOSEN', day: 'Monday', start: '08:00', end: '10:00' },
    { room: 'RUANG DOSEN 2', day: 'Monday', start: '09:00', end: '11:00' },
    { room: 'RUANG LAB TI 14', day: 'Monday', start: '10:00', end: '12:00' }
];

function updateStatus() {
    const now = new Date();
    const currentDay = now.toLocaleString('en-us', { weekday: 'long' });
    const currentTime = now.toTimeString().slice(0, 5);

    schedule.forEach(item => {
        const roomElement = document.getElementById(item.room);
        if (roomElement) {
            if (item.day === currentDay && currentTime >= item.start && currentTime <= item.end) {
                roomElement.classList.add('occupied');
                roomElement.classList.remove('available');
            } else {
                roomElement.classList.add('available');
                roomElement.classList.remove('occupied');
            }
        }
    });
}

