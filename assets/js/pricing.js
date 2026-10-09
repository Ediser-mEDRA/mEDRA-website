(function () {
    'use strict';

    // ============================================================
    // HELPERS
    // ============================================================
    const fmtEuro = (n, decimals) => {
        const d = (decimals === undefined) ? 0 : decimals;
        const parts = Number(n).toFixed(d).split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return '€ ' + parts.join(',');
    };
    const fmtInt = n => Number(n).toLocaleString('de-DE');

    // ============================================================
    // DATA
    // ============================================================
    const dataEl = document.getElementById('pricing-data');
    if (!dataEl) return;
    const brackets = JSON.parse(dataEl.textContent);

    const crossrefEl = document.getElementById('crossref-data');
    const crossrefData = crossrefEl ? JSON.parse(crossrefEl.textContent) : null;

    // ============================================================
    // BRACKET DETAIL CARD
    // ============================================================
    const detailEl = document.getElementById('bracketDetail');
    if (detailEl) {
        const labels   = JSON.parse(detailEl.dataset.labels || '{}');
        const features = JSON.parse(detailEl.dataset.features || '[]');
        const cta      = detailEl.dataset.cta || 'Get started';
        const ctaUrl   = detailEl.dataset.ctaUrl || '#';
        const period   = detailEl.dataset.pricePeriod || '/ year';
        const note     = detailEl.dataset.priceNote || '';

        const renderDetail = (b) => {
            const featuresHtml = features.map(f =>
                `<li><i class="bi bi-check-circle-fill"></i><span>${f}</span></li>`
            ).join('');
            
            detailEl.innerHTML = `
                <div class="bracket-card">
                    <div class="bracket-card__head">
                        <div class="bracket-card__title">
                            <span class="bracket-card__label">${labels.bracket || 'DOI Bracket'}</span>
                            <h2 class="bracket-card__name">${labels.bracket_n || 'Bracket'} ${b.num}</h2>
                        </div>
                        ${b.popular ? `<span class="bracket-card__badge">${labels.popular || 'Most popular'}</span>` : ''}
                    </div>

                    <div class="bracket-card__body">
                        <div class="bracket-card__price">
                            <span class="bracket-card__price-amount">${fmtEuro(b.fee)}</span>
                            <span class="bracket-card__price-period">${period}</span>
                            <span class="bracket-card__price-note">${note}</span>
                        </div>

                        <div class="bracket-card__grid">
                            <div>
                                <p class="bracket-card__stat-label">${labels.included || 'DOIs included'}</p>
                                <p class="bracket-card__stat-value">${fmtInt(b.included)} <small>${labels.included_sub || ''}</small></p>
                            </div>
                            <div>
                                <p class="bracket-card__stat-label">${labels.excess || 'Excess price'}</p>
                                <p class="bracket-card__stat-value">${fmtEuro(b.excess, 2)} <small>${labels.excess_sub || ''}</small></p>
                            </div>
                            <div>
                                <p class="bracket-card__stat-label">${labels.best_for || 'Best for'}</p>
                                <p class="bracket-card__stat-value">${b.use_case || ''}</p>
                            </div>
                        </div>

                        <ul class="bracket-card__features">${featuresHtml}</ul>

                        <a href="${ctaUrl}?subject=Bracket%20${b.num}%20enquiry" class="bracket-card__cta">
                            <span>${cta} — Bracket ${b.num}</span>
                            <i class="bi bi-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            `;
        };

        const pills = document.querySelectorAll('.bracket-pill');
        pills.forEach(pill => {
            pill.addEventListener('click', () => {
                const n = parseInt(pill.dataset.bracket, 10);
                pills.forEach(p => {
                    p.classList.remove('is-active');
                    p.setAttribute('aria-selected', 'false');
                });
                pill.classList.add('is-active');
                pill.setAttribute('aria-selected', 'true');

                const b = brackets.find(x => x.num === n);
                if (b) renderDetail(b);
            });
        });
        
        renderDetail(brackets[0]);
    }

    // ============================================================
    // FULL TABLE (solo pagina /pricing/)
    // ============================================================
    const tbody = document.getElementById('fullTableBody');
    if (tbody) {
        tbody.innerHTML = brackets.map(b => `
            <tr class="${b.popular ? 'is-highlighted' : ''}">
                <th scope="row"><span class="bracket-badge">${b.num}</span></th>
                <td class="col-fee price-primary">${fmtEuro(b.fee)}</td>
                <td>Up to ${fmtInt(b.included)} DOIs</td>
                <td class="col-excess price-secondary">${fmtEuro(b.excess, 2)}</td>
                <td style="text-align:right;">
                    <a href="mailto:sales@medra.org?subject=Bracket%20${b.num}" class="btn-row ${b.popular ? 'btn-row--primary' : ''}">
                        Get started
                    </a>
                </td>
            </tr>
        `).join('');
    }

    // ============================================================
    // CROSSREF TABLE (solo pagina /pricing/)
    // ============================================================
    const crossrefTbody = document.getElementById('crossrefTableBody');
    if (crossrefTbody && crossrefData) {
        const rows = brackets.filter(b => b.num <= 5).map(b => `
            <tr>
                <th scope="row"><span class="bracket-badge">${b.num}</span></th>
                <td class="col-fee price-primary">${fmtEuro(b.fee)}</td>
                <td>Up to ${fmtInt(b.included)} DOIs</td>
                <td class="col-excess price-secondary">${fmtEuro(b.excess, 2)}</td>
                <td class="col-crossref-fee price-highlight">${fmtEuro(crossrefData.fees[b.num])}</td>
                <td class="col-crossref-price price-highlight">${fmtEuro(crossrefData.prices[b.num ], 2)}</td>
            </tr>
        `).join('');

        crossrefTbody.innerHTML = rows + `
            <tr class="special-row">
                <th scope="row">
                    <span class="bracket-badge bracket-badge--range">${crossrefData.special.bracket}</span>
                </th>
                <td colspan="5">${crossrefData.special.text}</td>
            </tr>
        `;
    }
})();