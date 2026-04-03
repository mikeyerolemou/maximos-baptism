document.querySelectorAll('.button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const rect = btn.getBoundingClientRect();
        const r = document.createElement('span');
        r.className = 'ripple';
        const size = Math.max(rect.width, rect.height);
        r.style.width = r.style.height = size + 'px';
        r.style.left = (e.clientX - rect.left - size / 2) + 'px';
        r.style.top = (e.clientY - rect.top - size / 2) + 'px';
        btn.appendChild(r);
        r.addEventListener('animationend', () => r.remove());
    }, {passive: true});
});

const target = new Date("2026-04-14T12:00:00+03:00").getTime();

const el = {
    d: document.getElementById("cdDays"),
    h: document.getElementById("cdHours"),
    m: document.getElementById("cdMins"),
    s: document.getElementById("cdSecs"),
};

function pad(n) {
    return String(n).padStart(2, "0");
}

function tick() {
    if (Date.now() > target) {
        document.getElementById("countdown").innerHTML = "Σήμερα είναι η βάπτιση 🎉";
        return;
    }

    const now = Date.now();
    let diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * (1000 * 60);
    const secs = Math.floor(diff / 1000);

    el.d.textContent = days;
    el.h.textContent = pad(hours);
    el.m.textContent = pad(mins);
    el.s.textContent = pad(secs);
}

tick();
setInterval(tick, 1000);

const modal = document.getElementById('rsvpModal');
const openBtn = document.getElementById('openRsvp');
const closeBtn = modal?.querySelector('[data-close].modal-close');

function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

openBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

closeBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
});

modal?.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) closeModal();
});
