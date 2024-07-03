window.addEventListener('DOMContentLoaded', (event) => {
    const currentTimeElement = document.getElementById('currentTime');
    const currentDayElement = document.getElementById('currentDay');

    function updateTime() {
        const now = new Date();
        const utcTime = now.toISOString().split('T')[1].split('.')[0];
        const utcDay = now.toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });

        currentTimeElement.textContent = utcTime;
        currentDayElement.textContent = utcDay;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
