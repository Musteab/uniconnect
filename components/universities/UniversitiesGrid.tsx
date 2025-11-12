"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "@/components/ui/Modal";

import sunwayLogo from "../../src/sunway_logo.png";
import taylorsLogo from "../../src/Logo_of_Taylor's_University.svg";
import apuLogo from "../../src/AsiaPacificUniversityOfTechnology&Innovation.svg.png";
import segiLogo from "../../src/ea-inst-logo-segi-univeristy-2023.webp";
import cityLogo from "../../src/city_uni_logo.png";
import intiLogo from "../../src/inti-university.webp";
import uniklLogo from "../../src/unikl-logo-png-new.png";
import imuLogo from "../../src/IMU_University_Malaysia.png";
import mahsaLogo from "../../src/Home 3-MAHSA Logo.png";
import uocLogo from "../../src/UoC_Logo.png";
import alfaLogo from "../../src/alfa-logo.png";

type Uni = {
  id: string;
  name: string;
  country: string;
  logo: any;
  blurb: string;
  programs: string[];
  tuition: string;
  intakes: string;
};

const universities: Uni[] = [
  { id: "taylors", name: "Taylor's University", country: "Malaysia", logo: taylorsLogo, blurb: "Top private university known for excellence in teaching and industry links.", programs: ["Business", "Engineering", "Hospitality"], tuition: "MYR 30k�?"55k/year", intakes: "Jan, Mar, Aug" },
  { id: "apu", name: "Asia Pacific University (APU)", country: "Malaysia", logo: apuLogo, blurb: "Renowned for technology and innovation-focused programs.", programs: ["Software Engineering", "Cybersecurity", "Data Science"], tuition: "MYR 25k�?"45k/year", intakes: "Jan, Apr, Sep" },
  { id: "sunway", name: "Sunway University", country: "Malaysia", logo: sunwayLogo, blurb: "Leading research and teaching university in Sunway City.", programs: ["Accounting", "Computer Science", "Biomed"], tuition: "MYR 28k�?"50k/year", intakes: "Jan, Apr, Aug" },
  { id: "segi", name: "SEGi University", country: "Malaysia", logo: segiLogo, blurb: "Diverse programs with strong industry partnerships.", programs: ["Early Childhood", "Business", "IT"], tuition: "MYR 18k�?"35k/year", intakes: "Jan, May, Sep" },
  { id: "city", name: "City University", country: "Malaysia", logo: cityLogo, blurb: "Career-focused programs and practical learning.", programs: ["Design", "Business", "IT"], tuition: "MYR 16k�?"30k/year", intakes: "Mar, Jul, Oct" },
  { id: "inti", name: "INTI International University", country: "Malaysia", logo: intiLogo, blurb: "Global pathways with international collaboration.", programs: ["Business", "IT", "Mass Comm"], tuition: "MYR 20k�?"40k/year", intakes: "Jan, May, Aug" },
  { id: "unikl", name: "Universiti Kuala Lumpur (UniKL)", country: "Malaysia", logo: uniklLogo, blurb: "Applied science and engineering powerhouse.", programs: ["Engineering", "Manufacturing", "Aviation"], tuition: "MYR 15k�?"35k/year", intakes: "Jan, Jul" },
  { id: "imu", name: "IMU University", country: "Malaysia", logo: imuLogo, blurb: "Malaysia�?Ts first and most established private medical and health sciences university.", programs: ["Medicine", "Pharmacy", "Nursing"], tuition: "MYR 45k�?"90k/year", intakes: "Feb, Jul, Sep" },
  { id: "mahsa", name: "MAHSA University", country: "Malaysia", logo: mahsaLogo, blurb: "Healthcare-focused university with modern facilities.", programs: ["Dentistry", "Physiotherapy", "Medicine"], tuition: "MYR 25k�?"80k/year", intakes: "Jan, Apr, Sep" },
  { id: "uoc", name: "University of Cyberjaya", country: "Malaysia", logo: uocLogo, blurb: "Specialized programs in healthcare and technology.", programs: ["IT", "Healthcare", "Business"], tuition: "MYR 20k�?"45k/year", intakes: "Jan, May, Sep" },
  { id: "alfa", name: "ALFA University", country: "Malaysia", logo: alfaLogo, blurb: "Creative disciplines and design-focused learning.", programs: ["Architecture", "Graphic Design", "Interior Design"], tuition: "MYR 18k�?"35k/year", intakes: "Feb, Jun, Oct" },
];

export default function UniversitiesGrid() {
  const [selected, setSelected] = useState<Uni | null>(null);

  return (
    <>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {universities.map((u, i) => (
          <motion.div
            id={u.id}
            key={u.id}
            className="rounded-xl border border-gray-200 p-5 bg-white text-slate-900 shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ y: -4, scale: 1.01, boxShadow: "0 12px 28px rgba(0,0,0,0.12)" }}
          >
            <div className="relative h-12 w-full mb-3">
              <Image src={u.logo} alt={`${u.name} logo`} fill className="object-contain" sizes="(max-width:768px) 50vw, 300px" />
            </div>
            <div className="font-medium">{u.name}</div>
            <div className="text-sm text-slate-600">{u.country} �?� {u.blurb}</div>
          </motion.div>
        ))}
      </div>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-32">
                <Image src={selected.logo} alt={`${selected.name} logo`} fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{selected.name}</h3>
                <div className="text-xs text-slate-600">{selected.country}</div>
              </div>
            </div>
            <p className="mt-3 text-sm text-slate-700">{selected.blurb}</p>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              <div className="rounded-lg border border-gray-200 p-3 bg-white">
                <div className="text-xs uppercase text-slate-500">Popular Programs</div>
                <ul className="mt-1 text-sm text-slate-800 list-disc list-inside">
                  {selected.programs.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <div className="rounded-lg border border-gray-200 p-3 bg-white">
                <div className="text-xs uppercase text-slate-500">Estimated Tuition</div>
                <div className="mt-1 text-sm text-slate-800">{selected.tuition}</div>
              </div>
              <div className="rounded-lg border border-gray-200 p-3 bg-white">
                <div className="text-xs uppercase text-slate-500">Intakes</div>
                <div className="mt-1 text-sm text-slate-800">{selected.intakes}</div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

