import React from "react";

// Use existing logo assets already used in the app
import taylorsLogo from "../src/Logo_of_Taylor's_University.svg";
import apuLogo from "../src/AsiaPacificUniversityOfTechnology&Innovation.svg.png";
import sunwayLogo from "../src/sunway_logo.png";
import segiLogo from "../src/ea-inst-logo-segi-univeristy-2023.webp";
import cityLogo from "../src/city_uni_logo.png";
import intiLogo from "../src/inti-university.webp";
import uniklLogo from "../src/unikl-logo-png-new.png";
import imuLogo from "../src/IMU_University_Malaysia.png";
import mahsaLogo from "../src/Home 3-MAHSA Logo.png";
import uocLogo from "../src/UoC_Logo.png";
import alfaLogo from "../src/alfa-logo.png";

type Item = {
  id: string;
  university: string;
  country: string;
  logo: any; // static import (string URL)
  learnMoreUrl: string;
};

const items: Item[] = [
  { id: "taylors", university: "Taylor's University", country: "Malaysia", logo: taylorsLogo, learnMoreUrl: "https://university.taylors.edu.my/" },
  { id: "apu", university: "Asia Pacific University (APU)", country: "Malaysia", logo: apuLogo, learnMoreUrl: "https://www.apu.edu.my/" },
  { id: "sunway-uni", university: "Sunway University", country: "Malaysia", logo: sunwayLogo, learnMoreUrl: "https://sunwayuniversity.edu.my/" },
  { id: "segi", university: "SEGi University", country: "Malaysia", logo: segiLogo, learnMoreUrl: "https://www.segi.edu.my/" },
  { id: "cityu", university: "City University", country: "Malaysia", logo: cityLogo, learnMoreUrl: "https://www.city.edu.my/" },
  { id: "inti", university: "INTI University", country: "Malaysia", logo: intiLogo, learnMoreUrl: "https://newinti.edu.my/" },
  { id: "unikl", university: "Universiti Kuala Lumpur (UniKL)", country: "Malaysia", logo: uniklLogo, learnMoreUrl: "https://www.unikl.edu.my/" },
  { id: "imu", university: "International Medical University (IMU)", country: "Malaysia", logo: imuLogo, learnMoreUrl: "https://www.imu.edu.my/" },
  { id: "mahsa", university: "MAHSA University", country: "Malaysia", logo: mahsaLogo, learnMoreUrl: "https://mahsa.edu.my/" },
  { id: "uoc", university: "University of Cyberjaya", country: "Malaysia", logo: uocLogo, learnMoreUrl: "https://cyberjaya.edu.my/" },
  { id: "alfa", university: "ALFA University College", country: "Malaysia", logo: alfaLogo, learnMoreUrl: "https://www.alfa.edu.my/" },
].filter(Boolean);

export default function UniversityStrip() {
  if (!items.length) return null;
  const firstId = `uni-${items[0].id}`;
  const lastId = `uni-${items[items.length - 1].id}`;

  const css = `
  .uniStrip-wrap { --bg1:#0b1325; --bg2:#0e1a35; --card:#0f172a; --text:#e5e7eb; --muted:#94a3b8; --ring:#2A9D8F; color: var(--text); padding: 1rem; border-radius: 1rem; background: linear-gradient(135deg,var(--bg1),var(--bg2)); }
  .uniStrip-hd { display:flex; align-items:center; justify-content:space-between; gap:.75rem; margin-bottom:.75rem; }
  .uniStrip-title { font-size:1.125rem; font-weight:600; }
  .uniStrip-arrows { display:flex; gap:.5rem; }
  .uniStrip-arrows a { display:inline-flex; align-items:center; justify-content:center; width:2.25rem; height:2.25rem; border-radius:.5rem; background:rgba(255,255,255,.06); color:var(--text); text-decoration:none; border:1px solid rgba(255,255,255,.12); transition:background .25s ease, transform .25s ease; }
  .uniStrip-arrows a:hover { background:rgba(255,255,255,.12); transform:translateY(-1px); }
  .uniStrip-row { display:flex; gap:.75rem; overflow-x:auto; scroll-snap-type:x mandatory; scroll-behavior:smooth; padding:.25rem; }
  .uniStrip-row::-webkit-scrollbar { height:10px; }
  .uniStrip-row::-webkit-scrollbar-track { background:transparent; }
  .uniStrip-row::-webkit-scrollbar-thumb { background:rgba(255,255,255,.1); border-radius:999px; }
  .uniStrip-card { scroll-snap-align:start; flex:0 0 82%; max-width:82%; display:block; text-decoration:none; color:inherit; background:var(--card); border:1px solid rgba(255,255,255,.1); border-radius:14px; padding:.75rem; transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease; box-shadow:0 6px 20px rgba(0,0,0,.25); }
  .uniStrip-card:hover { transform:translateY(-2px); border-color:var(--ring); box-shadow:0 10px 28px rgba(0,0,0,.35); }
  .uniStrip-logoBox { width:100%; aspect-ratio: 16/9; background:#ffffff; border:1px solid rgba(255,255,255,.2); border-radius:10px; display:grid; place-items:center; overflow:hidden; padding:8px; }
  .uniStrip-logo { width:100%; height:100%; object-fit:contain; }
  .uniStrip-name { margin-top:.55rem; font-weight:600; line-height:1.2; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
  .uniStrip-country { margin-top:.15rem; font-size:.8rem; color:var(--muted); }
  @media (min-width:480px){ .uniStrip-card{ flex-basis: 48%; max-width:48%; } }
  @media (min-width:768px){ .uniStrip-card{ flex-basis: 31%; max-width:31%; } }
  @media (min-width:1024px){ .uniStrip-card{ flex-basis: 19%; max-width:19%; } }
  `;

  return (
    <section className="container-px max-w-7xl mx-auto py-10">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="uniStrip-wrap" aria-label="Partner universities strip">
        <div className="uniStrip-hd">
          <div className="uniStrip-title">Partner Universities</div>
          <div className="uniStrip-arrows">
            <a className="uniStrip-prev" href={`#${lastId}`} aria-label="Scroll to previous card">&lt;</a>
            <a className="uniStrip-next" href={`#${firstId}`} aria-label="Scroll to next card">&gt;</a>
          </div>
        </div>
        <div className="uniStrip-row">
          {items.map((it) => (
            <React.Fragment key={it.id}>
              <span id={`uni-${it.id}`} className="uniStrip-target" />
              <div className="uniStrip-card" role="group" aria-label={it.university}>
                <div className="uniStrip-logoBox">
                  <img className="uniStrip-logo" src={(it.logo as any).src ?? it.logo} alt={`${it.university} logo`} />
                </div>
                <div className="uniStrip-name">{it.university}</div>
                <div className="uniStrip-country">{it.country}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

