'use strict';

// --- Vertalingen ---

const vertalingen = {
  nl: {
    appTitel: 'Stroomvergelijker',
    headerSub: 'Vergelijk offertes van stroomaanbieders op maandbedrag',
    disclaimerTekst: 'De uitkomsten zijn uitsluitend indicatief. De maker is niet verantwoordelijk voor reken- of invoerfouten. De eindgebruiker is zelf verantwoordelijk voor de juistheid van de resultaten.',
    jaarverbruik: 'Mijn jaarverbruik',
    verbruikGroep: 'Verbruik',
    teruglevGroep: 'Teruglevering',
    normaalKwhJaar: 'Normaal (kWh/jaar)',
    dalKwhJaar: 'Dal (kWh/jaar)',
    offerteToevoegen: 'Offerte toevoegen',
    offerteBewerken: 'Offerte bewerken',
    bewerkBezig: 'Bezig met bewerken:',
    leverancier: 'Leverancier',
    tarieftype: 'Tarieftype',
    tarieftypeVast: 'Vast',
    tarieftypeVariabel: 'Variabel',
    looptijd: 'Looptijd',
    looptijd1jaar: '1 jaar',
    looptijd2jaar: '2 jaar',
    looptijd3jaar: '3 jaar',
    looptijdOnbepaald: 'Onbepaald',
    normaalTariefLabel: 'Normaal tarief (€/kWh)',
    dalTariefLabel: 'Dal tarief (€/kWh)',
    totaaltarief: 'Totaaltarief',
    leveringstarief: 'Leveringstarief',
    energiebelasting: 'Energiebelasting',
    vasteKosten: 'Vaste kosten',
    leveringskosten: 'Leveringskosten',
    netbeheerkosten: 'Netbeheerkosten',
    vermindringEB: 'Vermindering energiebelasting',
    terugleverTariefLabel: 'Teruglevertarief (€/kWh)',
    terugleverTariefNormaalLabel: 'Teruglevertarief normaal',
    terugleverTariefDalLabel: 'Teruglevertarief dal',
    perJaar: 'per jaar',
    perMaandPeriode: 'per maand',
    perDag: 'per dag',
    voegToe: '+ Voeg offerte toe',
    opslaan: 'Opslaan',
    annuleer: 'Annuleer',
    vergelijking: 'Vergelijking',
    leegMelding: 'Voeg een offerte toe om de vergelijking te starten.',
    grafiekTitel: 'Maandbedrag per aanbieder',
    kolomNr: '#',
    kolomLeverancier: 'Leverancier',
    kolomTarieftype: 'Tarieftype',
    kolomLooptijd: 'Looptijd',
    kolomNormaal: 'Norm. (€/kWh)',
    kolomDal: 'Dal (€/kWh)',
    kolomVerbruikBedrag: 'Verbruik (€/jr)',
    kolomTerugleverNormaal: 'Terlv. norm. (€/kWh)',
    kolomTerugleverDal: 'Terlv. dal (€/kWh)',
    kolomLevering: 'Levering (€/jr)',
    kolomNetbeheer: 'Netbeheer (€/jr)',
    kolomVermEB: 'Verm. EB (€/jr)',
    kolomMaand: 'Maandbedrag',
    kolomJaar: 'Jaarbedrag',
    goedkoopst: 'Goedkoopst',
    btnBewerk: 'Bewerk',
    btnVerwijder: 'Verwijder',
    grafiekLabel: 'Maandbedrag (€)',
    perMaand: 'maand',
    alertTarief: 'Vul voor zowel het normaal- als het dal tarief minimaal twee van de drie tariefvelden in.',
    alertLeveringskosten: 'Vul de leveringskosten in.',
    toelichtingTitel: 'Toelichting berekening',
    toelichtingVerbruikTitel: 'Verbruikskosten (€/jr)',
    toelichtingVerbruikFormule: '(normaalverbruik kWh/jr × normaal tarief) + (dalverbruik kWh/jr × dal tarief)',
    toelichtingJaarTitel: 'Jaarbedrag',
    toelichtingJaarFormule: 'verbruikskosten + leveringskosten + netbeheerkosten − vermindering EB − terugleveropbrengst',
    toelichtingJaarTeruglev: 'waarbij terugleveropbrengst = (terlv. normaal kWh × terlv. normaal tarief) + (terlv. dal kWh × terlv. dal tarief)',
    toelichtingMaandTitel: 'Maandbedrag',
    toelichtingMaandFormule: 'jaarbedrag ÷ 12',
    teruglevToggle: 'Ik lever terug aan het net',
  },
  de: {
    appTitel: 'Stromvergleich',
    headerSub: 'Vergleiche Angebote von Stromanbietern nach Monatsbetrag',
    disclaimerTekst: 'Die Ergebnisse sind ausschließlich als Richtwert zu verstehen. Der Entwickler übernimmt keine Haftung für Rechen- oder Eingabefehler. Der Endnutzer ist selbst für die Richtigkeit der Ergebnisse verantwortlich.',
    jaarverbruik: 'Mein Jahresverbrauch',
    verbruikGroep: 'Verbrauch',
    teruglevGroep: 'Einspeisung',
    normaalKwhJaar: 'Normal (kWh/Jahr)',
    dalKwhJaar: 'Niedrig (kWh/Jahr)',
    offerteToevoegen: 'Angebot hinzufügen',
    offerteBewerken: 'Angebot bearbeiten',
    bewerkBezig: 'Wird bearbeitet:',
    leverancier: 'Anbieter',
    tarieftype: 'Tariftyp',
    tarieftypeVast: 'Fest',
    tarieftypeVariabel: 'Variabel',
    looptijd: 'Laufzeit',
    looptijd1jaar: '1 Jahr',
    looptijd2jaar: '2 Jahre',
    looptijd3jaar: '3 Jahre',
    looptijdOnbepaald: 'Unbegrenzt',
    normaalTariefLabel: 'Normaltarif (€/kWh)',
    dalTariefLabel: 'Niedrigtarif (€/kWh)',
    totaaltarief: 'Gesamttarif',
    leveringstarief: 'Liefertarif',
    energiebelasting: 'Energiesteuer',
    vasteKosten: 'Fixkosten',
    leveringskosten: 'Lieferkosten',
    netbeheerkosten: 'Netzkosten',
    vermindringEB: 'Energiesteuerermäßigung',
    terugleverTariefLabel: 'Einspeisevergütung (€/kWh)',
    terugleverTariefNormaalLabel: 'Einspeisevergütung Normal',
    terugleverTariefDalLabel: 'Einspeisevergütung Niedrig',
    perJaar: 'pro Jahr',
    perMaandPeriode: 'pro Monat',
    perDag: 'pro Tag',
    voegToe: '+ Angebot hinzufügen',
    opslaan: 'Speichern',
    annuleer: 'Abbrechen',
    vergelijking: 'Vergleich',
    leegMelding: 'Füge ein Angebot hinzu, um den Vergleich zu starten.',
    grafiekTitel: 'Monatsbetrag pro Anbieter',
    kolomNr: '#',
    kolomLeverancier: 'Anbieter',
    kolomTarieftype: 'Tariftyp',
    kolomLooptijd: 'Laufzeit',
    kolomNormaal: 'Normal (€/kWh)',
    kolomDal: 'Niedrig (€/kWh)',
    kolomVerbruikBedrag: 'Verbrauch (€/J)',
    kolomTerugleverNormaal: 'Einsp. norm. (€/kWh)',
    kolomTerugleverDal: 'Einsp. nied. (€/kWh)',
    kolomLevering: 'Lieferung (€/J)',
    kolomNetbeheer: 'Netz (€/J)',
    kolomVermEB: 'Erm. ES (€/J)',
    kolomMaand: 'Monatsbetrag',
    kolomJaar: 'Jahresbetrag',
    goedkoopst: 'Günstigste',
    btnBewerk: 'Bearbeiten',
    btnVerwijder: 'Entfernen',
    grafiekLabel: 'Monatsbetrag (€)',
    perMaand: 'Monat',
    alertTarief: 'Bitte fülle für Normal- und Niedrigtarif mindestens zwei der drei Tariffelder aus.',
    alertLeveringskosten: 'Bitte fülle die Lieferkosten aus.',
    toelichtingTitel: 'Berechnungshinweis',
    toelichtingVerbruikTitel: 'Verbrauchskosten (€/J)',
    toelichtingVerbruikFormule: '(Normalverbrauch kWh/J × Normaltarif) + (Niedrigverbrauch kWh/J × Niedrigtarif)',
    toelichtingJaarTitel: 'Jahresbetrag',
    toelichtingJaarFormule: 'Verbrauchskosten + Lieferkosten + Netzkosten − Energiesteuerermäßigung − Einspeisevergütung',
    toelichtingJaarTeruglev: 'wobei Einspeisevergütung = (Einsp. normal kWh × Einsp. Normaltarif) + (Einsp. niedrig kWh × Einsp. Niedrigtarif)',
    toelichtingMaandTitel: 'Monatsbetrag',
    toelichtingMaandFormule: 'Jahresbetrag ÷ 12',
    teruglevToggle: 'Ich speise ins Netz ein',
  },
  en: {
    appTitel: 'Energy Comparator',
    headerSub: 'Compare energy supplier offers by monthly cost',
    disclaimerTekst: 'Results are indicative only. The creator accepts no responsibility for calculation or input errors. The end user is solely responsible for verifying the accuracy of all results.',
    jaarverbruik: 'My annual consumption',
    verbruikGroep: 'Consumption',
    teruglevGroep: 'Feed-in',
    normaalKwhJaar: 'Normal (kWh/year)',
    dalKwhJaar: 'Off-peak (kWh/year)',
    offerteToevoegen: 'Add offer',
    offerteBewerken: 'Edit offer',
    bewerkBezig: 'Editing:',
    leverancier: 'Supplier',
    tarieftype: 'Tariff type',
    tarieftypeVast: 'Fixed',
    tarieftypeVariabel: 'Variable',
    looptijd: 'Contract length',
    looptijd1jaar: '1 year',
    looptijd2jaar: '2 years',
    looptijd3jaar: '3 years',
    looptijdOnbepaald: 'Indefinite',
    normaalTariefLabel: 'Normal tariff (€/kWh)',
    dalTariefLabel: 'Off-peak tariff (€/kWh)',
    totaaltarief: 'Total tariff',
    leveringstarief: 'Supply tariff',
    energiebelasting: 'Energy tax',
    vasteKosten: 'Fixed costs',
    leveringskosten: 'Delivery costs',
    netbeheerkosten: 'Network costs',
    vermindringEB: 'Energy tax reduction',
    terugleverTariefLabel: 'Feed-in tariff (€/kWh)',
    terugleverTariefNormaalLabel: 'Feed-in tariff normal',
    terugleverTariefDalLabel: 'Feed-in tariff off-peak',
    perJaar: 'per year',
    perMaandPeriode: 'per month',
    perDag: 'per day',
    voegToe: '+ Add offer',
    opslaan: 'Save',
    annuleer: 'Cancel',
    vergelijking: 'Comparison',
    leegMelding: 'Add an offer to start the comparison.',
    grafiekTitel: 'Monthly cost per supplier',
    kolomNr: '#',
    kolomLeverancier: 'Supplier',
    kolomTarieftype: 'Tariff type',
    kolomLooptijd: 'Contract',
    kolomNormaal: 'Normal (€/kWh)',
    kolomDal: 'Off-peak (€/kWh)',
    kolomVerbruikBedrag: 'Consumption (€/yr)',
    kolomTerugleverNormaal: 'Feed-in norm. (€/kWh)',
    kolomTerugleverDal: 'Feed-in off-pk. (€/kWh)',
    kolomLevering: 'Delivery (€/yr)',
    kolomNetbeheer: 'Network (€/yr)',
    kolomVermEB: 'Tax red. (€/yr)',
    kolomMaand: 'Monthly',
    kolomJaar: 'Annual',
    goedkoopst: 'Cheapest',
    btnBewerk: 'Edit',
    btnVerwijder: 'Remove',
    grafiekLabel: 'Monthly cost (€)',
    perMaand: 'month',
    alertTarief: 'Please fill in at least two of the three tariff fields for both normal and off-peak tariffs.',
    alertLeveringskosten: 'Please fill in the delivery costs.',
    toelichtingTitel: 'Calculation explained',
    toelichtingVerbruikTitel: 'Consumption cost (€/yr)',
    toelichtingVerbruikFormule: '(normal kWh/yr × normal tariff) + (off-peak kWh/yr × off-peak tariff)',
    toelichtingJaarTitel: 'Annual amount',
    toelichtingJaarFormule: 'consumption cost + delivery costs + network costs − energy tax reduction − feed-in revenue',
    toelichtingJaarTeruglev: 'where feed-in revenue = (feed-in normal kWh × feed-in normal tariff) + (feed-in off-peak kWh × feed-in off-peak tariff)',
    toelichtingMaandTitel: 'Monthly amount',
    toelichtingMaandFormule: 'annual amount ÷ 12',
    teruglevToggle: 'I feed back to the grid',
  },
};

// --- Staat ---

let offertes = [];
let verbruikNormaal    = 0;
let verbruikDal        = 0;
let teruglevNormaal    = 0;
let teruglevDal        = 0;
let grafiekInstantie   = null;
const berekendeVelden  = { normaal: null, dal: null };
let bewerkId           = null;
let taal               = localStorage.getItem('stroomvergelijker_taal') || 'nl';

// --- i18n helpers ---

function t(key) {
  return vertalingen[taal][key] ?? key;
}

function vertaalWaarde(veld, waarde) {
  const maps = {
    tarieftype: { Vast: t('tarieftypeVast'), Variabel: t('tarieftypeVariabel') },
    looptijd: {
      '1 jaar': t('looptijd1jaar'), '2 jaar': t('looptijd2jaar'),
      '3 jaar': t('looptijd3jaar'), Onbepaald: t('looptijdOnbepaald'),
    },
  };
  return maps[veld]?.[waarde] ?? waarde;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (vertalingen[taal][key] !== undefined) el.textContent = vertalingen[taal][key];
  });

  if (bewerkId === null) {
    document.getElementById('form-titel').textContent  = t('offerteToevoegen');
    document.getElementById('submit-btn').textContent  = t('voegToe');
  } else {
    document.getElementById('form-titel').textContent  = t('offerteBewerken');
    document.getElementById('submit-btn').textContent  = t('opslaan');
  }

  document.querySelectorAll('.taal-btn').forEach(btn => {
    btn.classList.toggle('actief', btn.dataset.lang === taal);
  });

  document.title = t('appTitel');
  document.documentElement.lang = taal;

  renderTabel();
  renderGrafiek();
}

function setTaal(nieuweTaal) {
  if (!vertalingen[nieuweTaal]) return;
  taal = nieuweTaal;
  localStorage.setItem('stroomvergelijker_taal', taal);
  applyTranslations();
}

// --- Berekening ---

function berekenMaandkosten(offerte) {
  const tariefNormaal = offerte.totaalTariefNormaal != null
    ? offerte.totaalTariefNormaal : (offerte.tariefNormaal || 0);
  const tariefDal = offerte.totaalTariefDal != null
    ? offerte.totaalTariefDal : (offerte.tariefDal || 0);

  const variabel = (verbruikNormaal * tariefNormaal + verbruikDal * tariefDal) / 12;

  const leveringskosten = offerte.leveringskosten != null
    ? offerte.leveringskosten : (offerte.vasteKosten || 0);
  const vast = (leveringskosten + (offerte.netbeheerkosten || 0) - (offerte.vermindringEB || 0)) / 12;

  const teruglever = (
    teruglevNormaal * (offerte.terugleverTariefNormaal || 0) +
    teruglevDal     * (offerte.terugleverTariefDal     || 0)
  ) / 12;

  return variabel + vast - teruglever;
}

// --- Tarief drieluik auto-berekening ---

function naarJaarlijks(waarde, periode) {
  if (!waarde || isNaN(waarde)) return 0;
  if (periode === 'dag')   return waarde * 365;
  if (periode === 'maand') return waarde * 12;
  return waarde;
}

function herbereken(prefix) {
  const ids = { totaal: `totaal-${prefix}`, levering: `levering-${prefix}`, eb: `eb-${prefix}` };

  const waarden = {};
  const gevuld  = {};
  ['totaal', 'levering', 'eb'].forEach(v => {
    const el = document.getElementById(ids[v]);
    const val = parseFloat(el.value);
    waarden[v] = isNaN(val) ? null : val;
    gevuld[v]  = waarden[v] !== null && el.value.trim() !== '';
  });

  const berekend = berekendeVelden[prefix];

  if (berekend !== null) {
    const anderen = ['totaal', 'levering', 'eb'].filter(v => v !== berekend && gevuld[v]);
    if (anderen.length === 2) {
      let waarde = null;
      if (berekend === 'totaal')   waarde = waarden.levering + waarden.eb;
      if (berekend === 'levering') waarde = waarden.totaal   - waarden.eb;
      if (berekend === 'eb')       waarde = waarden.totaal   - waarden.levering;
      if (waarde !== null) {
        const el = document.getElementById(ids[berekend]);
        el.value = waarde.toFixed(5);
        el.classList.add('berekend');
      }
    } else {
      document.getElementById(ids[berekend]).classList.remove('berekend');
      document.getElementById(ids[berekend]).value = '';
      berekendeVelden[prefix] = null;
    }
    return;
  }

  const leegeVelden = ['totaal', 'levering', 'eb'].filter(v => !gevuld[v]);
  if (leegeVelden.length === 1) {
    const te = leegeVelden[0];
    let waarde = null;
    if (te === 'totaal'   && gevuld.levering && gevuld.eb) waarde = waarden.levering + waarden.eb;
    if (te === 'levering' && gevuld.totaal   && gevuld.eb) waarde = waarden.totaal   - waarden.eb;
    if (te === 'eb'       && gevuld.totaal   && gevuld.levering) waarde = waarden.totaal - waarden.levering;
    if (waarde !== null) {
      const el = document.getElementById(ids[te]);
      el.value = waarde.toFixed(5);
      el.classList.add('berekend');
      berekendeVelden[prefix] = te;
    }
  }
}

function koppelTariefVelden() {
  ['normaal', 'dal'].forEach(prefix => {
    ['totaal', 'levering', 'eb'].forEach(veld => {
      const el = document.getElementById(`${veld}-${prefix}`);
      el.addEventListener('input', () => {
        if (berekendeVelden[prefix] === veld) berekendeVelden[prefix] = null;
        el.classList.remove('berekend');
        herbereken(prefix);
      });
    });
  });
}

// --- Opslag ---

function slaOp() {
  localStorage.setItem('stroomvergelijker_offertes',          JSON.stringify(offertes));
  localStorage.setItem('stroomvergelijker_normaal',           verbruikNormaal);
  localStorage.setItem('stroomvergelijker_dal',               verbruikDal);
  localStorage.setItem('stroomvergelijker_terlev_normaal',    teruglevNormaal);
  localStorage.setItem('stroomvergelijker_terlev_dal',        teruglevDal);
}

function laadOp() {
  const saved = key => localStorage.getItem(key);

  const savedOffertes = saved('stroomvergelijker_offertes');
  if (savedOffertes) {
    try { offertes = JSON.parse(savedOffertes); } catch (_) { offertes = []; }
  }

  const setInput = (storageKey, setter, elementId) => {
    const val = saved(storageKey);
    if (val !== null) {
      const num = parseFloat(val) || 0;
      setter(num);
      document.getElementById(elementId).value = num || '';
    }
  };

  setInput('stroomvergelijker_normaal',        v => { verbruikNormaal = v; }, 'verbruik-normaal');
  setInput('stroomvergelijker_dal',            v => { verbruikDal     = v; }, 'verbruik-dal');
  setInput('stroomvergelijker_terlev_normaal', v => { teruglevNormaal = v; }, 'teruglevering-normaal');
  setInput('stroomvergelijker_terlev_dal',     v => { teruglevDal     = v; }, 'teruglevering-dal');
}

// --- Render tabel ---

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function fmt4(val) { return val != null ? Number(val).toFixed(4) : '&mdash;'; }
function fmt2(val) { return val != null ? Number(val).toFixed(2) : '&mdash;'; }

function renderTabel() {
  const container = document.getElementById('tabel-container');

  if (offertes.length === 0) {
    container.innerHTML = `<p class="leeg-melding">${escapeHtml(t('leegMelding'))}</p>`;
    renderToelichting();
    return;
  }

  const gesorteerd = [...offertes].sort((a, b) => berekenMaandkosten(a) - berekenMaandkosten(b));
  const heeftTeruglever = gesorteerd.some(o => o.terugleverTariefNormaal != null || o.terugleverTariefDal != null);

  let rijen = '';
  gesorteerd.forEach((offerte, index) => {
    const maand         = berekenMaandkosten(offerte);
    const jaar          = maand * 12;
    const isGoedkoopste = index === 0;

    const tariefNormaal   = offerte.totaalTariefNormaal != null ? offerte.totaalTariefNormaal : (offerte.tariefNormaal || 0);
    const tariefDal       = offerte.totaalTariefDal     != null ? offerte.totaalTariefDal     : (offerte.tariefDal    || 0);
    const terlvNormaal    = offerte.terugleverTariefNormaal != null ? offerte.terugleverTariefNormaal : null;
    const terlvDal        = offerte.terugleverTariefDal     != null ? offerte.terugleverTariefDal     : null;
    const leveringskosten = offerte.leveringskosten != null ? offerte.leveringskosten : (offerte.vasteKosten || 0);
    const terlvCellen     = heeftTeruglever
      ? '<td>' + (terlvNormaal != null ? '&euro; ' + fmt4(terlvNormaal) : '&mdash;') + '</td>' +
        '<td>' + (terlvDal     != null ? '&euro; ' + fmt4(terlvDal)     : '&mdash;') + '</td>'
      : '';

    rijen += `
      <tr class="${isGoedkoopste ? 'goedkoopste' : ''}">
        <td>${index + 1}</td>
        <td>
          ${escapeHtml(offerte.naam)}
          ${isGoedkoopste ? `<span class="badge-goedkoopste">${escapeHtml(t('goedkoopst'))}</span>` : ''}
        </td>
        <td>${escapeHtml(vertaalWaarde('tarieftype', offerte.tarieftype))}</td>
        <td>${escapeHtml(vertaalWaarde('looptijd',   offerte.looptijd))}</td>
        <td>&euro; ${fmt4(tariefNormaal)}</td>
        <td>&euro; ${fmt4(tariefDal)}</td>
        <td>&euro; ${fmt2(verbruikNormaal * tariefNormaal + verbruikDal * tariefDal)}</td>
        ${terlvCellen}
        <td>&euro; ${fmt2(leveringskosten)}</td>
        <td>&euro; ${fmt2(offerte.netbeheerkosten || 0)}</td>
        <td>&euro; ${fmt2(offerte.vermindringEB   || 0)}</td>
        <td><span class="maandbedrag">&euro; ${maand.toFixed(2)}</span></td>
        <td><span class="jaarbedrag">&euro;  ${jaar.toFixed(2)}</span></td>
        <td>
          <div class="tabel-acties">
            <button class="bewerk-btn"   data-id="${escapeHtml(offerte.id)}" title="${escapeHtml(t('btnBewerk'))}">&#9998;</button>
            <button class="verwijder-btn" data-id="${escapeHtml(offerte.id)}" title="${escapeHtml(t('btnVerwijder'))}">&times;</button>
          </div>
        </td>
      </tr>`;
  });

  container.innerHTML = `
    <div class="tabel-scroll">
      <table>
        <thead>
          <tr>
            <th>${escapeHtml(t('kolomNr'))}</th>
            <th>${escapeHtml(t('kolomLeverancier'))}</th>
            <th>${escapeHtml(t('kolomTarieftype'))}</th>
            <th>${escapeHtml(t('kolomLooptijd'))}</th>
            <th>${escapeHtml(t('kolomNormaal'))}</th>
            <th>${escapeHtml(t('kolomDal'))}</th>
            <th>${escapeHtml(t('kolomVerbruikBedrag'))}</th>
            ${heeftTeruglever ? `<th>${escapeHtml(t('kolomTerugleverNormaal'))}</th><th>${escapeHtml(t('kolomTerugleverDal'))}</th>` : ''}
            <th>${escapeHtml(t('kolomLevering'))}</th>
            <th>${escapeHtml(t('kolomNetbeheer'))}</th>
            <th>${escapeHtml(t('kolomVermEB'))}</th>
            <th>${escapeHtml(t('kolomMaand'))}</th>
            <th>${escapeHtml(t('kolomJaar'))}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>${rijen}</tbody>
      </table>
    </div>`;

  container.querySelectorAll('.bewerk-btn').forEach(btn => {
    btn.addEventListener('click', () => bewerkOfferte(btn.dataset.id));
  });
  container.querySelectorAll('.verwijder-btn').forEach(btn => {
    btn.addEventListener('click', () => verwijderOfferte(btn.dataset.id));
  });

  renderToelichting();
}

// --- Render toelichting ---

function renderToelichting() {
  const container = document.getElementById('toelichting-container');
  if (!container) return;

  if (offertes.length === 0) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="toelichting">
      <h3 class="toelichting-titel">${escapeHtml(t('toelichtingTitel'))}</h3>
      <dl class="toelichting-lijst">
        <div class="toelichting-item">
          <dt>${escapeHtml(t('toelichtingVerbruikTitel'))}</dt>
          <dd>= <code>${escapeHtml(t('toelichtingVerbruikFormule'))}</code></dd>
        </div>
        <div class="toelichting-item">
          <dt>${escapeHtml(t('toelichtingJaarTitel'))}</dt>
          <dd>= <code>${escapeHtml(t('toelichtingJaarFormule'))}</code></dd>
          <dd class="toelichting-sub"><code>${escapeHtml(t('toelichtingJaarTeruglev'))}</code></dd>
        </div>
        <div class="toelichting-item">
          <dt>${escapeHtml(t('toelichtingMaandTitel'))}</dt>
          <dd>= <code>${escapeHtml(t('toelichtingMaandFormule'))}</code></dd>
        </div>
      </dl>
    </div>`;
}

// --- Render grafiek ---

function renderGrafiek() {
  const sectie = document.getElementById('grafiek-section');
  const canvas  = document.getElementById('grafiek');

  if (offertes.length === 0) { sectie.style.display = 'none'; return; }

  sectie.style.display = 'block';
  const gesorteerd    = [...offertes].sort((a, b) => berekenMaandkosten(a) - berekenMaandkosten(b));
  const labels        = gesorteerd.map(o => o.naam);
  const data          = gesorteerd.map(o => parseFloat(berekenMaandkosten(o).toFixed(2)));
  const kleuren       = labels.map((_, i) => i === 0 ? 'rgba(22,163,74,0.85)' : 'rgba(37,99,235,0.75)');
  const randenKleuren = labels.map((_, i) => i === 0 ? 'rgb(22,163,74)'       : 'rgb(37,99,235)');

  if (grafiekInstantie) { grafiekInstantie.destroy(); grafiekInstantie = null; }

  grafiekInstantie = new Chart(canvas, {
    type: 'bar',
    data: { labels, datasets: [{ label: t('grafiekLabel'), data, backgroundColor: kleuren, borderColor: randenKleuren, borderWidth: 1.5, borderRadius: 6 }] },
    options: {
      responsive: true, maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: ctx => ` € ${ctx.parsed.y.toFixed(2)} / ${t('perMaand')}` } },
      },
      scales: {
        y: { beginAtZero: false, ticks: { callback: val => `€ ${val}` }, grid: { color: 'rgba(0,0,0,0.05)' } },
        x: { grid: { display: false } },
      },
    },
  });
}

// --- CRUD ---

function verwijderOfferte(id) {
  offertes = offertes.filter(o => o.id !== id);
  slaOp(); renderTabel(); renderGrafiek();
}

// --- Bewerken ---

function vulFormulierIn(offerte) {
  document.getElementById('naam').value       = offerte.naam;
  document.getElementById('tarieftype').value = offerte.tarieftype;
  document.getElementById('looptijd').value   = offerte.looptijd;

  const setTarief = (prefix, totaal, levering, eb) => {
    document.getElementById(`totaal-${prefix}`).value   = totaal   != null ? totaal   : '';
    document.getElementById(`levering-${prefix}`).value = levering != null ? levering : '';
    document.getElementById(`eb-${prefix}`).value       = eb       != null ? eb       : '';
    ['totaal', 'levering', 'eb'].forEach(v =>
      document.getElementById(`${v}-${prefix}`).classList.remove('berekend')
    );
    berekendeVelden[prefix] = null;
  };

  setTarief('normaal',
    offerte.totaalTariefNormaal     ?? offerte.tariefNormaal ?? null,
    offerte.leveringsTariefNormaal  ?? null,
    offerte.energiebelastingNormaal ?? null,
  );
  setTarief('dal',
    offerte.totaalTariefDal     ?? offerte.tariefDal ?? null,
    offerte.leveringsTariefDal  ?? null,
    offerte.energiebelastingDal ?? null,
  );

  const lk = offerte.leveringskosten ?? offerte.vasteKosten ?? null;
  document.getElementById('leveringskosten').value          = lk != null ? Number(lk).toFixed(2) : '';
  document.getElementById('leveringskosten-periode').value  = 'jaar';
  document.getElementById('netbeheerkosten').value          = offerte.netbeheerkosten ? Number(offerte.netbeheerkosten).toFixed(2) : '';
  document.getElementById('netbeheerkosten-periode').value  = 'jaar';
  document.getElementById('vermindering-eb').value          = offerte.vermindringEB   ? Number(offerte.vermindringEB).toFixed(2)   : '';
  document.getElementById('vermindering-eb-periode').value  = 'jaar';

  const heeftTerlv = offerte.terugleverTariefNormaal != null || offerte.terugleverTariefDal != null;
  document.getElementById('heeft-teruglevering').checked          = heeftTerlv;
  document.getElementById('teruglevering-sectie').style.display   = heeftTerlv ? '' : 'none';
  document.getElementById('teruglever-normaal').value = offerte.terugleverTariefNormaal != null ? Number(offerte.terugleverTariefNormaal).toFixed(5) : '';
  document.getElementById('teruglever-dal').value     = offerte.terugleverTariefDal     != null ? Number(offerte.terugleverTariefDal).toFixed(5)     : '';
}

function bewerkOfferte(id) {
  const offerte = offertes.find(o => o.id === id);
  if (!offerte) return;
  bewerkId = id;
  vulFormulierIn(offerte);
  document.getElementById('form-titel').textContent      = t('offerteBewerken');
  document.getElementById('submit-btn').textContent      = t('opslaan');
  document.getElementById('bewerk-naam').textContent     = offerte.naam;
  document.getElementById('bewerk-banner').style.display = 'flex';
  document.getElementById('annuleer-btn').style.display  = 'inline-flex';
  document.querySelector('.offerte-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function annuleerBewerken() {
  bewerkId = null;
  berekendeVelden.normaal = null;
  berekendeVelden.dal     = null;
  ['totaal-normaal','levering-normaal','eb-normaal','totaal-dal','levering-dal','eb-dal']
    .forEach(id => document.getElementById(id).classList.remove('berekend'));
  document.getElementById('offerte-form').reset();
  document.getElementById('teruglevering-sectie').style.display = 'none';
  document.getElementById('form-titel').textContent      = t('offerteToevoegen');
  document.getElementById('submit-btn').textContent      = t('voegToe');
  document.getElementById('bewerk-banner').style.display = 'none';
  document.getElementById('annuleer-btn').style.display  = 'none';
}

// --- Formulier submit ---

function getTotaalTarief(prefix) {
  const totaal   = parseFloat(document.getElementById(`totaal-${prefix}`).value);
  const levering = parseFloat(document.getElementById(`levering-${prefix}`).value);
  const eb       = parseFloat(document.getElementById(`eb-${prefix}`).value);
  if (!isNaN(totaal))                 return totaal;
  if (!isNaN(levering) && !isNaN(eb)) return levering + eb;
  return null;
}

function getOptional(id) {
  const val = parseFloat(document.getElementById(id).value);
  return isNaN(val) ? null : val;
}

document.getElementById('offerte-form').addEventListener('submit', e => {
  e.preventDefault();

  const totaalNormaal = getTotaalTarief('normaal');
  const totaalDal     = getTotaalTarief('dal');
  if (totaalNormaal === null || totaalDal === null) { alert(t('alertTarief')); return; }

  const lkVal = parseFloat(document.getElementById('leveringskosten').value);
  if (isNaN(lkVal)) { alert(t('alertLeveringskosten')); return; }

  const offerte = {
    id: Date.now().toString(),
    naam:       document.getElementById('naam').value.trim(),
    tarieftype: document.getElementById('tarieftype').value,
    looptijd:   document.getElementById('looptijd').value,
    totaalTariefNormaal:     totaalNormaal,
    leveringsTariefNormaal:  getOptional('levering-normaal'),
    energiebelastingNormaal: getOptional('eb-normaal'),
    totaalTariefDal:         totaalDal,
    leveringsTariefDal:      getOptional('levering-dal'),
    energiebelastingDal:     getOptional('eb-dal'),
    terugleverTariefNormaal: document.getElementById('heeft-teruglevering').checked ? getOptional('teruglever-normaal') : null,
    terugleverTariefDal:     document.getElementById('heeft-teruglevering').checked ? getOptional('teruglever-dal')     : null,
    leveringskosten: naarJaarlijks(lkVal, document.getElementById('leveringskosten-periode').value),
    netbeheerkosten: naarJaarlijks(parseFloat(document.getElementById('netbeheerkosten').value) || 0, document.getElementById('netbeheerkosten-periode').value),
    vermindringEB:   naarJaarlijks(parseFloat(document.getElementById('vermindering-eb').value)  || 0, document.getElementById('vermindering-eb-periode').value),
  };

  if (bewerkId !== null) {
    const idx = offertes.findIndex(o => o.id === bewerkId);
    if (idx !== -1) offertes[idx] = { ...offerte, id: bewerkId };
  } else {
    offertes.push(offerte);
  }

  slaOp(); renderTabel(); renderGrafiek();
  annuleerBewerken();
});

// --- Verbruiks- en teruglevering invoer ---

[
  ['verbruik-normaal',     v => { verbruikNormaal = v; }],
  ['verbruik-dal',         v => { verbruikDal     = v; }],
  ['teruglevering-normaal',v => { teruglevNormaal = v; }],
  ['teruglevering-dal',    v => { teruglevDal     = v; }],
].forEach(([id, setter]) => {
  document.getElementById(id).addEventListener('input', e => {
    setter(parseFloat(e.target.value) || 0);
    slaOp(); renderTabel(); renderGrafiek();
  });
});

// --- Taalknappen ---

document.getElementById('heeft-teruglevering').addEventListener('change', function () {
  document.getElementById('teruglevering-sectie').style.display = this.checked ? '' : 'none';
});

document.querySelectorAll('.taal-btn').forEach(btn => {
  btn.addEventListener('click', () => setTaal(btn.dataset.lang));
});
document.getElementById('annuleer-btn').addEventListener('click', annuleerBewerken);

// --- Initialisatie ---

koppelTariefVelden();
laadOp();
applyTranslations();
