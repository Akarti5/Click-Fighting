
        // Get DOM elements
        const startBtn = document.getElementById('startBtn');
        const modalOverlay = document.getElementById('modalOverlay');
        const closeBtn = document.getElementById('closeBtn');
        const pvpBtn = document.getElementById('pvpBtn');
        const aiBtn = document.getElementById('aiBtn');

        // Show modal when start button is clicked
        startBtn.addEventListener('click', () => {
            modalOverlay.classList.add('active');
        });

        // Close modal when close button is clicked
        closeBtn.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });

        // Close modal when clicking outside of it
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove('active');
            }
        });

        // Handle PvP button click
        pvpBtn.addEventListener('click', () => {
            alert('Player vs Player mode selected! (Game logic to be implemented)');
            modalOverlay.classList.remove('active');
        });

        // Handle AI button click
        aiBtn.addEventListener('click', () => {
            alert('Player vs AI mode selected! (Game logic to be implemented)');
            modalOverlay.classList.remove('active');
        });

        // Add keyboard support (ESC to close modal)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
                modalOverlay.classList.remove('active');
            }
        });

        // Add some visual feedback for button clicks
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
            });
        });