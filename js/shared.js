// js/shared.js

export function getSegmentColor(fill) {
    if (fill <= 2) return '#44ce1b';
    if (fill <= 4) return '#e0ff30';
    if (fill <= 6) return '#fff830';
    if (fill <= 8) return '#ff9538';
    if (fill <= 10) return '#ff362b';
    return '#c0392b';
}

export function createDensityBar(fillCount, isDisabled = false) {
    const bar = document.createElement('div');
    bar.className = 'density-bar';
    if (isDisabled) bar.style.background = '#dfe6e9';

    for (let i = 0; i < 10; i++) {
        const seg = document.createElement('div');
        seg.className = 'segment';
        seg.style.background = isDisabled 
            ? '#bdc3c7' 
            : (i < fillCount ? getSegmentColor(fillCount) : '#ebedef');
        bar.appendChild(seg);
    }
    return bar;
}

// js/shared.js  ── replace the renderBlock function with this ──
export function renderBlock(container, block, currentIndex, totalBlocks) {
    container.innerHTML = ''; 

    const title = document.createElement('h2');
    title.textContent = block.name;
    container.appendChild(title);

    const floorWrapper = document.createElement('div');
    floorWrapper.className = 'floor-wrapper';

    for (let i = 0; i < block.floors; i++) {
        const floorDiv = document.createElement('div');
        
        floorDiv.className = 'floor-module';
        if (block.disabledFloors.includes(i)) {
            floorDiv.classList.add('disabled');
        }

        const floorLabel = document.createElement('div');
        floorLabel.className = 'floor-label';
        floorLabel.textContent = block.floorNames[i] || `Floor ${i}`;
        floorDiv.appendChild(floorLabel);

        let densityBar;
        if (block.disabledFloors.includes(i)) {
            densityBar = createDensityBar(0, true);
            const reason = document.createElement('div');
            reason.className = 'floor-info';
            reason.textContent = block.disabledReasons[i] || 'Disabled';
            floorDiv.appendChild(densityBar);
            floorDiv.appendChild(reason);
        } else {
            const density = block.densities[i] || 0;
            densityBar = createDensityBar(density);

            const densityText = document.createElement('div');
            densityText.className = 'floor-number';
            densityText.textContent = `Density: ${density}/10`;
            floorDiv.appendChild(densityBar);
            floorDiv.appendChild(densityText);
        }

        // ── Always make it clickable ──
        floorDiv.style.cursor = 'pointer';
        floorDiv.classList.add('clickable-floor'); // for hover style if you have CSS

        floorDiv.addEventListener('click', () => {
            showFloorDetailPanel(block, i);
        });

        floorWrapper.appendChild(floorDiv);
    }

    container.appendChild(floorWrapper);
}

// ────────────────────── New side panel implementation ──────────────────────

export function showFloorDetailPanel(block, floorIndex) {
    document.querySelectorAll('.floor-detail-panel').forEach(el => el.remove());

    const floorName = block.floorNames?.[floorIndex] || `Floor ${floorIndex}`;
    const isDisabled = block.disabledFloors.includes(floorIndex);
    const density = isDisabled ? 0 : (block.densities?.[floorIndex] ?? 0);

    const panel = document.createElement('div');
    panel.className = 'floor-detail-panel';

    panel.innerHTML = `
        <div class="panel-header">
            <h3>${block.name} — ${floorName}</h3>
            <button class="close-panel-btn">×</button>
        </div>
        <div class="panel-body">
            ${isDisabled 
                ? `
                <div class="status disabled">
                    <strong>Closed / Restricted</strong><br>
                    ${block.disabledReasons?.[floorIndex] || 'No reason provided'}
                </div>
                `
                : `
                <div class="status density">
                    Current density: <strong>${density}/10</strong>
                </div>
                <div class="detail-content">
                    Description: ${block.floorDetails?.[floorIndex] ? block.floorDetails[floorIndex].replace(/\n/g, '<br>')
                    : '<em>No specific information available for this floor.</em>'}
                </div>
                `}
        </div>
    `;

    // Slide in animation
    document.body.appendChild(panel);
    panel.offsetHeight; // force reflow
    setTimeout(() => panel.classList.add('show'), 20);

    const closeBtn = panel.querySelector('.close-panel-btn');
    closeBtn.onclick = () => panel.remove();
    panel.onclick = (e) => { if (e.target === panel) panel.remove(); };
    closeBtn.focus();
}

export function initLastUpdated() {
    const pageLoadTime = Date.now();
    const lastUpdateEl = document.getElementById('lastUpdate');

    function update() {
        const minutes = Math.floor((Date.now() - pageLoadTime) / 60000);
        const text = minutes === 0 ? "just now" : `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
        lastUpdateEl.textContent = `Last updated: ${text}`;
    }

    setInterval(update, 60000);
    update(); // initial call
}

export function initModal() {
    const modal = document.getElementById('infoModal');
    if (!modal) return;

    document.getElementById('infoBtn')?.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    document.getElementById('closeModal')?.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
    });
}