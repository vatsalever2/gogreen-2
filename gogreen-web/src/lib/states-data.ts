import type { StatePageData } from "@/components/state-page-template";

export const statesData: Record<string, StatePageData> = {
  virginia: {
    code: "VA",
    name: "Virginia",
    slug: "virginia",
    priority: true,
    hero: {
      title: "Solar EPC across Virginia.",
      description:
        "Engineering-driven solar EPC, BESS and R&R across Virginia, from Northern Virginia commercial portfolios to Southside DG projects. HQ in Herndon.",
    },
    context:
      "Virginia is our home state and headquarters. We operate end-to-end across NoVA, the Richmond metro, Hampton Roads and the Shenandoah Valley, with experience on commercial portfolios, distributed generation projects, and residential systems.",
    cities: ["Herndon", "Reston", "Arlington", "Fairfax", "Loudoun", "Richmond", "Norfolk", "Roanoke"],
    projectTypes: [
      { title: "Commercial rooftop", body: "100 kW – 1.5 MW+ rooftop systems for commercial buildings, distribution centers and industrial sites." },
      { title: "Distributed generation", body: "DG-scale ground-mount and rooftop solar with utility interconnection and PJM coordination." },
      { title: "Residential 5–25 kW", body: "Whole-home solar with optional battery storage, integrated with the existing electrical service." },
      { title: "Removal & Reinstallation", body: "Re-roof and reinstall on existing commercial systems, often with inverter upgrades and re-stringing." },
      { title: "BESS for resilience", body: "Tesla Powerwall, Franklin and EG4 systems for residential, plus commercial BESS for peak-shaving and backup." },
      { title: "O&M and electrical", body: "Multi-state Master Electrician scope across Virginia, service upgrades, panel work, and lifecycle O&M." },
    ],
    certifications: [
      "Class A Contractor License (VA)",
      "Master Electrician (VA)",
      "NABCEP PVIP",
      "Tesla Powerwall Certified",
      "Franklin Battery Certified",
      "EG4 Battery Certified",
      "Sol-Ark Certified",
      "OSHA Compliant",
    ],
  },

  maryland: {
    code: "MD",
    name: "Maryland",
    slug: "maryland",
    priority: true,
    hero: {
      title: "Solar EPC across Maryland.",
      description:
        "Engineering-driven solar EPC, BESS and R&R for Maryland commercial buildings, distributed generation projects, and residential homes, from the DC suburbs to the Eastern Shore.",
    },
    context:
      "Maryland is one of our most active markets. We work across Montgomery County, Prince George's, Howard, Anne Arundel and Baltimore, serving commercial owners, developers, and homeowners with full-scope EPC and integrated battery storage.",
    cities: ["Bethesda", "Rockville", "Silver Spring", "Annapolis", "Baltimore", "Columbia", "Frederick", "Salisbury"],
    projectTypes: [
      { title: "Commercial rooftop EPC", body: "Full-scope EPC for commercial buildings, engineering, procurement, install and commissioning." },
      { title: "DG ground-mount", body: "Distributed generation projects with full PJM and utility interconnection coordination." },
      { title: "Battery storage", body: "Tesla Powerwall, Franklin and EG4 BESS for residential resilience and commercial peak-shaving." },
      { title: "R&R for aging systems", body: "Re-roof and reinstallation on early-generation commercial and residential systems." },
      { title: "Residential turnkey", body: "5–25 kW systems with optional battery and EV-charger integration." },
      { title: "O&M coverage", body: "Maryland-wide service response under our 48-hour SLA, with prioritized response on critical issues." },
    ],
    certifications: [
      "Master Electrician (MD)",
      "NABCEP PVIP",
      "Class A Contractor License",
      "Tesla Powerwall Certified",
      "SolarEdge Certified",
      "Enphase Certified",
      "CertainTeed Master Craftsman",
      "OSHA Compliant",
    ],
  },

  "washington-dc": {
    code: "DC",
    name: "Washington, D.C.",
    slug: "washington-dc",
    priority: true,
    hero: {
      title: "Solar EPC in Washington, D.C.",
      description:
        "Solar EPC, BESS and lifecycle services for D.C. commercial buildings, multi-family, residential, and integrated solar-plus-storage projects.",
    },
    context:
      "Washington, D.C. has unique site, AHJ and historic-district considerations. We've delivered commercial rooftop arrays, multi-family solar, residential systems and BESS installations across the District, coordinating closely with DCRA / DOB and Pepco.",
    cities: ["Capitol Hill", "Georgetown", "Foggy Bottom", "Dupont", "Logan Circle", "NoMa", "Anacostia", "U Street"],
    projectTypes: [
      { title: "Commercial rooftop solar", body: "Multi-tenant commercial buildings and government-adjacent commercial portfolios." },
      { title: "Multi-family solar", body: "Solar systems for multi-family buildings with metering and tenant allocation considerations." },
      { title: "Residential systems", body: "Compact urban systems engineered around historic-district and zoning constraints." },
      { title: "BESS + solar", body: "Battery storage paired with PV for resilience and peak-load management." },
      { title: "R&R for D.C. roofs", body: "TPO, EPDM and metal roof replacements with reinstall, common in the D.C. building stock." },
      { title: "Service upgrades", body: "Electrical service upgrades and panel replacements paired with new solar capacity." },
    ],
    certifications: [
      "Master Electrician (DC)",
      "NABCEP PVIP",
      "Class A Contractor License",
      "Tesla Powerwall Certified",
      "Pepco-coordinated EPCs",
      "OSHA Compliant",
      "DCRA / DOB experienced",
      "Historic district experience",
    ],
  },

  pennsylvania: {
    code: "PA",
    name: "Pennsylvania",
    slug: "pennsylvania",
    priority: false,
    hero: {
      title: "Solar EPC across Pennsylvania.",
      description:
        "Commercial and residential solar EPC, BESS, and R&R across Pennsylvania, from the Philadelphia metro through Central PA and into Pittsburgh.",
    },
    context:
      "Pennsylvania has strong commercial solar momentum, especially in distribution, manufacturing, and warehousing. We support EPC, R&R and O&M scope across the state, with experience on PJM-interconnected DG and warehouse-scale rooftop arrays.",
    cities: ["Philadelphia", "King of Prussia", "Lancaster", "Harrisburg", "Allentown", "Reading", "State College", "Pittsburgh"],
    projectTypes: [
      { title: "Warehouse-scale rooftop", body: "Distribution and logistics buildings with large rooftop arrays." },
      { title: "DG ground-mount", body: "PJM-interconnected DG projects with utility coordination." },
      { title: "Reinstallation & re-roof", body: "Aging commercial systems needing roof replacement and inverter modernization." },
      { title: "Industrial solar", body: "Manufacturing facilities with on-site generation and demand-charge management." },
      { title: "Residential solar", body: "Whole-home systems with battery backup and EV-charger integration." },
      { title: "BESS for demand mgmt", body: "Commercial BESS for demand-charge mitigation and TOU optimization." },
    ],
    certifications: [
      "NABCEP PVIP",
      "Master Electrician credentials",
      "Class A Contractor",
      "Tesla Powerwall Certified",
      "SolarEdge Certified",
      "Enphase Certified",
      "OSHA Compliant",
      "PJM-interconnection experienced",
    ],
  },

  "west-virginia": {
    code: "WV",
    name: "West Virginia",
    slug: "west-virginia",
    priority: false,
    hero: {
      title: "Solar EPC across West Virginia.",
      description:
        "Commercial and residential solar EPC, BESS and lifecycle services across West Virginia, with engineering rigor matched to the unique site conditions.",
    },
    context:
      "West Virginia projects often involve more terrain, structural, and electrical-infrastructure work than typical urban sites. Our engineering-led approach is well suited to those constraints, and our crews are experienced with rural and industrial sites.",
    cities: ["Charleston", "Huntington", "Morgantown", "Wheeling", "Parkersburg", "Martinsburg", "Beckley", "Clarksburg"],
    projectTypes: [
      { title: "Commercial rooftop", body: "Commercial and light-industrial rooftop arrays." },
      { title: "Ground-mount DG", body: "Ground-mount DG projects on rural and industrial sites." },
      { title: "Off-grid / hybrid", body: "Hybrid solar + battery systems for sites with weak grid infrastructure." },
      { title: "R&R", body: "Removal and reinstallation for aging commercial systems." },
      { title: "Residential", body: "Whole-home solar with battery backup for rural homes." },
      { title: "Service & O&M", body: "Lifecycle support across the state with our 48-hour SLA." },
    ],
    certifications: [
      "NABCEP PVIP",
      "Master Electrician credentials",
      "Class A Contractor",
      "OSHA Compliant",
      "Tesla Powerwall Certified",
      "Sol-Ark Certified",
      "EG4 Battery Certified",
      "Franklin Battery Certified",
    ],
  },

  delaware: {
    code: "DE",
    name: "Delaware",
    slug: "delaware",
    priority: false,
    hero: {
      title: "Solar EPC across Delaware.",
      description:
        "Solar EPC, BESS, and lifecycle services across Delaware, with full-scope coverage from Wilmington through Dover and the beach communities.",
    },
    context:
      "Delaware's commercial sector and beach-community residential market both benefit from solar, and we have experience with the AHJ specifics across New Castle, Kent and Sussex counties.",
    cities: ["Wilmington", "Newark", "Dover", "Middletown", "Smyrna", "Lewes", "Rehoboth Beach", "Georgetown"],
    projectTypes: [
      { title: "Commercial rooftop", body: "Commercial buildings, light industrial and warehousing across the state." },
      { title: "Coastal residential", body: "Coastal homes engineered for higher wind loads and salt environments." },
      { title: "BESS for resilience", body: "Storage paired with solar for storm-resilience and peak-shaving." },
      { title: "R&R", body: "Removal and reinstall paired with our roofing division." },
      { title: "EV + solar", body: "Combined EV-charger and solar installs for residential and commercial fleets." },
      { title: "Service & O&M", body: "48-hour SLA service coverage across all three counties." },
    ],
    certifications: [
      "NABCEP PVIP",
      "Master Electrician credentials",
      "Class A Contractor",
      "Tesla Powerwall Certified",
      "Enphase Certified",
      "SolarEdge Certified",
      "CertainTeed Master Craftsman",
      "OSHA Compliant",
    ],
  },
  "new-jersey": {
    code: "NJ",
    name: "New Jersey",
    slug: "new-jersey",
    priority: false,
    hero: {
      title: "Solar EPC across New Jersey.",
      description:
        "Commercial and residential solar EPC, BESS, and lifecycle services across New Jersey, with full-scope coverage from Newark to Cape May.",
    },
    context:
      "New Jersey is a mature and robust solar market with strong incentives. We support EPC, R&R and O&M scope across the state, navigating local AHJ requirements and utility interconnections.",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", "Woodbridge", "Toms River", "Hamilton"],
    projectTypes: [
      { title: "Commercial rooftop", body: "Commercial buildings, light industrial and warehousing across the state." },
      { title: "Residential solar", body: "Whole-home systems with battery backup and EV-charger integration." },
      { title: "BESS for resilience", body: "Storage paired with solar for storm-resilience and peak-shaving." },
      { title: "R&R", body: "Removal and reinstall paired with our roofing division." },
      { title: "EV + solar", body: "Combined EV-charger and solar installs for residential and commercial fleets." },
      { title: "Service & O&M", body: "Service coverage across the state with our SLA." },
    ],
    certifications: [
      "NABCEP PVIP",
      "Master Electrician credentials",
      "Class A Contractor",
      "Tesla Powerwall Certified",
      "Enphase Certified",
      "SolarEdge Certified",
      "CertainTeed Master Craftsman",
      "OSHA Compliant",
    ],
  },
};
