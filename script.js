(function() {
    const woodfish = document.getElementById('woodfish');
    const counterEl = document.getElementById('counter');
    const floatingContainer = document.getElementById('floatingContainer');
    
    let count = 0;
    const audio = new Audio('woodfish.mp3');
    audio.preload = 'auto';
    
    function createFloatingText() {
        const el = document.createElement('div');
        el.className = 'float-text';
        el.textContent = '功德 +1';
        
        // 随机水平偏移，让飘字更自然
        const randomX = (Math.random() - 0.5) * 60;
        el.style.left = `calc(50% + ${randomX}px)`;
        el.style.top = '50%';
        
        floatingContainer.appendChild(el);
        
        // 动画结束后移除元素
        el.addEventListener('animationend', () => el.remove());
    }
    
    function hit() {
        count++;
        counterEl.textContent = `功德: ${count}`;
        
        // 播放音效（重置播放位置以便快速连击）
        audio.currentTime = 0;
        audio.play().catch(() => {});
        
        createFloatingText();
    }
    
    woodfish.addEventListener('click', hit);
    
    // 支持键盘空格键敲击
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            hit();
        }
    });
})();